// Case study dei progetti: ogni voce diventa una pagina in /progetti/<slug>.
// Lo slug deve coincidere con quello del progetto in cv.ts.

export interface CaseStudy {
  slug: string;
  kicker: string;
  /** Data di pubblicazione (AAAA-MM-GG), per i dati strutturati. */
  published: string;
  tagline: string;
  role: string;
  context: string;
  stats: { value: string; label: string }[];
  goal: string[];
  architecture: { layer: string; tech: string; note: string }[];
  decisions: { title: string; body: string }[];
  challenge: {
    title: string;
    intro: string;
    steps: { commit: string; text: string }[];
    lesson: string;
  };
  next: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sonora",
    kicker: "Case study · E-commerce",
    published: "2026-11-17",
    tagline:
      "Un negozio di strumenti musicali completo: catalogo, carrello, checkout, area personale e pannello admin. Costruito da zero, dal database al deploy.",
    role: "Progetto personale · da solo",
    context:
      "Progetto portfolio: marche, prodotti e recensioni sono inventati, e nessun pagamento è reale. Tutto il resto funziona davvero.",
    stats: [
      { value: "250+", label: "Test automatici" },
      { value: "30+", label: "Endpoint API" },
      { value: "7", label: "Tappe completate" },
      { value: "2", label: "Servizi, un dominio" },
    ],
    goal: [
      "Volevo un progetto che mi costringesse ad affrontare i problemi veri di un negozio online, non una lista di prodotti con un bottone “compra”. Prezzi che cambiano dopo un ordine, due clienti che vogliono l'ultimo pezzo nello stesso momento, una password dimenticata, un admin che carica foto.",
      "L'ho diviso in tappe: prima il backend e il catalogo, poi carrello, login, checkout, pannello admin, email e recensioni. Ogni tappa doveva funzionare ed essere testata prima di passare alla successiva.",
    ],
    architecture: [
      {
        layer: "Frontend",
        tech: "React 19 · Vite · Tailwind · shadcn/ui",
        note: "Pagine caricate a richiesta; il pannello admin è un file separato che chi compra non scarica.",
      },
      {
        layer: "Backend",
        tech: "Node.js · Express · TypeScript strict",
        note: "Tre livelli: routes, controllers e services. La logica di business non conosce Express.",
      },
      {
        layer: "Database",
        tech: "PostgreSQL · pg_trgm",
        note: "Categorie ad albero, chiavi UUID, ricerca che tollera gli errori di battitura.",
      },
      {
        layer: "Servizi",
        tech: "Cloudinary · Resend · Neon · Vercel",
        note: "Foto caricate dal browser con firma del server, email transazionali, deploy con GitHub Actions.",
      },
    ],
    decisions: [
      {
        title: "Il carrello sta nel browser, i prezzi sul server",
        body: "localStorage conserva solo id e quantità. Nomi, prezzi e disponibilità arrivano sempre dall'API, e il totale lo calcola il server, in centesimi interi. Così nessuno può comprare una chitarra a 1 € modificando il proprio browser.",
      },
      {
        title: "L'ultimo pezzo va a un solo cliente",
        body: "L'ordine gira in una transazione con SELECT … FOR UPDATE, e le righe sono ordinate per id per evitare deadlock tra ordini con gli stessi prodotti. C'è un test che simula due acquisti simultanei dell'ultimo pezzo.",
      },
      {
        title: "Il prezzo pagato non cambia più",
        body: "order_items salva unit_price al momento dell'acquisto. Se domani il prezzo di un prodotto cambia, gli ordini passati restano corretti. Allo stesso modo i prodotti non si cancellano: si nascondono.",
      },
      {
        title: "Il token non lo legge nessuno",
        body: "JWT in un cookie httpOnly e SameSite=Lax. Il reset della password usa un link monouso: nel database resta solo l'impronta SHA-256, e il token viaggia dopo il # dell'URL, così non finisce nei log.",
      },
      {
        title: "Le foto non passano dal mio server",
        body: "Il backend firma soltanto il caricamento e il browser invia il file direttamente a Cloudinary. Il segreto API non lascia mai il server, e le foto rimosse da tutti i prodotti vengono cancellate anche dalla CDN.",
      },
      {
        title: "Test su un database vero",
        body: "I test d'integrazione chiamano le API con Supertest su un PostgreSQL separato, ricreato a ogni esecuzione. Il nome deve finire con _test, così il database di sviluppo non viene mai toccato per sbaglio.",
      },
    ],
    challenge: {
      title: "Il deploy che non voleva partire",
      intro:
        "In locale funzionava tutto. Su Vercel la funzione del backend si fermava ancora prima di rispondere. Per farla partire sono serviti cinque tentativi, uno per pull request, e a ogni passo ho capito qualcosa di più su come Node carica i moduli.",
      steps: [
        {
          commit: "b43c87d",
          text: "Vercel controlla che l'entrypoint esista prima della build, e dist/ non è nel repository. Punto l'entrypoint sul sorgente src/app.ts. La build passa, ma la funzione si ferma: “Cannot use import statement outside a module”.",
        },
        {
          commit: "9f1b7a6",
          text: "Il file compilato arriva senza il package.json accanto, quindi Node lo legge come CommonJS. Provo con un entrypoint .mts, che Node carica sempre come modulo ES. Non basta.",
        },
        {
          commit: "a122683",
          text: "Dichiaro \"type\": \"module\" in un package.json alla radice del repository. Stesso errore: nemmeno quel file arriva sul server.",
        },
        {
          commit: "adf61be",
          text: "La svolta: smetto di combattere l'ambiente. Il backend diventa CommonJS, il sorgente resta scritto con import e la build lo trasforma in require, che Node esegue senza bisogno di package.json.",
        },
        {
          commit: "d823259",
          text: "Nuovo errore: “Cannot find module 'express'”. Nella funzione finisce solo dist/, senza node_modules. Ora esbuild crea un unico file con tutte le dipendenze dentro, e la funzione parte.",
        },
      ],
      lesson:
        "Il problema non era nel mio codice ma nelle cose che davo per scontate sull'ambiente. Adesso, quando qualcosa funziona in locale e non online, mi chiedo prima di tutto quali file arrivano davvero sul server. Ogni passaggio è documentato nel README, per chi ci inciamperà dopo di me.",
    },
    next: [
      "Il limite ai tentativi di accesso è in memoria, quindi vale per una sola istanza della funzione. Con traffico vero lo sposterei su Redis.",
      "Le migrazioni si possono rilanciare, ma non tengono traccia di quelle già applicate. Su un progetto che cresce userei uno strumento dedicato.",
      "Il pagamento è solo alla consegna. Il prossimo passo naturale è Stripe, con i webhook per aggiornare lo stato degli ordini.",
    ],
  },
];
