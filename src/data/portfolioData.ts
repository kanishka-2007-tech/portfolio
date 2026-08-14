import { Skill, Project, ExperienceItem, AchievementItem, Certification } from '../types';

export const SKILLS_DATA: Skill[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    level: 'Expert',
    description: 'Core language for machine learning, computer vision (OpenCV, MediaPipe), scripts, and backend automation.'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases & Infrastructure',
    level: 'Advanced',
    description: 'Relational database schema design, indexing, performance optimization, and complex SQL joins.'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    level: 'Advanced',
    description: 'Object-oriented application development, data structures, algorithms, and enterprise backend engineering.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Languages',
    level: 'Expert',
    description: 'Strict type safety across full-stack Node.js, Express, React, and Next.js applications.'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Frameworks & Libraries',
    level: 'Expert',
    description: 'Semantic HTML5 markup, accessibility standard compliance (WCAG AA), and modern web layout structures.'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frameworks & Libraries',
    level: 'Expert',
    description: 'Tailwind CSS, CSS Grid/Flexbox, custom glassmorphism design tokens, keyframe animations, and responsive themes.'
  },
  {
    id: 'c-programming',
    name: 'C Programming',
    category: 'Languages',
    level: 'Advanced',
    description: 'Low-level memory management, pointers, system data structures, and optimized hardware algorithms.'
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'AI & Computer Vision',
    level: 'Advanced',
    description: 'Real-time image processing, object detection, feature extraction, and computer vision filters.'
  },
  {
    id: 'mediapipe',
    name: 'MediaPipe',
    category: 'AI & Computer Vision',
    level: 'Advanced',
    description: 'Cross-platform ML solutions for hand tracking, face mesh, landmark detection, and gesture recognition.'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases & Infrastructure',
    level: 'Advanced',
    description: 'NoSQL document database architecture, aggregation pipelines, schema indexing, and mongoose ODM.'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frameworks & Libraries',
    level: 'Expert',
    description: 'React application framework with App Router, SSR/SSG rendering, server actions, and API endpoints.'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Frameworks & Libraries',
    level: 'Expert',
    description: 'Event-driven, non-blocking asynchronous backend servers with Express, REST APIs, and microservices.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smart-campus-hub',
    title: 'SmartCampusHub',
    subtitle: 'Unified Campus Management Platform',
    description: 'A comprehensive smart campus management system streamlining academic, administrative, and student lifecycle processes in a unified platform.',
    fullDescription: 'SmartCampusHub is an end-to-end web architecture created to digitize college operations. It unifies course registration, attendance tracking, grading systems, departmental notices, and administrative ticket resolutions into a fast, responsive glassmorphic dashboard.',
    tags: ['Next.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEflxrQKam4HYWieSgzwB6PiDx42PI6jgxsyKOzkuC6TBSe1oD1tRnAy2E3GP72PkdDDsD1iEXx4sbIFYMmxx1TC8ucUgEWqcxw-2i33MaKnxyIrprQvcb-9BP2FZwYBgDfsBybuSJoRQkWgobmaj5fHGdATR_cbrspX5yRYPkBRtxGLbWI5zHsSzk1qZzPcOP6rT5gt6W5FPaprCEzW1iySQBj0up36gu8MZzEuMB0QYwHWnhYiWe',
    linkText: 'Case Study',
    linkType: 'case-study',
    features: [
      'Real-time academic performance & GPA progression analytics',
      'Automated attendance tracking with biometric / QR check-ins',
      'Role-based access control (Student, Faculty, Admin, Dean)',
      'Instant notification dispatch for urgent campus announcements'
    ],
    architecture: [
      'Next.js 14 App Router for server-rendered page performance',
      'MongoDB Atlas cluster with optimized compound indices',
      'JWT Authentication with httpOnly encrypted cookie sessions',
      'Tailwind CSS Cybernetic Precision design tokens'
    ],
    stats: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Active Users', value: '4,500+' },
      { label: 'Latency', value: '< 120ms' }
    ]
  },
  {
    id: 'distributed-core-api',
    title: 'Distributed Core API',
    subtitle: 'Scalable Microservice Gateway & Infrastructure',
    description: 'A scalable microservices architecture handling millions of daily requests with 99.99% uptime and comprehensive fault tolerance.',
    fullDescription: 'An enterprise-ready distributed API gateway engineered in Node.js and PostgreSQL. Features dynamic load balancing, circuit breakers, asynchronous task queues with Redis, and automated failover recovery for high-concurrency cloud workloads.',
    tags: ['Node.js', 'PostgreSQL', 'Express', 'Redis'],
    category: 'APIs & Systems',
    isCodeSnippet: true,
    codeSnippet: `const initializeCore = async () => {
  await system.boot({
    mode: 'distributed',
    nodes: 4,
    failover: true
  });
  
  return Core.ready();
};`,
    linkText: 'Github Repo',
    linkType: 'github',
    features: [
      'Automatic node health monitoring & active cluster failover',
      'Distributed rate limiting with token-bucket Redis implementation',
      'End-to-end request tracing via OpenTelemetry span IDs',
      'Zero-downtime rolling deployments'
    ],
    architecture: [
      'Node.js cluster worker pool utilizing multi-core parallelism',
      'PostgreSQL connection pooling with Prisma/Drizzle ORM',
      'Docker container orchestration with Kubernetes manifests',
      'Prometheus and Grafana metrics instrumentation'
    ],
    stats: [
      { label: 'Requests/sec', value: '15,000+' },
      { label: 'Failover Time', value: '< 2.4s' },
      { label: 'Code Coverage', value: '98.5%' }
    ]
  },
  {
    id: 'aura-fintech-app',
    title: 'Aura FinTech App',
    subtitle: 'Next-Gen Mobile Banking Solution',
    description: 'A secure, cross-platform mobile banking solution featuring biometric authentication and complex state management.',
    fullDescription: 'Aura FinTech delivers an ultra-smooth, high-security mobile banking experience. Built with Flutter and powered by a GraphQL API backend, it includes real-time multi-currency transaction logging, biometric authentication, virtual debit card controls, and AI spending insights.',
    tags: ['Flutter', 'GraphQL', 'Node.js', 'Biometrics'],
    category: 'Mobile & FinTech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAE07WfTz-ZbkcZ8zQlgfiqaGF5xVNSSPMuOF_AFdDJPzecmz2FsI7kQVs_DgGI0wDdoZMC0dOrBox_DKwBtSSXMjntPZNG-LEUqvyrBEjgZBIlIG8a-f25wRZRIJIMsOn-3_70qAfDwDI3lIOskQd8YeelVLWzEG87gt9d2X5s9CaCV0nlb9Bqvb1a0Bftkm2n_04EkJ3hfvjRiafeVYcJWnfjkxiVSAuI1D5DrmvrySZqSmp680X',
    linkText: 'App Store',
    linkType: 'app-store',
    features: [
      'Hardware-backed FaceID / TouchID biometric login',
      'Instant GraphQL subscriptions for real-time transaction updates',
      'Interactive card customization & instant card freeze functionality',
      'End-to-end encrypted balance transfers & QR payments'
    ],
    architecture: [
      'Flutter reactive UI components using BLoC state management pattern',
      'GraphQL Apollo client with normalized local cache',
      'Node.js secure transaction server with HSM payload signing',
      'Biometric hardware key vault integration'
    ],
    stats: [
      { label: 'Security Grade', value: 'A+' },
      { label: 'Transactions', value: '$2.8M+' },
      { label: 'Rating', value: '4.9/5.0' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'gssoc',
    title: 'GirlScript Summer of Code',
    role: 'Open Source Contributor',
    company: 'GirlScript Foundation',
    duration: '2023 - Present',
    description: 'Contributed to open-source projects during the GirlScript Summer of Code, collaborating with developers worldwide to improve codebase quality and add new features.',
    highlights: [
      'Submitted 15+ merged Pull Requests across web development and developer tool repositories',
      'Refactored legacy JavaScript codebases into strictly-typed TypeScript modules',
      'Collaborated with global mentors to optimize API response times by 35%',
      'Reviewed and audited community PRs for security vulnerabilities and coding standards'
    ],
    skills: ['TypeScript', 'React', 'Git', 'Open Source', 'Node.js']
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'gcp-facilitator',
    title: 'Google Cloud Facilitator Program',
    role: 'Participant',
    organization: 'Google Cloud',
    duration: '2023 - 2024',
    date: '2023 - 2024',
    description: 'Successfully completed the Google Cloud Facilitator Program, gaining hands-on experience with cloud infrastructure, computing, and data engineering on Google Cloud Platform.',
    details: [
      'Earned multiple Skill Badges in Cloud Infrastructure, BigQuery, Compute Engine, and Kubernetes',
      'Architected auto-scaling serverless web services on Google Cloud Run',
      'Engineered automated CI/CD deployment pipelines using Google Cloud Build',
      'Configured IAM policies, VPC firewall rules, and Cloud Storage security buckets'
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: '2024',
    credentialId: 'AWS-CCP-8942019',
    skillsVerified: ['AWS Architecture', 'EC2', 'S3', 'IAM', 'Cloud Security']
  },
  {
    id: 'mongodb-associate',
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB, Inc.',
    issueDate: '2024',
    credentialId: 'MDB-DEV-55102',
    skillsVerified: ['Document Modeling', 'Aggregation Framework', 'Index Optimization', 'Mongoose']
  },
  {
    id: 'freecodecamp-web',
    title: 'FreeCodeCamp Responsive Web Design',
    issuer: 'FreeCodeCamp',
    issueDate: '2023',
    credentialId: 'FCC-RWD-77821',
    skillsVerified: ['HTML5', 'CSS3 Grid/Flexbox', 'Accessibility (a11y)', 'Responsive Design']
  }
];

export const USER_BIO = {
  name: 'Kanishka Gupta',
  tagline: 'BTech CSE Innovator',
  headline: 'Kanishka Gupta: BTech CSE Innovator',
  bio: 'I am a passionate BTech Computer Science student building precise, high-performance digital solutions. I combine strong foundational knowledge with premium modern design to deliver sophisticated enterprise-grade web applications.',
  email: 'kanishkagupta2618@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com'
};
