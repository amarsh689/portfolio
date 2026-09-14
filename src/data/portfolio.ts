export const personalInfo = {
  name: "Amar Patil",
  title: "Full-Stack Developer",
  subtitle: "ASP.NET Core • React • Azure • Microservices",
  location: "New Delhi, India",
  email: "amarpatil689@gmail.com",
  phone: "+91 7741818424",
  linkedin: "https://linkedin.com/in/amar-patil-609b2983",
  github: "https://github.com/amarsh689",
  tagline: "Building scalable, high-performance enterprise applications",
  bio: "Results-driven Full-Stack Developer with 5+ years of experience designing, developing, and deploying scalable enterprise applications using ASP.NET Core, React.js, TypeScript, and Microsoft Azure. Proven expertise in microservices architecture, RESTful API design, event-driven messaging with Apache Kafka and RabbitMQ, and cloud-native deployments using Docker and Kubernetes (AKS). Skilled in performance optimization, CI/CD automation, and secure application development (JWT, OAuth 2.0, RBAC) across FinTech, Healthcare, and enterprise workforce management domains.",
};

export const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    items: ["C#", "JavaScript", "TypeScript", "HTML5", "CSS3", "jQuery"],
  },
  {
    category: "Frameworks",
    icon: "🧩",
    items: [
      "ASP.NET Core",
      "ASP.NET MVC",
      ".NET Framework",
      "Web API 2",
      "WCF",
      "WPF",
      "React.js",
      "React Native",
      "Redux",
      "Redux-Thunk",
      "Bootstrap",
      "Tailwind",
      "ChakraUI",
    ],
  },
  {
    category: "ORM & Patterns",
    icon: "🏗️",
    items: [
      "Entity Framework Core",
      "Repository Pattern",
      "MVC",
      "Microservices",
      "CQRS",
      "Factory Pattern",
      "Design Patterns",
      "SOLID Principles",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["Microsoft SQL Server", "MySQL", "CosmosDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    items: [
      "Microsoft Azure (App Services, Functions, Azure SQL)",
      "Azure (AZ-104, AZ-204)",
      "Azure DevOps",
      "AKS",
      "ACR",
      "SignalR",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Firebase",
    ],
  },
  {
    category: "Messaging & Streaming",
    icon: "📨",
    items: ["Apache Kafka", "RabbitMQ", "Event-Driven Architecture"],
  },
  {
    category: "Security",
    icon: "🔐",
    items: ["JWT Authentication", "OAuth 2.0", "Role-Based Authorization"],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    items: [
      "GitHub Copilot",
      "Cursor AI",
      "Claude Code",
      "OpenAI Codex",
      "ChatGPT",
      "Azure OpenAI Service",
    ],
  },
  {
    category: "Testing & QA",
    icon: "🧪",
    items: ["Postman", "Swagger", "Test Automation", "Code Coverage"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Visual Studio",
      "VS Code",
      "Postman",
      "Swagger",
      "Redis Cache",
      "Jira",
      "Agile (Scrum)",
      "Waterfall",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Accenture",
    location: "India",
    period: "Sep 2024 – Present",
    current: true,
    projects: [
      {
        name: "Enterprise Employee Management & Performance Tracking System",
        description:
          "Cloud-based workforce management platform supporting employee onboarding, attendance, leave tracking, performance evaluation, goal management, and enterprise reporting.",
        tech: [
          "ASP.NET Core 8",
          "React.js",
          "TypeScript",
          "Azure App Services",
          "Azure SQL Database",
          "Azure Functions",
          "Redis Cache",
          "Docker",
          "Kubernetes",
          "JWT Authentication",
        ],
        highlights: [
          "Architected a microservices-based system using ASP.NET Core with scalable RESTful APIs for full employee lifecycle management.",
          "Built responsive React.js dashboards tailored for HR, managers, and employees.",
          "Implemented JWT authentication and role-based access control across all modules.",
          "Integrated Azure Functions for scheduled jobs and automated notifications.",
          "Containerized services with Docker and deployed on Azure Kubernetes Service (AKS) with automated CI/CD pipelines.",
          "Built reporting dashboards and analytics modules using Azure services and SQL Server; performed API and database performance tuning.",
          "Improved application response time by 40% through Redis caching and performance optimization.",
          "Reduced deployment effort by 70% through CI/CD pipeline automation; supported 10,000+ employee records with high availability.",
        ],
      },
      {
        name: "Enterprise Cloud & Microservices Delivery",
        description:
          "Enterprise-grade, cloud-native application development for large-scale business clients on Microsoft Azure.",
        tech: [
          "ASP.NET Core",
          "React.js",
          "Microsoft Azure",
          "Microservices Architecture",
          "REST APIs",
          "Azure DevOps",
        ],
        highlights: [
          "Develop enterprise-grade, cloud-native applications using ASP.NET Core, React.js, and Microsoft Azure for large-scale business clients.",
          "Design and implement scalable RESTful APIs and microservices to support high-volume production workloads.",
          "Drive application modernization and performance optimization initiatives across cloud deployment pipelines.",
          "Collaborate with cross-functional, cross-geography teams in Agile Scrum environments to consistently deliver on sprint commitments.",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Walker Chandiok & Co LLP",
    location: "New Delhi",
    period: "Jun 2023 – Aug 2024",
    current: false,
    projects: [
      {
        name: "Book My Desk — Workspace Reservation Platform",
        description:
          "Workspace reservation application enabling seat allocation and booking management for enterprise offices.",
        tech: [
          "ASP.NET Core Web API",
          "React.js",
          "Redux",
          "JavaScript",
          "Bootstrap",
          "SQL Server",
        ],
        highlights: [
          "Built full-stack workspace reservation modules using ASP.NET Core Web API and React.js.",
          "Engineered automated approval workflows and real-time notification systems, reducing manual booking coordination effort.",
          "Managed deployments across Development, UAT, and Production environments, ensuring release stability.",
          "Partnered with stakeholders to translate business requirements into technical enhancements.",
        ],
      },
      {
        name: "Client Connect App (iOS & Android)",
        description:
          "Cross-platform mobile app providing quick access to firm partner and client information for relationship management.",
        tech: [
          "React Native",
          "ASP.NET Web API",
          "Azure",
          "Chakra UI",
        ],
        highlights: [
          "Developed reusable, responsive mobile UI components using React Native for iOS and Android platforms.",
          "Integrated REST APIs for real-time client and partner data retrieval and synchronization.",
          "Improved application load performance through lazy loading and component-level optimization.",
          "Supported UAT testing, production releases, and post-deployment issue resolution.",
        ],
      },
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Sevenmind Technology LLP",
    location: "Pune",
    period: "Mar 2021 – May 2023",
    current: false,
    projects: [
      {
        name: "Vault Business — FinTech Money Exchange Platform",
        description:
          "FinTech platform with live exchange rates, currency conversion, and secure transaction management.",
        tech: [
          "React.js",
          "Redux",
          "TypeScript",
          "ASP.NET Core",
          "SQL Server",
        ],
        highlights: [
          "Developed secure currency exchange and transaction management modules for a live FinTech platform.",
          "Integrated third-party APIs for real-time exchange rate processing and settlement.",
          "Optimized SQL queries and Entity Framework operations, improving data retrieval performance.",
          "Implemented JWT authentication and role-based authorization to secure financial transactions.",
        ],
      },
      {
        name: "Meddy — Healthcare Data Platform",
        description:
          "Healthcare management platform with backend APIs and admin workflows for clinical operations.",
        tech: [
          "ASP.NET Core MVC",
          "React.js",
          "TypeScript",
          "Azure",
        ],
        highlights: [
          "Built scalable healthcare management modules and backend APIs deployed on Azure.",
          "Designed administration functionalities and healthcare data workflows for clinical operations.",
          "Managed Azure deployments and cloud configuration for production environments.",
          "Developed reusable React components to standardize UI consistency across modules.",
        ],
      },
      {
        name: "ESmart — E-Commerce Platform",
        description: "E-commerce application for smart devices and accessories.",
        tech: [
          "React.js",
          "Redux",
          "TypeScript",
          "Bootstrap",
        ],
        highlights: [
          "Developed product catalog, shopping cart, and checkout features for an e-commerce application.",
          "Built a reusable frontend component library to accelerate feature development.",
          "Integrated APIs for inventory and order management systems.",
        ],
      },
      {
        name: "Yoke — Point of Sale System",
        description:
          "POS application for inventory management, billing, and payment transaction processing.",
        tech: ["ASP.NET Core Web API", "SQL Server"],
        highlights: [
          "Developed inventory management and billing APIs for retail point-of-sale operations.",
          "Designed database schemas and transaction audit mechanisms for financial accuracy.",
          "Participated in client discussions, sprint planning, and requirement analysis.",
        ],
      },
    ],
  },
];

export const certifications = [
  {
    title: "Microsoft Azure Administrator Associate",
    code: "AZ-104",
    issuer: "Microsoft",
    icon: "☁️",
  },
  {
    title: "Microsoft Azure Developer Associate",
    code: "AZ-204",
    issuer: "Microsoft",
    icon: "⚡",
  },
  {
    title: "React Frontend Development",
    code: "CERT",
    issuer: "Certified",
    icon: "⚛️",
  },
  {
    title: ".NET Application Development",
    code: "CERT",
    issuer: "Certified",
    icon: "🔷",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "D.R.I.E.M.S.",
    location: "Mumbai",
    icon: "🎓",
  },
  {
    degree: "Diploma",
    institution: "G.H. Raisoni Institute",
    board: "M.S.B.T.E.",
    location: "Jalgaon",
    icon: "📚",
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Azure Certifications", value: "2" },
  { label: "Technologies", value: "30+" },
];
