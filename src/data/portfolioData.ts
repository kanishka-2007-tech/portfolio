import { Skill, Project, ExperienceItem, AchievementItem, Certification, Hackathon } from '../types';

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
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'gssoc',
    title: 'GirlScript Summer of Code',
    role: 'Open Source Contributor',
    company: 'GirlScript Foundation',
    duration: 'May 2026 - Aug 2026',
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
    duration: 'Jul 2026 - Sept 2026',
    date: 'Jul 2026 - Sept 2026',
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
    id: 'gen-ai-101',
    title: 'Gen AI 101',
    issuer: 'FutureSkills Prime / Nasscom IT-ITeS SSC',
    issueDate: '08 Apr 2026',
    credentialId: 'FSP-GAI101-2026',
    skillsVerified: ['Generative AI', 'AI Fundamentals', 'AI Competency Standards']
  },
  {
    id: 'microsoft-intro-ai',
    title: 'Introduction to AI Concepts',
    issuer: 'Microsoft',
    issueDate: 'December 25, 2025',
    credentialId: 'MS-AI-2025-KG',
    skillsVerified: ['Artificial Intelligence', 'AI Concepts', 'Machine Learning Fundamentals']
  },
  {
    id: 'quizoff-2026',
    title: 'QuizOff 2026 - India\'s Biggest AI Quiz',
    issuer: 'CampusCrew / Unstop',
    issueDate: '19 July 2026',
    credentialId: 'UNSTOP-QO2026-KG',
    skillsVerified: ['Artificial Intelligence', 'AI Quiz Competition', 'Problem Solving']
  }
];

export const HACKATHONS_DATA: Hackathon[] = [
  {
    id: 'ideathon-25',
    title: 'IDEATHON\'25',
    event: 'Inter University Innovation Challenge',
    organizer: 'IILM University, Gurugram',
    date: '18 November 2025',
    description: 'Successfully participated in IDEATHON 2025 – Inter University Innovation Challenge, organized by the School of Computer Science & Engineering, Center of Excellence – Robotics & Automation at IILM University, Gurugram.'
  },
  {
    id: 'codecraft-26',
    title: 'CODECRAFT\'26',
    event: 'Inter-University Project Showcasing Challenge',
    organizer: 'IILM University, Gurugram',
    date: '12 February 2026',
    description: 'Successfully participated in CODECRAFT\'26 – Inter-University Project Showcasing Challenge, organized by the School of Computer Science and Engineering at IILM University, Gurugram.'
  }
];

export const USER_BIO = {
  name: 'Kanishka Gupta',
  tagline: 'BTech CSE Innovator',
  headline: 'Kanishka Gupta: BTech CSE Innovator',
  bio: 'I am a passionate BTech Computer Science student building precise, high-performance digital solutions. I combine strong foundational knowledge with premium modern design to deliver sophisticated enterprise-grade web applications.',
  email: 'kanishkagupta2607@gmail.com',
  github: 'https://github.com/kanishka-2007-tech',
  linkedin: 'https://www.linkedin.com/in/kanishka-gupta-7a3aa7380/',
  twitter: 'https://twitter.com'
};
