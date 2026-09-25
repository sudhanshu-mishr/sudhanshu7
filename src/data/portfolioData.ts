export interface Repository {
  id: number | string
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage?: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics?: string[]
  updated_at: string
}

export interface ProjectItem {
  id: string
  title: string
  tagline: string
  category: "Silicon & OS" | "Web Design" | "Full-Stack" | "Creative Tech" | "Open Source"
  description: string
  features: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  isFeatured?: boolean
  isLatest?: boolean
  metrics?: string
}

export interface FreelanceHighlight {
  role: string
  focus: string
  impact: string
  stack: string[]
}

export const USER_INFO = {
  name: "Sudhanshu Mishra",
  headline: "Chip Engineer · OS Developer · Systems & Full-Stack Architect",
  bio: "Silicon architect and operating systems engineer with deep expertise across RISC-V implementations, kernel primitives, hardware-software co-design, and modern software platforms. Proven freelance track record delivering custom processor verification, OS modules, and client-facing digital architectures worldwide.",
  email: "msudhanshu416@gmail.com",
  githubUsername: "sudhanshu-mishr",
  githubUrl: "https://github.com/sudhanshu-mishr",
  auraRvUrl: "https://aurarv.netlify.app/",
  renderSiteUrl: "https://sudhanshu-wxc2.onrender.com/",
  location: "India · Available for Global Contracts & Freelance",
  status: "Open for Chip Engineering, OS Development & Freelance Architecture",
}

export const AURA_RV_DETAILS = {
  url: "https://aurarv.netlify.app/",
  badge: "LATEST LAUNCH · CHIP & OS PROJECT",
  title: "Aura RV — RISC-V Silicon & OS Architecture",
  subtitle: "Hardware-Software Co-Design, Processor Pipeline & Operating System Runtime",
  description:
    "Sudhanshu Mishra's flagship latest project: a comprehensive RISC-V architecture and operating system environment engineered for instruction pipeline inspection, register hazard analysis, memory virtualization, and kernel runtime exploration.",
  pillars: [
    {
      title: "RISC-V Core & ISA Engine",
      desc: "Accurate instruction decoding (RV32/64), pipeline hazard detection, ALU execution stages, and custom ISA extension handling.",
    },
    {
      title: "Operating System Kernel Runtime",
      desc: "Multitasking scheduler, interrupt vector table, trap handlers, virtual memory paging (SV32/SV39), and system call interfaces.",
    },
    {
      title: "Hardware-Software Co-Design",
      desc: "Bridging silicon RTL abstractions with low-level assembly, bare-metal bootloaders, and compiled C/Rust firmware.",
    },
    {
      title: "Interactive Web-Based Simulator",
      desc: "Real-time register file view, disassembly stepper, memory inspector, and tactile debugging UI accessible worldwide on Netlify.",
    },
  ],
  tags: ["RISC-V", "Chip Engineering", "OS Kernel", "C / Rust / Assembly", "Silicon Co-Design", "Netlify"],
}

export const FREELANCE_HIGHLIGHTS: FreelanceHighlight[] = [
  {
    role: "Silicon & RTL Verification Consultant",
    focus: "RISC-V Core Verification & FPGA Testing",
    impact: "Delivered synthesizable module tests, pipeline timing verification, and automated regression testbenches for specialized custom silicon blocks.",
    stack: ["SystemVerilog", "Verilog", "RISC-V ISA", "FPGA", "UVM"],
  },
  {
    role: "Low-Level Systems & OS Developer",
    focus: "Custom Microkernels, Bootloaders & Drivers",
    impact: "Architected bare-metal drivers, trap handlers, page table allocators, and deterministic task scheduling routines for embedded platforms.",
    stack: ["C", "Rust", "Assembly", "MMU / Paging", "POSIX"],
  },
  {
    role: "Full-Stack Web & Design Systems Architect",
    focus: "High-Performance Interactive Digital Platforms",
    impact: "Built bespoke responsive web applications, design systems, and cloud deployments on Render and Netlify with sub-second performance.",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Cloud Architecture"],
  },
]

export const RENDER_SITE_DETAILS = {
  url: "https://sudhanshu-wxc2.onrender.com/",
  title: "Website Design & Creative Projects",
  subtitle: "Dedicated Showcase for High-Craft Websites & Driven Projects",
  description:
    "A premier web destination showcasing bespoke website designs, responsive layouts, creative UI engineering, and web-driven digital products built by Sudhanshu Mishra.",
  pillars: [
    {
      title: "Bespoke Web Design",
      desc: "Tailored visual identity, art direction, and layouts crafted specifically for distinctive digital presence.",
    },
    {
      title: "Performance & Responsive Math",
      desc: "Pixel-perfect across mobile, tablet, and widescreen viewports with sub-second load times.",
    },
    {
      title: "Micro-Interactions & Motion",
      desc: "Delightful tactile feedback, vector animations, and fluid transitions that elevate user engagement.",
    },
    {
      title: "Full-Stack Architecture",
      desc: "Seamless integration between client-side aesthetics and robust cloud deployment on Render.",
    },
  ],
  tags: ["Web Design", "UI/UX", "Responsive Layouts", "Render Cloud", "Design Systems"],
}

export const FALLBACK_REPOSITORIES: Repository[] = [
  {
    id: 100,
    name: "aurarv-riscv-os",
    full_name: "sudhanshu-mishr/aurarv-riscv-os",
    description: "Flagship RISC-V architecture simulator and microkernel operating system runtime with live web debugger.",
    html_url: "https://github.com/sudhanshu-mishr",
    homepage: "https://aurarv.netlify.app/",
    stargazers_count: 36,
    forks_count: 8,
    language: "C",
    topics: ["riscv", "chip-design", "operating-system", "assembly", "kernel"],
    updated_at: "2026-03-24T18:00:00Z",
  },
  {
    id: 101,
    name: "sudhanshu-web-projects",
    full_name: "sudhanshu-mishr/sudhanshu-web-projects",
    description: "Creative web showcase featuring bespoke design systems, fluid micro-interactions, and modern website builds.",
    html_url: "https://github.com/sudhanshu-mishr",
    homepage: "https://sudhanshu-wxc2.onrender.com/",
    stargazers_count: 14,
    forks_count: 4,
    language: "TypeScript",
    topics: ["react", "web-design", "tailwind", "render", "portfolio"],
    updated_at: "2026-03-20T10:00:00Z",
  },
  {
    id: 102,
    name: "riscv-core-pipeline-rtl",
    full_name: "sudhanshu-mishr/riscv-core-pipeline-rtl",
    description: "Synthesizable 5-stage pipelined RISC-V (RV32I) core with hazard forwarder, branch prediction, and memory bus controller.",
    html_url: "https://github.com/sudhanshu-mishr",
    homepage: null,
    stargazers_count: 42,
    forks_count: 9,
    language: "Verilog",
    topics: ["verilog", "riscv", "silicon", "fpga", "hardware"],
    updated_at: "2026-03-15T12:00:00Z",
  },
  {
    id: 103,
    name: "microkernel-os-primitives",
    full_name: "sudhanshu-mishr/microkernel-os-primitives",
    description: "Bare-metal multitasking OS kernel with paged virtual memory, preemptive round-robin scheduler, and IPC mechanisms.",
    html_url: "https://github.com/sudhanshu-mishr",
    homepage: null,
    stargazers_count: 29,
    forks_count: 7,
    language: "C",
    topics: ["operating-system", "kernel", "mmu", "scheduler", "bare-metal"],
    updated_at: "2026-03-02T14:30:00Z",
  },
  {
    id: 104,
    name: "fullstack-cloud-engine",
    full_name: "sudhanshu-mishr/fullstack-cloud-engine",
    description: "Production-ready web platform template with secure auth, PostgreSQL integration, and Express microservices.",
    html_url: "https://github.com/sudhanshu-mishr",
    homepage: null,
    stargazers_count: 19,
    forks_count: 5,
    language: "JavaScript",
    topics: ["nodejs", "express", "postgresql", "rest-api"],
    updated_at: "2026-02-28T09:15:00Z",
  },
  {
    id: 105,
    name: "modern-ui-components",
    full_name: "sudhanshu-mishr/modern-ui-components",
    description: "Collection of accessible, zero-slop UI components with custom bezier timings, typography scales, and responsive tokens.",
    html_url: "https://github.com/sudhanshu-mishr",
    homepage: null,
    stargazers_count: 22,
    forks_count: 3,
    language: "CSS",
    topics: ["shadcn", "tailwind", "design-system", "accessibility"],
    updated_at: "2026-02-14T11:45:00Z",
  },
]

export const CURATED_PROJECTS: ProjectItem[] = [
  {
    id: "aura-rv",
    title: "Aura RV — RISC-V Silicon & OS Architecture",
    tagline: "Latest Project: Hardware-software co-design, RISC-V processor simulation & operating system environment",
    category: "Silicon & OS",
    description:
      "Sudhanshu's latest flagship project hosted on Netlify (aurarv.netlify.app). Engineered as an end-to-end RISC-V architecture environment featuring instruction cycle stepping, register file hazard tracking, virtual memory paging, and operating system kernel multitasking.",
    features: [
      "RISC-V (RV32/64) instruction set execution with pipeline stages and hazards",
      "Operating system kernel abstractions: paging, traps, system calls, and task scheduling",
      "Interactive real-time memory and register inspection interface deployed on Netlify",
      "Hardware-software co-design methodology for rapid silicon prototyping",
    ],
    tags: ["RISC-V", "Chip Engineering", "OS Kernel", "C / Rust / Assembly", "Netlify"],
    liveUrl: "https://aurarv.netlify.app/",
    githubUrl: "https://github.com/sudhanshu-mishr",
    isFeatured: true,
    isLatest: true,
    metrics: "Latest Launch · RISC-V & OS",
  },
  {
    id: "render-studio",
    title: "Website Design & Architecture",
    tagline: "High-craft digital showcase for website architecture & experimental web solutions",
    category: "Web Design",
    description:
      "A flagship web platform hosted on Render dedicated to showcasing modern website designing, custom layouts, and web-driven client solutions. Engineered with focus on typography hierarchy, tactile user response, and seamless mobile responsiveness.",
    features: [
      "Custom responsive layouts optimized across 360px to 2560px viewports",
      "Dynamic typography and fluid layout systems",
      "Fast rendering with sub-second page delivery on Render cloud",
      "Interactive components demonstrating modern CSS and JavaScript patterns",
    ],
    tags: ["Web Design", "UI/UX Architecture", "Render Cloud", "Design Systems"],
    liveUrl: "https://sudhanshu-wxc2.onrender.com/",
    githubUrl: "https://github.com/sudhanshu-mishr",
    isFeatured: true,
    metrics: "100% Responsive · Modern UI/UX",
  },
  {
    id: "waving-interactive-poster",
    title: "Monoline Typography & Animation Engine",
    tagline: "Hand-inked vector bone-rigged character with monoline letterpress slot reels",
    category: "Creative Tech",
    description:
      "An interactive letterpress canvas featuring dynamic centre-line path monoline glyphs, mechanical reel spin algorithms, eye-tracking pointer physics, and an animated character that rises and waves to the visitor.",
    features: [
      "Pure SVG centre-line monoline stroke rendering without font dependencies",
      "Physics-based pointer gaze tracking and eyelid animation",
      "Dynamic scramble decoding and re-roll triggers on letter hover",
      "Dice roll generators and celebratory letter burst physics",
    ],
    tags: ["React", "Pure SVG Rigs", "Creative Coding", "Vector Animation"],
    liveUrl: "#hero-poster",
    githubUrl: "https://github.com/sudhanshu-mishr",
    isFeatured: false,
    metrics: "Zero External Fonts · 60 FPS Animation",
  },
  {
    id: "fullstack-platform",
    title: "Full-Stack Web App Engine",
    tagline: "Scalable backend architecture with relational persistence and reactive UI",
    category: "Full-Stack",
    description:
      "Production-ready web application incorporating secure authentication, RESTful APIs, relational data modeling, and intuitive state management for multi-user workflows.",
    features: [
      "Modular Express & Node.js service architecture",
      "Relational schema design with migrations and type safety",
      "Real-time UI optimistic updates with resilient network error handling",
      "Protected routes and automated deployment pipelines",
    ],
    tags: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React"],
    githubUrl: "https://github.com/sudhanshu-mishr",
    metrics: "REST API · Auth & Database",
  },
  {
    id: "design-system-tokens",
    title: "Zero-Slop UI Component Library",
    tagline: "Editorial design system built with shadcn/ui principles and strict spatial math",
    category: "Open Source",
    description:
      "A curated collection of production components adhering to universal design constitutions: unboxed metadata discipline, single-line controls with truncation, and 60-30-10 color balance.",
    features: [
      "WCAG AA contrast verified across light and dark tones",
      "Zero dead clicks: fully interactive states and keyboard navigable",
      "Tabular figures for data tables and telemetry precision",
      "Strict padding mathematics and nested corner radius scaling",
    ],
    tags: ["Design System", "Tailwind CSS", "shadcn/ui", "Accessibility"],
    githubUrl: "https://github.com/sudhanshu-mishr",
    metrics: "Accessible · Reusable Tokens",
  },
]

export const SKILL_CATEGORIES = [
  {
    category: "Chip Engineering & Silicon",
    description: "Hardware description, processor architecture & ISA implementation",
    skills: [
      "RISC-V (RV32I / RV64I / Privileged ISA)",
      "Verilog & SystemVerilog RTL",
      "Pipeline Hazards & Branch Prediction",
      "Memory Controllers & Bus Fabrics (AHB/AXI)",
      "FPGA Prototyping & RTL Simulation",
      "Silicon Verification & UVM Methodologies",
    ],
  },
  {
    category: "Operating Systems & Low-Level",
    description: "Bare-metal kernels, virtualization & system primitives",
    skills: [
      "Custom OS Kernel Development",
      "Virtual Memory (MMU) & Multi-Level Paging",
      "Interrupt Vector Tables & Trap Handlers",
      "C, C++, Rust & Assembly (RISC-V/x86)",
      "Device Drivers & Memory-Mapped I/O",
      "Multithreading & Concurrency Primitives",
    ],
  },
  {
    category: "Software & Web Architecture",
    description: "High-performance software systems & modern responsive web design",
    skills: [
      "React 19, TypeScript & Next.js",
      "Tailwind CSS & Responsive Layout Math",
      "Node.js, Express & RESTful APIs",
      "PostgreSQL & Relational Data Modeling",
      "Web-Based Simulators & Interactive Canvases",
      "Netlify & Render Cloud Deployment Pipelines",
    ],
  },
  {
    category: "Freelance & Consulting Experience",
    description: "End-to-end technical delivery for international clients",
    skills: [
      "Chip Architecture & Verification Contracts",
      "Custom Operating System & Driver Modules",
      "Bespoke High-Craft Web Applications",
      "Technical Scoping & Milestone Delivery",
      "Client Collaboration & Code Auditing",
      "Full-Lifecycle Hardware-Software Co-Design",
    ],
  },
]

