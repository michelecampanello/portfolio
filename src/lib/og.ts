// Immagini di anteprima per i social (1200×630), generate in fase di build con satori + resvg.
// satori non legge i .woff2: per questo usa i font statici .woff di @fontsource (devDependencies).
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const root = process.cwd();
const font = (pkg: string, file: string) => readFile(join(root, "node_modules/@fontsource", pkg, "files", file));

const colors = { paper: "#f1ece2", paper2: "#e8e1d3", ink: "#161412", soft: "#5e5850", rule: "#cfc6b5", signal: "#e8461e" };

type Node = { type: string; props: Record<string, unknown> & { style?: Record<string, unknown>; children?: unknown } };
const h = (type: string, style: Record<string, unknown>, children?: unknown, props: Record<string, unknown> = {}): Node => ({
  type,
  props: { ...props, style: { display: "flex", ...style }, children },
});

export interface OgCard {
  kicker: string;
  title: string;
  subtitle: string;
  footer: [string, string];
  photo?: string; // percorso di un'immagine da mostrare come polaroid, relativo alla radice del progetto
}

export async function renderOg(card: OgCard): Promise<Buffer> {
  const [serif, serifItalic, mono] = await Promise.all([
    font("fraunces", "fraunces-latin-500-normal.woff"),
    font("fraunces", "fraunces-latin-500-italic.woff"),
    font("jetbrains-mono", "jetbrains-mono-latin-500-normal.woff"),
  ]);
  const photo = card.photo ? `data:image/png;base64,${(await readFile(join(root, card.photo))).toString("base64")}` : null;
  const label = { fontFamily: "Mono", fontSize: 22, letterSpacing: 2, textTransform: "uppercase" };

  // Larghezza utile: 1200 - 2×64 di margine, meno la polaroid quando c'è.
  const textWidth = photo ? 1072 - 380 : 1072;
  const words = card.title.split(" ");
  const titleSize = card.title.length > 14 ? 104 : 140;

  const text = h("div", { flexDirection: "column", width: textWidth, justifyContent: "space-between" }, [
    h("div", { ...label, color: colors.signal }, card.kicker),
    h("div", { flexDirection: "column", gap: 24 }, [
      // Una parola per elemento, così il punto resta attaccato all'ultima anche quando il titolo va a capo.
      h(
        "div",
        { flexWrap: "wrap", columnGap: titleSize * 0.25, fontFamily: "Serif", fontSize: titleSize, lineHeight: 0.95, letterSpacing: -3 },
        words.map((w, i) => (i === words.length - 1 ? h("div", {}, [w, h("span", { color: colors.signal }, ".")]) : h("div", {}, w))),
      ),
      h("div", { fontFamily: "Serif", fontStyle: "italic", fontSize: 36, lineHeight: 1.25, color: colors.soft }, card.subtitle),
    ]),
    h("div", { ...label, fontSize: 18, color: colors.soft, justifyContent: "space-between", gap: 24, borderTop: `2px solid ${colors.ink}`, paddingTop: 18 }, [
      h("div", {}, card.footer[0]),
      h("div", {}, card.footer[1]),
    ]),
  ]);

  const polaroid = photo
    ? h("div", { width: 380, flexShrink: 0, alignItems: "center", justifyContent: "flex-end" }, [
        h("div", { flexDirection: "column", padding: 14, paddingBottom: 56, background: colors.paper2, border: `2px solid ${colors.rule}`, transform: "rotate(-3deg)" }, [
          h("img", { width: 300, height: 300, objectFit: "cover" }, undefined, { src: photo, width: 300, height: 300 }),
        ]),
      ])
    : null;

  const svg = await satori(
    // satori non include il padding nelle misure: 1072×502 + 2×64 di margine = 1200×630.
    h("div", { width: 1072, height: 502, padding: 64, background: colors.paper, color: colors.ink }, polaroid ? [text, polaroid] : [text]) as never,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Serif", data: serif, weight: 500, style: "normal" },
        { name: "Serif", data: serifItalic, weight: 500, style: "italic" },
        { name: "Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}
