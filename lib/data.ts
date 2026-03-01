export const personal = {
  name: "Rajvi Zala",
  location: "New York, NY",
  phone: "716-730-9620",
  email: "rajvisinhzala@gmail.com",
  linkedin: "https://linkedin.com/in/rajvizala7107",
  github: "https://github.com/rajvizala",
} as const;

export const hero = {
  tagline: "Full-Stack Developer & AI Engineer",
  valueProps: [
    "Building scalable systems and intelligent applications.",
    "Specializing in Distributed Systems, RAG Pipelines, and Production ML.",
    "Creating data-driven products that scale, reason, and deliver impact.",
  ],
} as const;

export const education = [
  {
    institution: "University at Buffalo, NY",
    degree: "Masters in Artificial Intelligence",
    date: "Dec 2025",
    notes: "GPA 3.75 | Coursework: Distributed Systems, Algorithms, Database Systems, Big Data, Software Engineering",
  },
  {
    institution: "Silver Oak University, India",
    degree: "Bachelor of Engineering in Computer Engineering",
    date: "May 2024",
    notes: "CGPA 9.99/10 | Rank 1 | Gold Medalist",
  },
] as const;

export const experiences = [
  {
    company: "DTG",
    companyUrl: "https://dtg.com",
    role: "AI Engineering Intern",
    location: "Syracuse, NY",
    dateRange: "May 2025 — Oct 2025",
    bullets: [
      "Engineered a distributed caching layer for high-throughput pipelines that reduced inference costs by 55–60% while handling thousands of concurrent queries.",
      "Designed and deployed a scalable user personalization microservice using Neo4J graph database to build dynamic knowledge graphs from user signals.",
      "Architected an interoperable MCP server with Google ADK framework and A2A protocol, maintaining 99.9% uptime.",
      "Built a full observability pipeline with LangFuse and Grafana to monitor latency, token usage, and system health in real time.",
    ],
  },
  {
    company: "Human Behavior Modelling Lab, University at Buffalo",
    companyUrl: "https://buffalo.edu",
    role: "Research Assistant",
    location: "Buffalo, NY",
    dateRange: "Oct 2024 — Dec 2025",
    bullets: [
      "Implemented end-to-end training and inference pipelines for diffusion-based and VQ-VAE generative architectures for 3D agent assets.",
      "Fine-tuned autoregressive models to generate motion tokens and integrated a trained VQ-VAE model as a tokenizer.",
      "Conducted testing and validation with FID, Diversity, and MSE metrics to assess generation quality.",
    ],
  },
  {
    company: "Turabit LLC",
    companyUrl: "https://turabit.com",
    role: "Jr. Software Engineer",
    location: "Gujarat, India",
    dateRange: "Jan 2024 — Jul 2024",
    bullets: [
      "Designed and deployed a production-grade REST microservice, containerized with Docker and integrated into CI/CD pipelines.",
      "Optimized backend memory management, reducing cloud infrastructure costs by 40% while ensuring low-latency API responses.",
      "Built a modular workflow orchestration engine integrating Jira and ServiceNow.",
    ],
  },
  {
    company: "Turabit LLC",
    companyUrl: "https://turabit.com",
    role: "Jr. Software Engineer (Intern)",
    location: "Gujarat, India",
    dateRange: "Sept 2023 — Dec 2023",
    bullets: [
      "Architected a hybrid search system with PostgreSQL and dynamic metadata filtering, improving query accuracy by 60% and reducing lookup costs by 30%.",
      "Developed a robust web data ingestion microservice with API rate limiting and distributed task queues.",
      "Engineered backend pipelines using Elasticsearch with optimized indexing, achieving 20% reduction in retrieval latency.",
    ],
  },
] as const;

export const projects = [
  {
    id: "collegebot",
    title: "CollegeBot",
    subtitle: "Production RAG Pipeline",
    description:
      "Architected and deployed a full-stack production RAG system that scraped and processed 800+ university web pages, implementing hybrid retrieval (FAISS + BM25) with reranking to improve answer precision from 68% to 82%.",
    highlights: [
      "Added intelligent in-memory caching and API optimizations, reducing average response time from 6s to 3s.",
      "Owned end-to-end delivery from data ingestion to monitoring, resulting in ~40% reduction in manual support tickets.",
    ],
    tech: ["LangChain", "Zephyr-7B", "FAISS", "Flask"],
    link: null,
  },
  {
    id: "smart-library",
    title: "Smart Library Assistant",
    subtitle: "Full-Stack Mobile Backend",
    description:
      "Led backend development of a Django REST API with SQLite database, user authentication, and transaction logic for 500+ book records, ensuring reliable performance under multi-user load.",
    highlights: [
      "Built TF-IDF content-based recommendation engine and integrated natural language query understanding.",
      "Delivered full end-to-end system including voice features and deployment.",
    ],
    tech: ["Django", "Flutter", "Snips-NLU"],
    link: null,
  },
] as const;

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "C++", "C", "Java", "SQL", "TypeScript", "Go", "Rust"],
  },
  {
    name: "Backend & Distributed",
    skills: [
      "Docker",
      "Kubernetes",
      "Apache Kafka",
      "Microservices",
      "FastAPI",
      "Spring Boot",
      "Django",
      "Flask",
      "REST APIs",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Lambda", "DynamoDB", "S3", "EC2", "Linux", "Git", "CI/CD"],
  },
  {
    name: "Databases & Search",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Neo4J",
      "Elasticsearch",
      "Milvus",
      "FAISS",
    ],
  },
  {
    name: "AI & Observability",
    skills: ["LangFuse", "Grafana", "LangChain", "LangGraph"],
  },
] as const;
