import type { EngineeringAttribute, SkillGroup } from "../types/portfolio";

export const engineeringAttributes: EngineeringAttribute[] = [
  {
    id: "software",
    label: "Software Engineering",
    score: 4,
    evidence: "Professional backend development and software systems",
  },
  {
    id: "data",
    label: "Data Engineering",
    score: 4,
    evidence:
      "Databricks, Spark, Delta Lake, and independent pipeline engineering",
  },
  {
    id: "ai",
    label: "Applied AI & ML",
    score: 4,
    evidence: "OCR/NLP, LLM agents, evaluation frameworks, and forecasting",
  },
  {
    id: "vision",
    label: "Computer Vision",
    score: 3,
    evidence: "Microscopic image processing and morphology analysis",
  },
  {
    id: "systems",
    label: "Systems & Instrumentation",
    score: 3,
    evidence:
      "Electronics engineering, PCB prototyping, and camera instrumentation",
  },
  {
    id: "research",
    label: "Research & Signal Processing",
    score: 3,
    evidence: "Engineering research, signal processing, and analytical methods",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Languages used for software, data, and systems development.",
    skills: [
      {
        name: "Python",
        level: "professional",
        evidence: "Backend systems, data pipelines, ML, and AI applications",
      },
      {
        name: "SQL",
        level: "professional",
        evidence:
          "Data processing, relational modeling, and database development",
      },
      {
        name: "C++",
        level: "independent",
        evidence: "Symbolic-Memory Graph implementation",
      },
      {
        name: "Bash",
        level: "professional",
        evidence: "Linux tooling and Bashkuto runtime development",
      },
      {
        name: "Java",
        level: "familiarity",
        evidence: "Programming experience",
      },
    ],
  },
  {
    id: "software",
    title: "Software Engineering",
    description:
      "Application development, APIs, architecture, and engineering tools.",
    skills: [
      {
        name: "FastAPI",
        level: "professional",
        evidence: "Backend and API development",
      },
      {
        name: "Flask",
        level: "professional",
        evidence: "Python application development",
      },
      {
        name: "Django",
        level: "familiarity",
        evidence: "Framework experience",
      },
      {
        name: "Spring",
        level: "familiarity",
        evidence: "Java framework experience",
      },
      {
        name: "Git",
        level: "professional",
        evidence:
          "Version control across professional and independent projects",
      },
      {
        name: "Linux",
        level: "independent",
        evidence: "Development environments, shell tooling, and systems work",
      },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description:
      "Distributed processing, orchestration, storage, and data platforms.",
    skills: [
      {
        name: "Apache Spark",
        level: "professional",
        evidence: "Distributed ETL pipelines at VendueTech",
      },
      {
        name: "Delta Lake",
        level: "professional",
        evidence: "Medallion data architecture at VendueTech",
      },
      {
        name: "Databricks",
        level: "professional",
        evidence: "ETL development and data processing",
      },
      {
        name: "Apache Airflow",
        level: "independent",
        evidence: "GridPulse orchestration and producer/consumer pipelines",
      },
      {
        name: "PostgreSQL",
        level: "independent",
        evidence: "GridPulse platform and relational data storage",
      },
      {
        name: "MySQL",
        level: "professional",
        evidence: "Optoscopia acquisition and processing database",
      },
      {
        name: "dbt",
        level: "familiarity",
        evidence: "Planned analytical transformation layer in GridPulse",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Machine learning, language models, intelligent agents, and evaluation.",
    skills: [
      {
        name: "OCR / NLP",
        level: "professional",
        evidence: "Legal-document processing at Norma",
      },
      {
        name: "LLM Applications",
        level: "professional",
        evidence:
          "Document automation, extraction, and conversational applications",
      },
      {
        name: "LangChain / LangGraph",
        level: "professional",
        evidence: "Stateful agent development at Norma",
      },
      {
        name: "LLM Evaluation",
        level: "professional",
        evidence: "Evaluation framework and regression testing",
      },
      {
        name: "Embeddings",
        level: "professional",
        evidence:
          "Semantic similarity evaluation and retrieval-oriented applications",
      },
      {
        name: "LlamaIndex",
        level: "familiarity",
        evidence: "Framework experience",
      },
      {
        name: "Google ADK",
        level: "professional",
        evidence: "Cloud platform used by Norma",
      },
      {
        name: "Classical ML",
        level: "professional",
        evidence: "Classification, forecasting, and feature analysis",
      },
    ],
  },
  {
    id: "vision",
    title: "Computer Vision & Signal Processing",
    description:
      "Image processing, scientific computing, and analytical methods.",
    skills: [
      {
        name: "Image Processing",
        level: "professional",
        evidence: "Microscopic image-processing pipelines at Optoscopia",
      },
      {
        name: "Camera Calibration",
        level: "professional",
        evidence:
          "Microscope camera configuration and acquisition instrumentation",
      },
      {
        name: "t-SNE / UMAP",
        level: "professional",
        evidence: "Feature-space analysis for sperm morphology classification",
      },
      {
        name: "Signal Processing",
        level: "research",
        evidence: "Electrical engineering education and research",
      },
      {
        name: "Electronics",
        level: "research",
        evidence:
          "PCB prototyping and piezoelectric signal conditioning at FEMTO-ST",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Tooling",
    description:
      "Containers, cloud platforms, monitoring, and development workflows.",
    skills: [
      {
        name: "Docker",
        level: "independent",
        evidence: "Containerized GridPulse development environment",
      },
      {
        name: "Azure",
        level: "professional",
        evidence: "Data engineering platform experience",
      },
      {
        name: "Google Cloud",
        level: "familiarity",
        evidence: "Cloud platform experience",
      },
      {
        name: "Prometheus",
        level: "familiarity",
        evidence: "Monitoring and observability tooling",
      },
      {
        name: "Jenkins",
        level: "familiarity",
        evidence: "CI/CD tooling experience",
      },
      {
        name: "Kubernetes",
        level: "familiarity",
        evidence: "Container orchestration experience",
      },
    ],
  },
];
