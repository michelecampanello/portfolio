// Un'immagine di anteprima per pagina: /og/index.png per la home, /og/<slug>.png per ogni case study.
import type { APIRoute, GetStaticPaths } from "astro";
import { renderOg, type OgCard } from "../../lib/og";
import { profile, projects } from "../../data/cv";
import { caseStudies } from "../../data/case-studies";

const domain = "michelecampanello.dev";

export const getStaticPaths = (() => {
  const home: OgCard = {
    kicker: `${profile.role} · ${profile.city}`,
    title: profile.name,
    subtitle: profile.quote,
    footer: [domain, profile.status.split("·")[0].trim()],
    photo: "src/assets/michele.png",
  };
  const studies = caseStudies.flatMap((s) => {
    const p = projects.find((p) => p.slug === s.slug);
    if (!p) return [];
    const card: OgCard = {
      kicker: `${s.kicker} · ${p.year}`,
      title: p.title,
      subtitle: s.tagline.split(":")[0] + ".",
      footer: [`${domain}/progetti/${s.slug}`, p.stack.join(" / ")],
    };
    return [{ params: { slug: s.slug }, props: { card } }];
  });
  return [{ params: { slug: "index" }, props: { card: home } }, ...studies];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg((props as { card: OgCard }).card);
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
