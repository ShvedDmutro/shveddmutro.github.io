// Single source of truth for the site and the downloadable CV.
// Edit here, then `npm run cv` to refresh the PDF and share image.

export const person = {
  name: 'Dmytro Shved',
  role: 'Independent AI Engineer',
  years: 17,
  tagline: 'AI agents, LLM features and automation',
  taglineAccent: 'built for production.',
  lead: 'Most AI features work in the demo. I build the version that still works a month after launch.',
  location: 'Ukraine · Remote',
  email: 'shveddmutro@gmail.com',
  site: 'https://shveddmutro.github.io',
  linkedin: 'https://www.linkedin.com/in/ds-dmytro-shved/',
  github: 'https://github.com/ShvedDmutro',
  cvFile: '/Dmytro-Shved-CV.pdf',
  playbookFile: '/ai-coding-playbook.pdf',
};

export const summary =
  'I build AI agents, LLM features and automation for production: AI that takes real actions inside products and company tools, and keeps working after launch. Background of 17 years in software engineering across front end, back end and mobile, including lead roles in Germany and Ukraine and VP of Engineering.';

export const work = [
  {
    title: 'AI agents',
    text: 'Agents that work inside company tools with permissions, approvals and an audit trail. They hand off to a person when they should, and never act on a guess.',
  },
  {
    title: 'LLM features in products',
    text: 'Assistants that act on behalf of users, AI that reads documents, speech turned into structured data. Added to existing products without rewriting them.',
  },
  {
    title: 'Workflow automation',
    text: 'Manual business processes automated end to end, with AI only where understanding is needed. Monitored, with safe retries and loud failures.',
  },
];

export const principles = [
  { title: 'Code decides. The model talks.', text: 'Business rules live in code you can test. The model reads and writes language.' },
  { title: 'A person confirms what matters.', text: 'Anything that sends, pays or deletes is confirmed by a human and checked on the server.' },
  { title: 'Every AI step has a safe fallback.', text: 'Tested on real conversations, not tidy examples.' },
  { title: 'Small first release.', text: 'Measured, then extended.' },
  {
    title: 'AI-assisted engineering, done properly.',
    text: 'I build with AI coding agents using written task contracts, model choice by risk and reviews that must prove each finding with a failing test.',
  },
];

export type Job = {
  title: string;
  org: string;
  period: string; // full, for the CV
  short: string; // years, for the site timeline
  summary?: string;
  points?: string[];
  highlight?: boolean; // accent dot on the site timeline
};

export const experience: Job[] = [
  {
    title: 'Independent AI Engineer',
    org: 'Self-employed · Remote',
    period: 'Oct 2026 – present',
    short: '2026 – now',
    highlight: true,
    summary: 'AI agents, LLM features and AI-driven automation for companies adding AI to their products and operations.',
    points: [
      'AI agents that work inside company tools, with permissions, approvals and an audit trail',
      'LLM features in existing products: assistants, document understanding, voice input',
      'Workflow automation with AI steps, in n8n or code, with monitoring and safe retries',
      'AI-assisted development process for engineering teams',
    ],
  },
  {
    title: 'Senior Full-stack & AI Engineer',
    org: 'Swiftlane · Remote',
    period: 'Feb 2021 – Sep 2026',
    short: '2021 – 2026',
    highlight: true,
    summary:
      'Lead engineer on an AI-powered operations product across web, mobile and voice. Before that, lead engineer on the main web platform and mobile app.',
    points: [
      'Lead engineer on an AI-powered operations product across web, mobile and voice',
      'Shipped voice and chat assistants that act on behalf of users, AI document reading and speech-to-form input',
      'Designed the safety model for AI actions: server-side confirmation, deterministic fallbacks, regression testing on real conversations',
      'Introduced an AI-assisted development process: written task contracts, risk-based model selection, proof-based code review',
      'Earlier: lead engineer on the main web platform and mobile app',
    ],
  },
  { title: 'Senior Team Lead, Front-end', org: 'American Outlets · Contract', period: 'Apr 2020 – Feb 2021', short: '2020 – 2021' },
  { title: 'VP of Engineering', org: 'Relevant Software · Lviv', period: 'Nov 2019 – Mar 2020', short: '2019 – 2020' },
  { title: 'Team Lead / Senior Front-end Developer', org: 'Freelance · Chernivtsi', period: 'Sep 2018 – Nov 2019', short: '2018 – 2019' },
  {
    title: 'Lead Front-end Developer',
    org: 'A.T.U Auto-Teile-Unger · Berlin',
    period: 'Aug 2016 – Aug 2018',
    short: '2016 – 2018',
    summary: 'React, Redux and React Native for a large automotive retailer.',
  },
  {
    title: 'Senior Front-end and JavaScript roles',
    org: 'Édition Lingerie (Berlin), RebelMouse, Svitla Systems (incl. front-end team lead), Tacme (Dubai), OSF Global Services, IT Group',
    period: '2009 – 2016',
    short: '2009 – 2016',
  },
];

export const skills = [
  { group: 'AI', items: ['Claude & Claude Code', 'OpenAI', 'MCP', 'RAG', 'Voice AI', 'Tool calling', 'LLM evaluation', 'Prompt design'] },
  { group: 'Engineering', items: ['TypeScript', 'Node.js', 'React', 'Next.js', 'Flutter', 'Python', 'PostgreSQL'] },
  { group: 'Platforms', items: ['Google Cloud', 'Docker', 'n8n', 'Zapier', 'Slack and Telegram bots'] },
  { group: 'Leadership', items: ['Technical lead', 'VP of Engineering', 'AI-assisted development process for teams'] },
];

export const education = 'Yuriy Fedkovych Chernivtsi National University';

export const playbook = {
  title: 'The AI Coding Playbook',
  text: 'How to run AI coding agents like a team, not a genie. Task contracts, model choice, root-cause fixes, reviews that must prove their findings, and the red flags that tell you to stop. 22 pages, plain words.',
};
