// ALL site text lives here. Every claim must trace to a source:
//   QB  = Obsidian Vault/Areas/Job Search/Question Bank.md (verified facts)
//   R5  = resume v5 (Projects/autoapply/build_resume_v5.py)
//   ATL = Obsidian Vault/Areas/ATLAS Lab/Research/Result 2026-11-10 - Thesis DFT slabs.md
//   GH  = the public GitHub repo itself
// Never add a number that is not in one of those. No phone, address or GPA.

export const site = {
  name: 'Aryan Agarwal',
  title: 'Aryan Agarwal: ML for materials & software engineering',
  description:
    'Data Science at UC San Diego. Machine-learning interatomic potentials for dynamic catalysis at the ATLAS Lab; production backend and agentic-AI systems at IBM and Ally.',
  role: 'ML-for-materials researcher & software engineer',
  intro: [
    'Data Science @ UC San Diego, graduating June 2027.', // QB
    'At the ATLAS Materials Physics Lab I benchmark machine-learning interatomic potentials against DFT to study switchable catalysts.', // R5, ATL
    'At IBM I build production backend and agentic-AI systems; at Ally Financial I built an AWS cost agent that saved $70K/yr.', // QB
  ],
  stack: ['Python', 'PyTorch', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'], // R5 skills
  openTo: 'Open to full-time SWE / ML / data roles from June 2027 · Bay Area or San Diego', // QB logistics
  email: 'ara030@ucsd.edu',
  github: 'https://github.com/TheLastMemeLeft',
  linkedin: 'https://www.linkedin.com/in/aryan-agarwal-324513237',
  resume: '/Aryan_Agarwal_Resume.pdf', // R5 web copy (no phone)
};

export type Stat = { value: string; label: string };
export type Featured = {
  kicker: string;
  title: string;
  org: string;
  dates: string;
  summary: string;
  stats: Stat[];
  tags: string[];
  link?: { href: string; label: string };
  note?: string;
  figure?: 'ddg';
};

export const featured: Featured[] = [
  {
    kicker: 'Research',
    title: 'ML potentials for switchable catalysts',
    org: 'ATLAS Materials Physics Lab, UC San Diego',
    dates: 'Oct 2026 – present',
    summary:
      "Flipping a ferroelectric's polarization should switch how strongly a catalyst binds hydrogen. I tested whether Meta FAIR's UMA foundation potential reproduces that switch from the lab's DFT, across 4 model heads with and without D3 dispersion.",
    stats: [
      { value: '0.66–0.77 eV', label: 'ML switching gap vs 0.91 eV DFT' },
      { value: '4', label: 'UMA model heads benchmarked' },
    ],
    tags: ['PyTorch', 'fairchem / UMA', 'AdsorbML', 'ASE', 'pymatgen', 'Quantum ESPRESSO', 'CUDA'],
    link: { href: '/research/atlas/', label: 'Read the write-up' },
    figure: 'ddg',
  },
  {
    kicker: 'Industry',
    title: 'Security-findings platform',
    org: 'IBM · API Connect Security',
    dates: 'Jun 2026 – present',
    summary:
      'Distributed, multi-tenant job scheduling and an end-to-end findings pipeline (ingestion → normalization → API-inventory correlation), plus generative-AI agents that triage findings and recommend fixes.',
    stats: [
      { value: '10,000+', label: 'findings processed' },
      { value: '50+', label: 'enterprise tenants' },
      { value: '−31%', label: 'manual triage time' },
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'pg-boss', 'TypeScript', 'React 18', 'LLM tool calling'],
    note: 'Internal product: no public code',
  },
  {
    kicker: 'Industry',
    title: 'AWS cost & risk agent (MCP)',
    org: 'Ally Financial · Cloud Data Engineering',
    dates: 'May – Aug 2025',
    summary:
      'An agentic-AI workflow built on a Model Context Protocol server that reads AWS resource data (via CloudQuery) to flag overprovisioned assets and security risks, with Terraform infrastructure and a Grafana cost dashboard.',
    stats: [
      { value: '$70K/yr', label: 'cloud spend saved' },
      { value: '100+', label: 'engineers used my OCI modules' },
    ],
    tags: ['Python', 'MCP', 'CloudQuery', 'AWS', 'Terraform', 'Grafana'],
    note: 'Internal tooling: no public code',
  },
  {
    kicker: 'Open source',
    title: 'PhoneLink',
    org: 'Side project · MIT license',
    dates: '2026',
    summary:
      'Mirror an Android phone’s screen and audio to a Windows PC over Wi-Fi. One-time pairing, then mDNS rediscovery and auto-reconnect. Downloads scrcpy on first run and verifies its checksum.',
    stats: [
      { value: '0', label: 'third-party Python deps' },
      { value: 'Android 11+', label: 'minimum Android version' },
    ],
    tags: ['Python', 'tkinter', 'adb', 'scrcpy', 'mDNS'],
    link: { href: 'https://github.com/TheLastMemeLeft/phonelink', label: 'View on GitHub' },
  },
];

export const experience = [
  { org: 'IBM', role: 'Software Developer Intern, API Connect Security', dates: 'Jun 2026 – present', place: 'San Jose, CA' },
  { org: 'ATLAS Materials Physics Lab, UCSD', role: 'Undergraduate ML Researcher (Prof. Tod Pascal)', dates: 'Oct 2026 – present', place: 'La Jolla, CA' },
  { org: 'UCSD Data Science Student Society', role: 'Assistant Project Director & Board Member: led 30+ students across 10 projects', dates: 'Jun 2025 – Jun 2026', place: 'La Jolla, CA' },
  { org: 'Ally Financial', role: 'Cloud Data Engineering Intern', dates: 'May – Aug 2025', place: 'Charlotte, NC' },
];

export const education = {
  school: 'University of California, San Diego',
  degree: 'B.S. Data Science',
  dates: 'Expected June 2027',
  coursework: 'Data Structures & Algorithms · Systems Programming (C/C++) · Computer Architecture · Networks · Probability & Statistics · Linear Algebra',
};

export const otherProjects = [
  {
    title: 'MyCloud',
    summary: 'Self-hosted file storage (in development): AES-256 encryption, SHA-256 integrity checks, time-limited sharing.', // GH description
    tags: ['Python', 'Flask'],
    href: 'https://github.com/TheLastMemeLeft/mycloud-mvp',
  },
  {
    title: 'TruReview',
    summary: 'Makes product reviews easier to search, using Google Gemini for sentiment analysis.', // GH description
    tags: ['Python', 'Gemini'],
    href: 'https://github.com/TheLastMemeLeft/TruReview',
  },
];

export const skills = [
  { group: 'Languages', items: 'Python, TypeScript, JavaScript, Go, C, C++, Java, SQL, Bash' },
  { group: 'ML & AI', items: 'PyTorch, TensorFlow, scikit-learn, LLM agents, MCP, VAEs' },
  { group: 'Scientific', items: 'ML interatomic potentials (UMA), ASE, pymatgen, DFT analysis (Quantum ESPRESSO), PyTorch/CUDA' },
  { group: 'Backend & Cloud', items: 'Node.js, Express, PostgreSQL, AWS, Terraform, Docker, CI/CD' },
];
