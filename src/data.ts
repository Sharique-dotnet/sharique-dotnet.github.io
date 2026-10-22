// All site content. Edit text here; section components only handle layout.

export const EMAIL = 'ansishrq@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/sharique-ansari-0b59a742'

// ===== Navigation =====
export const NAV = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['domains', 'Expertise'],
  ['contact', 'Contact'],
] as const

// Sections without their own nav link highlight this one instead
export const NAV_MAP: Record<string, string> = { workflow: 'domains', principles: 'domains' }

// ===== Hero =====
export const HERO = {
  prompt: 'initializing developer profile...',
  name: 'Sharique Ansari',
  role: 'Backend-focused .NET Developer',
  title: 'Enterprise backends, engineered to last',
  intro: 'I architect secure APIs and high-performance data layers in C# and ASP.NET Core — and own them all the way to production.',
  stats: ['6+ years', '4 platforms shipped', '.NET 3.1 → 9 modernization', 'current on .NET 10'],
  file: 'developer.profile.cs',
  terminal: ['dotnet run --profile developer', '✓ status: open to remote opportunities'],
}

// Syntax colors for the hero code editor
const COL = { k: '#b69cff', t: '#5fe0c4', s: '#e6c07b', c: '#6b737e', p: '#cfd4da', m: '#9fdcf0', o: '#8a929c' }
type ColKey = keyof typeof COL
export type Token = { color: string; text: string }

const prop = (type: string, name: string, val: string, comment?: string): [ColKey, string][] => {
  const toks: [ColKey, string][] = [['k', '    public '], ['t', type.padEnd(9)], ['m', name.padEnd(9)], ['o', '=> '], ['s', val], ['o', ';']]
  if (comment) toks.push(['c', '  // ' + comment])
  return toks
}

export const CODE: Token[][] = ([
  [['c', '// building systems that scale']],
  [['k', 'namespace'], ['p', ' Portfolio;']],
  [],
  [['k', 'public sealed record '], ['t', 'Developer']],
  [['o', '{']],
  prop('string', 'Name', '"Sharique Ansari"'),
  prop('string', 'Role', '"Backend-focused .NET Developer"'),
  prop('int', 'Years', '6', 'and counting'),
  prop('string[]', 'Stack', '["C#", ".NET 10", "SQL Server"]'),
  prop('string', 'Approach', '"Clean Architecture"'),
  prop('string', 'Ships', '"Design → Production"'),
  prop('bool', 'Hiring', 'true', 'let’s talk'),
  [['o', '}']],
] as [ColKey, string][][]).map(l => (l.length ? l : [['p', ' '] as [ColKey, string]]).map(([c, text]) => ({ color: COL[c], text })))

// ===== Snapshot =====
export const SNAPSHOT = [
  ['experience', '6+ years', 'Enterprise .NET delivery'],
  ['api', '120+ endpoints', 'Designed and shipped'],
  ['backend', 'ASP.NET Core', 'Secure REST APIs · JWT'],
  ['performance', '~40% faster', 'Key API response times'],
  ['platform', '.NET 9 & 10', 'Modernized from .NET Core 3.1'],
  ['delivery', '60+ releases', 'Zero rollbacks to production'],
]

// ===== About =====
// Each paragraph is a list of parts; { em } parts render highlighted
export const ABOUT: (string | { em: string })[][] = [
  ['For more than six years I’ve engineered enterprise software across HR, finance, education and corporate platforms — the kind of systems teams depend on every day.'],
  ['My specialty is the backend: ', { em: 'secure APIs, robust domain logic and data layers that perform under real-world load' }, '. I bring architectural discipline to every codebase, so it stays fast, stable and easy to evolve.'],
  ['I own features end to end — from first design conversation to verified production release — and I’m now extending that reach into Azure and CI/CD.'],
]

export const FLOW = [
  ['Discover', 'requirements, constraints, edge cases'],
  ['Architect', 'contracts · layers · data model'],
  ['Engineer', 'services · queries · secured endpoints'],
  ['Integrate', 'Angular client · UI/UX designs'],
  ['Assure', 'peer review · QA sign-off'],
  ['Release', 'deploy · migrate · verify'],
]

// ===== Skills =====
// Tier: 1 = core, 0 = advanced, 2 = familiar
export type Tier = 0 | 1 | 2

export const CORE_SKILLS: { glyph: string; level: string; title: string; context: string; items: [string, Tier][] }[] = [
  { glyph: '{ api }', level: 'expert', title: 'API Engineering', context: 'Secure, versionable REST services that encapsulate complex business rules.',
    items: [['C#', 1], ['ASP.NET Core Web API', 1], ['REST API design', 1], ['JWT authentication', 0], ['ASP.NET MVC', 0], ['.NET 10', 1], ['.NET 9', 0]] },
  { glyph: '[ arch ]', level: 'expert', title: 'Software Architecture', context: 'Layered, loosely coupled systems that scale with the business — not against it.',
    items: [['Clean Architecture', 1], ['SOLID', 1], ['Dependency Injection', 1], ['Repository Pattern', 0]] },
  { glyph: '< sql >', level: 'expert', title: 'Data Engineering', context: 'Relational design, performant queries and data access you can trust.',
    items: [['SQL Server', 1], ['Entity Framework Core', 1], ['LINQ', 0], ['Stored procedures', 0], ['PostgreSQL', 2], ['Dapper', 2]] },
]

// dashed: render the group's chips with a dashed border (still learning)
export const MORE_SKILLS: { title: string; context: string; items: string[]; dashed?: boolean }[] = [
  { title: 'Frontend integration', context: 'Connecting services to production UIs', items: ['Angular', 'TypeScript', 'HTML / CSS', 'Bootstrap'] },
  { title: 'Release & operations', context: 'Shipping safely to production', items: ['Windows / IIS', 'Plesk', 'Database migrations', 'Azure DevOps', 'Git'] },
  { title: 'Expanding into', context: 'Cloud-native delivery', items: ['Microsoft Azure', 'CI/CD pipelines'], dashed: true },
]

// ===== Experience =====
// tone: current = filled dot, accent = cyan outline, muted = gray outline
export const TIMELINE: { when: string; title: string; sub: string; tone: 'current' | 'accent' | 'muted' }[] = [
  { when: 'Nov 2019 — May 2026', title: 'Senior .NET Developer', sub: 'Enterprise software · 6.5 years', tone: 'current' },
  { when: 'Freelance', title: 'Backend & Web Developer', sub: 'News & media domain — mobile app backend and Angular web.', tone: 'accent' },
  { when: 'Now', title: 'Continuous growth', sub: 'Azure, CI/CD, and PostgreSQL with Dapper.', tone: 'muted' },
  { when: 'Training', title: 'C# .NET, SQL Server & ASP.NET MVC', sub: 'Professional certification', tone: 'muted' },
  { when: '2010', title: 'B.Sc. Mathematics', sub: 'Mumbai University', tone: 'muted' },
]

export const STACK = ['ASP.NET Core', '.NET 10', '.NET 9', 'EF Core', 'SQL Server', 'JWT', 'Clean Architecture', 'Angular', 'IIS', 'Azure DevOps']

export const GROUPS = [
  { title: 'Enterprise API platform', tags: ['ASP.NET Core', 'Clean Architecture', 'JWT'], points: [
    'Architected and delivered 120+ RESTful endpoints in ASP.NET Core across multiple enterprise applications.',
    'Hardened the API surface with JWT authentication and enforced clean layer boundaries through Clean Architecture and SOLID.'] },
  { title: 'Domain logic & persistence', tags: ['EF Core', 'SQL Server', 'Clean Architecture'], points: [
    'Engineered business-critical domain logic and data access with Entity Framework Core, LINQ and SQL Server.',
    'Applied the Repository Pattern and dependency injection to keep persistence decoupled and testable.'] },
  { title: 'Platform modernization', tags: ['.NET 9', '.NET 10', 'ASP.NET Core', 'Angular'], points: [
    'Drove the migration of 15+ backend modules from .NET Core 3.1 to .NET 9, in step with an Angular 20 upgrade.',
    'Refactored high-traffic modules, cutting average API response times by roughly 40%.',
    'Current on .NET 10 and its latest platform and performance improvements.'] },
  { title: 'Production reliability', tags: ['SQL Server', 'EF Core', 'ASP.NET Core'], points: [
    'Owned root-cause analysis of production incidents across API, domain and database layers.',
    'Optimized slow-running SQL queries and stored procedures, reducing report generation time by up to 60%.'] },
  { title: 'Release ownership', tags: ['IIS', 'SQL Server'], points: [
    'Led 60+ production releases to Windows/IIS — build, deployment and database migrations.',
    'Safeguarded stability by verifying every release against existing functionality, with zero rollbacks.'] },
  { title: 'Cross-functional delivery', tags: ['Angular', 'Azure DevOps'], points: [
    'Translated UI/UX designs into Angular features wired to backend services.',
    'Partnered with QA, design and product in Agile sprints; active voice in design discussions and code reviews.'] },
]

// ===== Domains =====
// radius / size / base (rotation in deg) shape the glyph's outline
export const DOMAINS = [
  { id: '01', glyph: 'HR', radius: '6px', base: 0, size: '44px', meta: 'HR Tech · SaaS', title: 'HR Management',
    problem: 'Modular platforms that run employee lifecycle and HR operations for organisations from SMB to enterprise scale.',
    contrib: ['Multi-module HR workflows and the APIs behind them', 'Role-based, secured access to sensitive employee data', 'Modernizing legacy .NET services to current platforms'],
    tech: 'ASP.NET Core · EF Core · SQL Server · Angular' },
  { id: '02', glyph: '$', radius: '50%', base: 0, size: '44px', meta: 'FinTech · Project Ops', title: 'Project Budgeting & Costing',
    problem: 'Systems that automate budgeting, cost tracking and resource allocation — replacing manual project estimation.',
    contrib: ['Encoding financial and costing rules as reliable business logic', 'Data models for budgets, estimates and task allocation', 'API-driven integration with rich client dashboards'],
    tech: 'ASP.NET Core · EF Core · SQL Server · Angular' },
  { id: '03', glyph: '</>', radius: '4px', base: 45, size: '38px', meta: 'Corporate Web', title: 'Corporate Web Platforms',
    problem: 'Performant, maintainable company web presences built to production standards from the ground up.',
    contrib: ['Database schema and data access architecture', 'Performance-first builds on modern ASP.NET Core', 'Greenfield setup through to production release'],
    tech: 'ASP.NET Core · EF Core · SQL Server' },
  { id: '04', glyph: 'Q?', radius: '22px 6px', base: 0, size: '44px', meta: 'EdTech', title: 'Education & Online Assessment',
    problem: 'Digital examination systems that replace paper-based assessment processes for schools and institutions.',
    contrib: ['Exam, question and result management modules', 'Dependable data operations for assessment records', 'End-to-end delivery to production'],
    tech: 'ASP.NET MVC · Entity Framework · SQL Server' },
]

export const FEATURED = {
  badge: 'FREELANCE',
  tag: 'Media · Mobile + Web',
  title: 'Hyperlocal News & Media',
  text: 'Mobile-first news platforms that deliver short-format local updates — with community polls, moderated discussion and offline reading across Android, iOS and the web.',
  contrib: [
    'Backend APIs for mobile apps — content feeds, categories, search and saved items',
    'Community features such as live polls and moderated chat',
    'Responsive Angular websites, from build to launch',
  ],
  tech: ['Android · iOS · Web', 'ASP.NET Core · Angular'],
}

// ===== Workflow =====
export const WORKFLOW = [
  ['req', 'Discover', 'Pin down scope, constraints and edge cases with product and design.'],
  ['arch', 'Architect', 'Define contracts, layer boundaries and the data model.'],
  ['api', 'Engineer', 'Implement services, queries and secured endpoints.'],
  ['ui', 'Integrate', 'Wire the API into the Angular client.'],
  ['pr', 'Assure', 'Peer review and QA before anything ships.'],
  ['iis', 'Release', 'Deploy, migrate and verify in production.'],
]

// ===== Principles =====
export const PRINCIPLES = [
  ['Clarity over cleverness', 'Code is read far more than it is written. I optimise for the next engineer.'],
  ['Strong boundaries', 'Well-separated layers keep change local and risk contained.'],
  ['Secure by design', 'Authentication and validation are architected in, never bolted on.'],
  ['Root cause, not symptoms', 'Every fix starts with understanding why it broke.'],
  ['Zero-regression releases', 'Shipping fast only matters if nothing else breaks.'],
  ['Always compounding', 'Currently investing in Azure and CI/CD automation.'],
]

// ===== Contact =====
export const CONTACT = {
  pitch: 'Looking for a backend engineer who owns outcomes, not just tickets? I’m open to senior .NET roles — on-site or remote.',
  notes: ['senior .NET roles', 'remote-ready'],
}
