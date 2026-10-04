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
  email: 'shved.dmytro@gmail.com',
  site: 'https://shveddmutro.github.io',
  linkedin: 'https://www.linkedin.com/in/ds-dmytro-shved/',
  github: 'https://github.com/ShvedDmytro',
  cvFile: '/Dmytro-Shved-CV.pdf',
  playbookFile: '/ai-coding-playbook.pdf',
};

// Follows the LinkedIn About.
export const cvProfile = {
  strong: 'AI engineer',
  text: 'with 17 years of software engineering across front end, back end and mobile. I build AI that takes real actions inside products and company tools: assistants that act on behalf of users, AI that reads documents and turns speech into structured data, and agents that work with permissions, approvals and an audit trail. Lead roles in Germany and Ukraine, VP of Engineering, and most recently five and a half years at Swiftlane as lead engineer on its AI-powered operations product.',
};

export const summary =
  'I build AI agents, LLM features and automation for production: AI that takes real actions inside products and company tools, and keeps working after launch. Background of 17 years in software engineering across front end, back end and mobile, including lead roles in Germany and Ukraine and VP of Engineering.';

// One line for the CV: how I work, in full sentences.
export const approach =
  'Code decides and the model talks. A person confirms anything that sends, pays or deletes. Every AI step has a safe fallback and is tested on real conversations. A small first release, measured, then extended.';

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
  period: string; // as on the CV
  start: number; // year, for the site timeline
  short: string; // years, for the site timeline
  lead?: string; // one intro sentence
  points?: { strong?: string; text: string }[];
  summary?: string; // one paragraph instead of points
  highlight?: boolean; // accent dot on the site timeline
};

// Source of truth: Dmytro's LinkedIn experience (read 2026-10-04). Titles, companies, places and dates match it exactly;
// only spelling is cleaned. Change LinkedIn first, then this list.
export const experience: Job[] = [
  {
    title: 'Independent AI Engineer',
    org: 'Self-employed · Remote',
    period: 'Oct 2026 – present',
    start: 2026,
    short: '2026 – now',
    highlight: true,
    lead: 'Independent engineering for companies adding AI to their products and operations.',
    points: [
      { text: 'AI agents that work inside company tools, with permissions, approvals and an audit trail' },
      { text: 'LLM features in existing products: assistants, document understanding, voice input' },
      { text: 'Workflow automation with AI steps, in n8n or code, with monitoring and safe retries' },
      { text: 'AI-assisted development process for engineering teams' },
    ],
  },
  {
    title: 'Senior Full-stack & AI Engineer',
    org: 'Swiftlane · Remote',
    period: 'Feb 2021 – Sep 2026',
    start: 2021,
    short: '2021 – 2026',
    highlight: true,
    lead: 'Lead engineer on an AI-powered operations product across web, mobile and voice.',
    points: [
      { text: 'Shipped voice and chat assistants that act on behalf of users, AI document reading and speech-to-form input' },
      { text: 'Designed the safety model for AI actions: server-side confirmation, deterministic fallbacks, regression testing on real conversations' },
      { text: 'Introduced an AI-assisted development process: written task contracts, risk-based model selection, proof-based code review' },
      { text: 'Before that, lead engineer on the main web platform and mobile app' },
    ],
    summary: 'React · TypeScript · Node.js · Flutter · Python · PostgreSQL · Google Cloud',
  },
  { title: 'Senior Team Lead, front-end', org: 'American Outlets · Freelance', period: 'Apr 2020 – Feb 2021', start: 2020, short: '2020 – 2021' },
  { title: 'VP of Engineering', org: 'Relevant Software · Lviv', period: 'Nov 2019 – Mar 2020', start: 2019, short: '2019 – 2020' },
  { title: 'Team Lead / Senior Frontend Developer', org: 'Freelance · Chernivtsi', period: 'Sep 2018 – Nov 2019', start: 2018, short: '2018 – 2019' },
  { title: 'Lead Front-end Developer', org: 'A.T.U Auto-Teile-Unger · Berlin', period: 'Aug 2016 – Aug 2018', start: 2016, short: '2016 – 2018', summary: 'React, Redux, Webpack, unit tests, React Native, JavaScript, HTML5, CSS3.' },
  { title: 'Senior Front-end Developer', org: 'Édition Lingerie · Berlin', period: 'Mar 2016 – Jul 2016', start: 2016, short: '2016', summary: 'React, Redux, Flux, Immutable, Material-UI, Less, HTML5, Webpack.' },
  { title: 'JavaScript Development', org: 'RebelMouse · Remote', period: 'Mar 2015 – Feb 2016', start: 2015, short: '2015 – 2016', summary: 'JavaScript, Backbone.js, Mustache, Underscore.js.' },
  { title: 'Senior JavaScript Developer', org: 'Svitla Systems · Kyiv', period: 'Oct 2013 – Mar 2015', start: 2013, short: '2013 – 2015', summary: 'JavaScript, jQuery plugins, Underscore templating, Google Maps.' },
  { title: 'FED Team Lead Developer', org: 'Svitla Systems · Ukraine', period: 'Nov 2012 – Sep 2013', start: 2012, short: '2012 – 2013', summary: 'jQuery, JavaScript, WordPress, XHTML, HTML5, CSS3, Sass, Less, responsive design, Ajax, JSON, XML, PHP.' },
  { title: 'Senior Front End Developer', org: 'Tacme · Dubai', period: 'Aug 2012 – Nov 2012', start: 2012, short: '2012', summary: 'Standards-compliant web pages (HTML, XHTML, CSS, JavaScript, jQuery), JSON, XML and Ajax, RTL for Arabic, email newsletters, mobile websites, Google Maps.' },
  { title: 'Senior Front End Developer', org: 'Svitla Systems · Ukraine', period: 'Sep 2011 – Aug 2012', start: 2011, short: '2011 – 2012', summary: 'Standards-compliant web pages (HTML, XHTML, CSS, JavaScript, jQuery, Ajax), Facebook pages (FBML), email newsletters, WordPress and Joomla integration (PHP & MySQL), mobile websites.' },
  { title: 'Middle Front End Developer', org: 'OSF Global Services · Ukraine', period: 'Apr 2010 – Sep 2011', start: 2010, short: '2010 – 2011', summary: 'Web page templates from wireframes in clean, semantic HTML and CSS for a complex e-commerce application; cross-browser support; close work with designers, marketing and developers.' },
  { title: 'Junior Front End Developer', org: 'It Group', period: 'Jul 2009 – Apr 2010', start: 2009, short: '2009 – 2010', summary: 'Standards-compliant web pages (HTML, XHTML, CSS, JavaScript, jQuery), email newsletters.' },
];

/** Roles before this year are grouped into one line on the site (the CV lists them all). */
export const siteTimelineFrom = 2016;

// Skills table, as on the CV.
export const skillTable = [
  { tech: 'AI agents & LLM features (Claude, OpenAI, MCP, RAG, voice AI)', level: 'Professional', years: 2 },
  { tech: 'AI-assisted development (Claude Code, Copilot, Cursor)', level: 'Professional', years: 2 },
  { tech: 'AI-assisted development process for teams (workflows, standards)', level: 'Professional', years: 2 },
  { tech: 'AI process automation (n8n, Zapier, engineering & business workflows)', level: 'Professional', years: 2 },
  { tech: 'JavaScript / TypeScript', level: 'Professional', years: 11 },
  { tech: 'React, Redux, Saga, MobX', level: 'Professional', years: 7 },
  { tech: 'Node.js, Express', level: 'Professional', years: 4 },
  { tech: 'Flutter / Dart', level: 'Good', years: 1 },
  { tech: 'React Native', level: 'Very Good', years: 3 },
  { tech: 'Vue.js', level: 'Very Good', years: 3 },
  { tech: 'HTML5 / CSS3, Sass / Less', level: 'Professional', years: 12 },
  { tech: 'REST APIs, JSON', level: 'Professional', years: 11 },
  { tech: 'Git', level: 'Professional', years: 8 },
];
export const alsoExperienced = 'jQuery, Backbone, Angular.js, Webpack, WordPress, Bootstrap, Google Maps.';

export const strengths = [
  'Builds AI that acts safely in production: agents, LLM features, approvals, fallbacks',
  'Brings AI-first development workflows to engineering teams',
  'Leads teams: hiring, mentoring, technical specs, strategy',
  'Automates aggressively: replaces manual processes with AI pipelines and workflows',
  'Ships end to end: front end, back end and mobile',
  'Self-driven, delivers under pressure and meets deadlines',
];

export const skills = [
  { group: 'AI', items: ['Claude & Claude Code', 'OpenAI', 'MCP', 'RAG', 'Voice AI', 'Tool calling', 'LLM evaluation', 'Prompt design'] },
  { group: 'Engineering', items: ['TypeScript', 'Node.js', 'React', 'Next.js', 'Flutter', 'Python', 'PostgreSQL'] },
  { group: 'Platforms', items: ['Google Cloud', 'Docker', 'n8n', 'Zapier', 'Slack and Telegram bots'] },
  { group: 'Leadership', items: ['Technical lead', 'VP of Engineering', 'AI-assisted development process for teams'] },
];

export const education = {
  degree: 'Applied Mathematics faculty. Specialist degree',
  school: 'Yuriy Fedkovych Chernivtsi National University',
  years: '2004 – 2009',
};

export const languages = [
  { name: 'Ukrainian', level: 'native' },
  { name: 'English', level: 'advanced' },
];

export const playbook = {
  title: 'The AI Coding Playbook',
  text: 'How to work with AI coding agents like a team, not a genie. Clear tasks, checking the results, fixing causes instead of symptoms, reviews that must prove their findings, and the red flags that tell you to stop. 15 pages, plain words.',
};
