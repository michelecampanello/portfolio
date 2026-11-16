// Tutti i contenuti del sito vivono qui: aggiorna questo file per modificare il portfolio.

export const profile = {
  name: "Michele Campanello",
  firstName: "Michele",
  lastName: "Campanello",
  role: "Full Stack Developer",
  city: "Bari",
  email: "campanellomichele@outlook.it",
  // Lascia vuoto per non mostrarlo pubblicamente.
  phone: "",
  // Aggiungi i tuoi profili (es. 'https://github.com/...'): i link vuoti non vengono mostrati.
  github: "",
  linkedin: "",
  status: "Disponibile · cerco un team con cui crescere",
  intro:
    "Interfacce in React e Next.js, API in Node.js e Spring Boot, app in Flutter. E una fissazione sana per il codice che si legge bene anche sei mesi dopo.",
  quote: "Scrivo codice pensando a chi dovrà leggerlo dopo di me.",
  story: [
    "Ho un diploma tecnico a indirizzo sanitario. Nel 2022 ho cambiato strada con il corso Full Stack Developer di Aulab, e da allora non ho più smesso di studiare: analisi dei dati con Boolean, conversation e prompt design, la certificazione PEKIT Expert.",
    "Oggi lavoro sullo stack JavaScript/TypeScript e su Java con Spring Boot, e sviluppo app mobile in Flutter. Mi piace capire il perché delle cose prima di scriverle, curare i dettagli che nessuno nota finché non mancano e consegnare quando ho detto che avrei consegnato.",
    "Lavoro bene da solo quando serve concentrazione, e meglio in team quando serve qualcuno che faccia domande.",
  ],
  facts: [
    { label: "Base", value: "Bari, Puglia" },
    { label: "Ruolo", value: "Full Stack Developer Junior" },
    { label: "Lingue", value: "Italiano · English C1" },
    { label: "Fuori orario", value: "Musica, cinema, tecnologia" },
  ],
};

export const skills = [
  {
    area: "Frontend",
    blurb: "Quello che si vede e si tocca.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    area: "Backend",
    blurb: "Quello che succede dietro le quinte.",
    items: ["Node.js", "Java", "Spring Boot", "Go"],
  },
  {
    area: "Mobile",
    blurb: "Una codebase, due sistemi in tasca.",
    items: ["Flutter", "Dart"],
  },
  {
    area: "Database",
    blurb: "Dove i dati restano.",
    items: ["SQL", "MongoDB"],
  },
  {
    area: "Extra",
    blurb: "Dati, AI e gli strumenti di ogni giorno.",
    items: ["Prompt design", "Data analysis", "Office · PEKIT Expert"],
  },
];

// In ordine di "uscita", dal più recente.
export const education = [
  {
    title: "PEKIT Expert",
    note: "Certificazione delle competenze informatiche",
    org: "Pekit",
    year: "2025",
  },
  {
    title: "Data Analysis",
    note: "Data Week: dai dati grezzi alle domande giuste",
    org: "Boolean, Bari",
    year: "2024",
  },
  {
    title: "Conversation & Prompt Design",
    note: "Progettare conversazioni e prompt per l’AI",
    org: "Aulab, Bari",
    year: "2024",
  },
  {
    title: "Full Stack Developer",
    note: "Il bootcamp dove è cominciato tutto",
    org: "Aulab",
    year: "2022–23",
  },
  {
    title: "Diploma tecnico",
    note: "Indirizzo sanitario, prima del cambio di rotta",
    org: "IISS Elena di Savoia, Bari",
    year: "2017–21",
  },
];

export const languages = [
  { name: "Italiano", level: "Madrelingua", note: "Lingua di casa." },
  {
    name: "English",
    level: "C1",
    note: "Leggo la documentazione, scrivo e parlo senza bisogno di sottotitoli.",
  },
];

export const projects = [
  {
    title: "Sonora",
    description: "E-commerce di strumenti musicali",
    stack: ["React", "Node.js", "TypeScript"],
    year: "2026",
    url: "https://sonora.michelecampanello.dev",
    repo: "https://github.com/michelecampanello/sonora",
  },
];
