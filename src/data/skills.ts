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
    label: "Electronics & Instrumentation",
    score: 2,
    evidence:
      "Electronics engineering, PCB prototyping, signal processing, and camera instrumentation",
  },
  {
    id: "research",
    label: "Research & Development",
    score: 3,
    evidence:
      "Engineering research, experimental design, statistical modeling, and analytical methods",
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
        level: "expert",
        evidence: "Backend systems, data pipelines, ML, and AI applications",
      },
      {
        name: "SQL",
        level: "intermediate",
        evidence:
          "Data processing, relational modeling, and database development",
      },
      {
        name: "C++",
        level: "intermediate",
        evidence: "Symbolic-Memory Graph implementation",
      },
      {
        name: "Bash",
        level: "intermediate",
        evidence: "Linux tooling and Bashkuto runtime development",
      },
      {
        name: "Java",
        level: "intermediate",
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
        level: "advanced",
        evidence: "[Professional:Norma] Backend and API development",
      },
      {
        name: "Flask",
        level: "advanced",
        evidence: "[Professional:Norma] Python application development",
      },
      {
        name: "Django",
        level: "advanced",
        evidence: "[Professional:Norma] Framework experience",
      },
      {
        name: "Spring",
        level: "intermediate",
        evidence: "[Project:DocFlow] Java framework experience",
      },
      {
        name: "Git",
        level: "advanced",
        evidence:
          "Version control across professional and independent projects",
      },
      {
        name: "Linux",
        level: "advanced",
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
        level: "advanced",
        evidence: "[Professional:VendueTech] Distributed ETL pipelines",
      },
      {
        name: "Delta Lake",
        level: "advanced",
        evidence: "[Professional:VendueTech] Medallion data architecture",
      },
      {
        name: "Databricks",
        level: "advanced",
        evidence:
          "[Professional:VendueTech] ETL development and data processing",
      },
      {
        name: "Apache Airflow",
        level: "intermediate",
        evidence:
          "[Project:GridPulse] orchestration and producer/consumer pipelines",
      },
      {
        name: "PostgreSQL",
        level: "intermediate",
        evidence:
          "[Project:GridPulse] GridPulse platform and relational data storage",
      },
      {
        name: "MySQL",
        level: "advanced",
        evidence:
          "[Professional:Optoscopia] acquisition and processing database",
      },
      {
        name: "dbt",
        level: "intermediate",
        evidence: "[Project:GridPulse] Planned analytical transformation layer",
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
        level: "advanced",
        evidence: "[Professional:Norma] Legal documents processing",
      },
      {
        name: "LLM Applications",
        level: "expert",
        evidence:
          "[Professional:Norma] Document automation, extraction, and conversational applications",
      },
      {
        name: "LangChain / LangGraph",
        level: "advanced",
        evidence: "[Professional:Norma] Stateful agent development",
      },
      {
        name: "LLM Evaluation",
        level: "expert",
        evidence:
          "[Professional:Norma] Evaluation framework and regression testing",
      },
      {
        name: "Embeddings",
        level: "advanced",
        evidence:
          "[Professional:Norma] Semantic similarity evaluation and retrieval-oriented applications",
      },
      {
        name: "LlamaIndex",
        level: "intermediate",
        evidence: "Framework experience",
      },
      {
        name: "Google ADK",
        level: "intermediate",
        evidence: "Framework experience",
      },
      {
        name: "Classical ML",
        level: "advanced",
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
        level: "advanced",
        evidence:
          "[Professional:Optoscopia] Microscopic image-processing pipelines",
      },
      {
        name: "Camera Calibration",
        level: "advanced",
        evidence:
          "[Professional:Optoscopia] Microscope camera configuration and acquisition instrumentation",
      },
      {
        name: "t-SNE / UMAP",
        level: "intermediate",
        evidence:
          "[Professional:Optoscopia] Feature-space analysis for sperm morphology classification",
      },
      {
        name: "Signal Processing",
        level: "intermediate",
        evidence:
          "Professional experience at FEMTO-ST and electrical engineering education and research",
      },
      {
        name: "Electronics",
        level: "intermediate",
        evidence:
          "[Professional:FEMTO-ST]PCB prototyping and piezoelectric signal conditioning",
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
        level: "intermediate",
        evidence:
          "[Project:GridPulse] Containerized GridPulse development environment",
      },
      {
        name: "Azure",
        level: "intermediate",
        evidence:
          "[Professional:VendueTech] Data engineering platform experience",
      },
      {
        name: "Google Cloud",
        level: "intermediate",
        evidence: "[Professional:Norma] Cloud platform experience",
      },
      {
        name: "Prometheus",
        level: "novice",
        evidence: "[Project:Auditora] Monitoring and observability tooling",
      },
      {
        name: "Jenkins",
        level: "novice",
        evidence: "[Project:DocFlow] CI/CD tooling experience",
      },
      {
        name: "Kubernetes",
        level: "novice",
        evidence: "Container orchestration experience",
      },
    ],
  },
];
