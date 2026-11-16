// Tutti i contenuti del sito vivono qui: aggiorna questo file per modificare il portfolio.

export const profile = {
  name: 'Michele Campanello',
  firstName: 'Michele',
  role: 'Full Stack Developer Junior',
  location: 'Bari, Italia',
  email: 'campanellomichele@outlook.it',
  // Lascia vuoto per non mostrarlo pubblicamente.
  phone: '',
  // Aggiungi i tuoi profili (es. 'https://github.com/...'): i link vuoti non vengono mostrati.
  github: '',
  linkedin: '',
  tagline:
    'Costruisco applicazioni web e mobile con JavaScript/TypeScript, Java e Flutter, con un occhio attento a qualità, chiarezza e dettagli.',
  about: [
    "Sono uno sviluppatore Full Stack junior formato con Aulab, con basi solide sullo stack JavaScript/TypeScript (React, Next.js, Node.js) e su Java/Spring Boot, oltre a esperienza nello sviluppo mobile con Flutter.",
    "Preciso e attento ai dettagli, scrivo codice pulito e manutenibile e mi aggiorno di continuo su nuove tecnologie, incluse l'analisi dei dati e l'uso di strumenti di intelligenza artificiale.",
    "Lavoro con impegno sia in autonomia sia in team, con attenzione alla qualità del risultato e al rispetto delle scadenze.",
  ],
  interests: ['Musica', 'Cinema', 'Tecnologia'],
};

export const highlights = [
  { value: '14', label: 'Tecnologie nel mio stack' },
  { value: 'C1', label: 'Inglese avanzato' },
  { value: '4', label: 'Percorsi di formazione tech' },
];

export const skills = [
  {
    area: 'Frontend',
    icon: 'layout',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  { area: 'Backend', icon: 'server', items: ['Node.js', 'Java', 'Spring Boot', 'Go'] },
  { area: 'Mobile', icon: 'phone', items: ['Flutter', 'Dart'] },
  { area: 'Database', icon: 'database', items: ['SQL', 'MongoDB'] },
  {
    area: 'Altro',
    icon: 'sparkles',
    items: ['Prompt design', 'Data analysis', 'Pacchetto Office · PEKIT Expert'],
  },
] as const;

export const education = [
  {
    title: 'PEKIT Expert',
    subtitle: 'Certificazione competenze informatiche',
    org: 'Pekit',
    period: '2025',
    kind: 'Certificazione',
  },
  {
    title: 'Data Analysis',
    subtitle: 'Data Week',
    org: 'Boolean · Bari',
    period: '2024',
    kind: 'Corso',
  },
  {
    title: 'Conversation & Prompt Design',
    subtitle: 'Progettazione di conversazioni e prompt per l’AI',
    org: 'Aulab · Bari',
    period: '2024',
    kind: 'Corso',
  },
  {
    title: 'Corso Full Stack Developer',
    subtitle: 'Sviluppo web full stack, frontend e backend',
    org: 'Aulab',
    period: '2022 – 2023',
    kind: 'Bootcamp',
  },
  {
    title: 'Diploma di Istituto Tecnico',
    subtitle: 'Indirizzo sanitario',
    org: 'IISS Elena di Savoia · Bari',
    period: '2017 – 2021',
    kind: 'Diploma',
  },
];

export const languages = [
  { name: 'Italiano', level: 'Madrelingua', score: 100 },
  {
    name: 'Inglese',
    level: 'C1 · Avanzato (QCER)',
    note: 'Ascolto, lettura, scrittura e interazione orale',
    score: 85,
  },
];

// Aggiungi qui i tuoi progetti: la sezione "Progetti" compare automaticamente quando l'elenco non è vuoto.
export const projects: {
  title: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
}[] = [];
