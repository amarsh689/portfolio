export const personalInfo = {
  name: "Amar Patil",
  title: "Full-Stack Developer",
  subtitle: ".NET Core • React • Azure • MS SQL",
  location: "New Delhi, India",
  email: "amarpatil689@gmail.com",
  phone: "+91 7741818424",
  linkedin: "https://linkedin.com/in/amar-patil-609b2983",
  github: "https://github.com/amarsh689",
  tagline: "Building scalable, high-performance web applications",
  bio: "Results-driven Full-Stack Developer with 4+ years of experience designing and delivering scalable, high-performance web and mobile applications. Proven expertise in ASP.NET Core Web API, C#, React, React Native, Entity Framework, and Microsoft Azure (AZ-204 certified). Hands-on experience with Microservices architecture, Docker, Kubernetes (AKS), SignalR, and Redis Cache. Adept at translating complex business requirements into clean, maintainable code with a strong focus on SOLID principles, design patterns, and Agile delivery.",
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
      "Azure (AZ-104, AZ-204)",
      "Azure Functions",
      "AKS",
      "ACR",
      "SignalR",
      "Redis Cache",
      "Docker",
      "Kubernetes",
      "CI/CD Pipeline",
      "Firebase",
    ],
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
      "ChatGPT",
      "Claude AI",
      "Azure OpenAI Service",
      "Cursor IDE",
      "Tabnine",
      "Prompt Engineering",
    ],
  },
  {
    category: "Testing & QA",
    icon: "🧪",
    items: ["Postman", "Swagger", "Test Automation", "Code Coverage"],
  },
  {
    category: "Tools & SDLC",
    icon: "🛠️",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Visual Studio",
      "VS Code",
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
    company: "CETPA Global Pvt. Ltd.",
    location: "Noida",
    period: "Jun 2025 – Present",
    current: true,
    projects: [
      {
        name: "Baithak – Collaborative Workspace & Meeting Platform",
        description:
          "Enterprise application for managing meeting rooms, collaborative workspaces, and real-time team scheduling.",
        tech: [
          "ASP.NET Core Web API",
          "React",
          "Redux",
          "JavaScript",
          "Entity Framework Core",
          "MS SQL Server",
          "Azure SignalR",
          "Bootstrap5",
        ],
        highlights: [
          "Designed and developed RESTful backend APIs using ASP.NET Core Web API following Clean Architecture and SOLID principles.",
          "Built interactive React frontend with Redux state management for real-time room availability and booking workflows.",
          "Integrated Azure SignalR for live seat status updates and push notifications across connected clients.",
          "Implemented JWT-based authentication and role-based authorization for Admin, Manager, and Employee roles.",
          "Managed CI/CD deployments to DEV, UAT, and PROD environments using Azure DevOps pipelines.",
          "Collaborated with business stakeholders in Agile sprint planning, daily standups, and retrospectives.",
          "Leveraged GitHub Copilot and ChatGPT to accelerate development, code reviews, and API documentation generation.",
        ],
      },
      {
        name: "Containerized Microservices Application",
        description:
          "Cloud-native backend microservices platform with autoscaling and real-time monitoring.",
        tech: [
          "ASP.NET Core",
          "Docker",
          "Azure Kubernetes Service (AKS)",
          "ACR",
          "Azure Monitor",
          "Virtual Networks",
          "Load Balancer",
        ],
        highlights: [
          "Containerized .NET Core microservices using Docker; deployed and managed workloads on Azure Kubernetes Service (AKS).",
          "Configured Ingress Controller, load balancing, and horizontal pod autoscaling policies for production workloads.",
          "Set up Azure Monitor and Application Insights for centralized logging, alerting, and performance dashboards.",
          "Implemented service-to-service communication using REST APIs with Azure Virtual Network isolation.",
        ],
      },
      {
        name: "Real-Time Notification System",
        description:
          "Scalable push notification backend serving web and mobile channels with low-latency delivery.",
        tech: [
          "ASP.NET Core Web API",
          "Azure SignalR Service",
          "Azure Redis Cache",
          "Azure SQL",
          "App Service",
          "Application Insights",
        ],
        highlights: [
          "Built backend APIs using .NET Core and integrated Azure SignalR for real-time push notifications to web and mobile clients.",
          "Configured Azure Redis Cache for high-throughput session management and notification fan-out optimization.",
          "Deployed application on Azure App Service with Application Insights telemetry for end-to-end tracing.",
          "Reduced average notification delivery latency by leveraging Redis pub/sub and SignalR backplane integration.",
          "Used Azure OpenAI Service APIs during prototyping phase for intelligent notification categorization and summarization.",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Executive – Developer",
    company: "Grant Thornton Bharat LLP",
    location: "New Delhi",
    period: "Jun 2023 – Aug 2024",
    current: false,
    projects: [
      {
        name: "Book My Desk (BMD) – Seat Booking Application",
        description:
          "Internal workspace reservation application enabling employees to pre-book desks before arriving at the office.",
        tech: [
          "ASP.NET Core Web API",
          "HTML5",
          "CSS3",
          "Bootstrap5",
          "React",
          "Redux",
          "Redux-Thunk",
          "JavaScript",
          "React-Bootstrap",
        ],
        highlights: [
          "Developed and maintained full-stack features — RESTful backend APIs using ASP.NET Core Web API and interactive React frontend with Redux.",
          "Implemented seat availability logic, booking workflows, and email notification triggers via backend services.",
          "Managed end-to-end deployments to DEV, UAT, and PROD environments ensuring zero-downtime releases.",
          "Participated in daily Agile scrum ceremonies and collaborated directly with business stakeholders for requirement analysis.",
        ],
      },
      {
        name: "Client Connect App – Relationship Management Mobile App",
        description:
          "Cross-platform iOS & Android app providing quick access to firm partner and client information for relationship management.",
        tech: [
          "React Native",
          "ASP.NET Web API",
          "Azure",
          "Bootstrap",
          "ChakraUI",
        ],
        highlights: [
          "Developed new user-facing features and reusable component library using React Native for iOS and Android.",
          "Integrated ASP.NET Web API endpoints for real-time partner and client data retrieval.",
          "Optimized component rendering and reduced load time through memoization and lazy loading strategies.",
          "Collaborated with QA and design teams for UAT sign-off and app store deployment readiness.",
        ],
      },
    ],
  },
  {
    id: 3,
    role: "React JS Developer",
    company: "Sevenmind Technology LLP",
    location: "Pune",
    period: "Mar 2021 – May 2023",
    current: false,
    projects: [
      {
        name: "Vault Business – International Money Exchange App",
        description:
          "Fintech platform with live mid-market rates, currency converter, and global money tracking.",
        tech: [
          "React",
          "Redux",
          "TypeScript",
          ".NET Core Web API",
          "Entity Framework",
          "MS SQL Server",
          "Bootstrap",
        ],
        highlights: [
          "Developed and maintained full-stack features across React frontend and .NET Core Web API backend.",
          "Integrated real-time currency rate APIs and implemented transaction processing workflows.",
          "Optimized SQL queries and EF Core LINQ expressions for high-frequency exchange rate lookups.",
          "Implemented JWT authentication and role-based API access control for secure financial operations.",
        ],
      },
      {
        name: "Meddy – Healthcare Data Platform",
        description:
          "US citizen centralized healthcare platform collecting and displaying medical history to assist physicians.",
        tech: [
          "ASP.NET Core MVC",
          ".NET Core Web API",
          "React",
          "Redux",
          "TypeScript",
          "Tailwind CSS",
          "Entity Framework",
          "Azure",
        ],
        highlights: [
          "Designed and developed backend Web APIs and the Admin MVC application from scratch.",
          "Architected the database schema for complex patient health records and physician access workflows.",
          "Managed Azure deployment, configuration, and environment management across DEV and PROD.",
          "Built reusable React components with TypeScript and Tailwind CSS for consistent UI across the platform.",
        ],
      },
      {
        name: "ESmart – E-Commerce Platform",
        description: "E-commerce platform for smart devices and accessories.",
        tech: [
          "React",
          "Redux",
          "TypeScript",
          "Bootstrap5",
          "React-Bootstrap",
        ],
        highlights: [
          "Developed user-facing product listing, cart, and checkout features using React with TypeScript.",
          "Built and published a reusable component library (product cards, filters, modals) used across the platform.",
          "Integrated RESTful API endpoints for product catalog, inventory, and order management.",
        ],
      },
      {
        name: "Yoke – Point of Sale (POS) System",
        description:
          "POS application for inventory management and payment transaction processing.",
        tech: [".NET Core Web API", "Entity Framework", "MS SQL Server"],
        highlights: [
          "Developed backend APIs for inventory tracking, billing, and payment transaction modules.",
          "Interacted directly with clients for requirement gathering, estimation, and sprint planning.",
          "Designed normalized SQL Server schema for inventory, products, and transaction audit logs.",
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
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Azure Certifications", value: "2" },
  { label: "Technologies", value: "30+" },
];
