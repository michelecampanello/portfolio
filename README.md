# Michele Campanello — Portfolio

Portfolio personale di **Michele Campanello**, Full Stack Developer a Bari.
Sito statico a pagina singola costruito con [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com).

Il design è "editoriale", con richiami al mondo della musica e del cinema: colori carta e inchiostro con un solo accento arancio, titoli in serif, sezioni numerate come i lati di un disco (A1, A2, B1…) e la formazione presentata come una tracklist.

## Caratteristiche

- **Contenuti in un solo file**: testi, competenze, formazione, lingue e progetti sono in `src/data/cv.ts`.
- **Tema chiaro e scuro**: all'inizio segue il sistema, poi ricorda la scelta fatta con il pulsante "Notte/Giorno".
- **Responsive**: layout pensato sia per desktop sia per mobile, con menu dedicato su schermi piccoli.
- **Animazioni leggere**: comparsa delle sezioni allo scroll, disco che gira e nastro scorrevole con lo stack. Si disattivano se il sistema chiede di ridurre le animazioni, e senza JavaScript i contenuti restano visibili.
- **Font self-hosted** tramite Fontsource (Fraunces, Instrument Sans, JetBrains Mono): nessuna richiesta a Google Fonts.
- **Immagini ottimizzate**: la foto è convertita in WebP in più misure da `astro:assets`.
- **Zero framework lato client**: solo piccoli script per tema, menu, orologio e copia dell'email.

## Requisiti

- Node.js `>= 22.23.4`
- npm

## Avvio rapido

```sh
npm install
npm run dev
```

Il sito è disponibile su `http://localhost:4321`.

Per tenere il server di sviluppo in background:

```sh
npx astro dev --background   # avvia
npx astro dev status         # stato
npx astro dev logs           # log
npx astro dev stop           # ferma
```

## Comandi

| Comando           | Azione                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Installa le dipendenze                          |
| `npm run dev`     | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build`   | Genera il sito statico in `./dist/`             |
| `npm run preview` | Mostra in locale la build di produzione         |

## Struttura

```text
/
├── public/                 # favicon e file serviti così come sono
├── src/
│   ├── assets/
│   │   └── michele.png     # foto della sezione "Chi sono"
│   ├── components/
│   │   ├── Nav.astro       # barra in alto, tema, orologio, menu mobile
│   │   ├── Hero.astro      # nome, disco e nastro con lo stack
│   │   ├── Section.astro   # intestazione comune delle sezioni
│   │   ├── About.astro     # A1 · Chi sono, con foto
│   │   ├── Skills.astro    # A2 · Stack
│   │   ├── Projects.astro  # B1 · Progetti (solo se ce ne sono)
│   │   ├── Education.astro # Tracklist della formazione e lingue
│   │   └── Contact.astro   # Contatti
│   ├── data/
│   │   └── cv.ts           # tutti i contenuti del sito
│   ├── layouts/
│   │   └── Layout.astro    # <head>, meta tag, script del tema
│   ├── pages/
│   │   └── index.astro     # la pagina, composta dai componenti
│   └── styles/
│       └── global.css      # Tailwind, font, palette e stili condivisi
└── astro.config.mjs
```

## Modificare i contenuti

Quasi tutto si cambia da `src/data/cv.ts`:

- **`profile`**: nome, ruolo, città, email, testo introduttivo, citazione, storia e dati in evidenza.
  - `phone`, `github` e `linkedin` compaiono nella sezione Contatti solo se compilati.
- **`skills`**: le aree dello stack, ognuna con una breve descrizione e l'elenco delle tecnologie.
- **`education`**: la tracklist della formazione, dalla più recente.
- **`languages`**: lingue, livello e una nota.
- **`projects`**: i progetti. La sezione "Progetti" e la sua voce di menu compaiono solo quando l'elenco non è vuoto.

```ts
export const projects = [
  {
    title: 'Nome progetto',
    description: 'Cosa fa, in una o due frasi.',
    stack: ['React', 'Node.js'],
    year: '2026',            // facoltativo
    url: 'https://...',      // facoltativo: demo online
    repo: 'https://...',     // facoltativo: codice sorgente
  },
];
```

Per cambiare la foto sostituisci `src/assets/michele.png` mantenendo lo stesso nome (meglio se quadrata e almeno 800×800 px).

Il testo dei contatti è in `src/components/Contact.astro`.

## Personalizzare lo stile

Palette e font sono definiti come variabili CSS in `src/styles/global.css`:

| Variabile  | Uso                         |
| :--------- | :-------------------------- |
| `--paper`  | sfondo                      |
| `--ink`    | testo principale            |
| `--soft`   | testo secondario            |
| `--rule`   | linee e bordi               |
| `--signal` | colore di accento (arancio) |

Ogni variabile ha un valore per il tema chiaro (`:root`) e uno per quello scuro (`.dark`), ed è disponibile anche come classe Tailwind (`bg-paper`, `text-ink`, `text-signal`…).

## Pubblicazione

`npm run build` genera un sito completamente statico in `dist/`, pubblicabile su qualsiasi hosting statico (Netlify, Vercel, GitHub Pages, Cloudflare Pages…).

Su Netlify, per esempio:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Contatti

[campanellomichele@outlook.it](mailto:campanellomichele@outlook.it)
