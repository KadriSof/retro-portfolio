import type { TimelineEntry } from "../types/portfolio";

export const timeline: TimelineEntry[] = [
  {
    id: "bsc-electrical-engineering",
    category: "education",
    title: "B.Sc. Electrical Engineering",
    organization:
      "National Engineering School of Carthage (ENICar), University of Carthage",
    location: "Tunisia",
    period: {
      start: "2011-09",
      end: "2014-06",
    },
    tracks: ["electrical-engineering", "research", "education"],
    description:
      "Undergraduate engineering education in electrical engineering at the National Engineering School of Carthage.",

    highlights: [
      "B.Sc. in Electrical Engineering",
      "Final result: 86.38% (ECTS)",
    ],
  },

  {
    id: "msc-electrical-engineering",
    category: "education",
    title: "Research M.Sc. Electrical Engineering",
    organization:
      "National Higher Engineering School of Tunis (ENSIT), University of Tunis",
    location: "Tunisia",
    period: {
      start: "2014-09",
      end: "2016-11",
    },
    tracks: ["electrical-engineering", "research", "education"],
    description:
      "Research-oriented graduate studies in electrical engineering, with a focus on signal processing and control engineering.",
    highlights: [
      "Research M.Sc. in Electrical Engineering",
      "Final result: 72.50% (ECTS)",
    ],
  },

  {
    id: "doctoral-studies",
    category: "research",
    title: "Doctoral Studies in Electrical Engineering",
    organization:
      "National Higher Engineering School of Tunis (ENSIT), University of Tunis",
    location: "Tunisia",
    period: {
      start: "2017-01",
      end: "2018-01",
    },
    tracks: ["research", "systems", "intelligence"],
    description:
      "Doctoral research in sleep-fragmentation analysis in the context of obstructive sleep apnea (OSA).",
    highlights: [
      "Research topic: sleep fragmentation analysis in OSA",
      "Doctoral studies discontinued due to financial constraints",
    ],
  },

  {
    id: "femto-st",
    category: "employment",
    title: "Electronics and Instrumentation Engineer",
    organization: "FEMTO-ST Institute",
    location: "France",
    period: {
      start: "2018-07",
      end: "2019-02",
    },
    tracks: ["systems", "research"],
    employmentType: "fixed-term",
    description:
      "Worked on electronics and instrumentation for sensor research and development.",
    highlights: [
      "Designed and assembled a PCB prototype for piezoelectric signal conditioning",
      "Used Altium Designer and micro-SMT soldering",
    ],
  },

  {
    id: "otcs",
    category: "employment",
    title: "Director of Community Programs",
    organization: "OTCS (NGO)",
    location: "Tunisia",
    period: {
      start: "2021-04",
      end: "2022-02",
    },
    tracks: ["community", "education"],
    employmentType: "fixed-term",
    description:
      "Led the TRACE community empowerment program, coordinating stakeholders and supporting local capacity development.",
    highlights: [
      "Coordinated stakeholders and monitored community projects",
      "Contributed to local capacity strengthening",
    ],
  },

  {
    id: "gomycode",
    category: "employment",
    title: "Data Science Instructor",
    organization: "GOMYCODE Tunisia",
    location: "Tunisia",
    period: {
      start: "2022-07",
      end: "2022-12",
    },
    tracks: ["education", "data", "intelligence", "software"],
    employmentType: "fixed-term",
    description:
      "Designed and delivered practical data science training, combining technical instruction with project-based learning.",
    highlights: [
      "Trained more than 24 students",
      "Covered Python, SQL, machine learning, and project-based development",
    ],
  },

  {
    id: "optoscopia",
    category: "employment",
    title: "Software Engineer",
    organization: "Optoscopia",
    location: "Tunisia (Hybrid)",
    period: {
      start: "2023-01",
      end: "2024-01",
    },
    tracks: ["software", "vision", "intelligence", "systems"],
    employmentType: "fixed-term",
    description:
      "Developed software and image-processing systems for a computer-assisted sperm analysis (CASA) application.",
    highlights: [
      "Designed asynchronous microscopic-image processing pipelines",
      "Reduced end-to-end analysis time by 40%",
      "Developed four backend modules",
      "Designed the MySQL schema for acquisition, processing, reporting, and experiment traceability",
      "Used t-SNE and UMAP to investigate feature-space separability and class-imbalance effects in sperm morphology classification",
    ],
  },

  {
    id: "vendeuetech",
    category: "employment",
    title: "Data Science Consultant",
    organization: "VendueTech",
    location: "Croatia (Remote)",
    period: {
      start: "2024-06",
      end: "2025-06",
    },
    tracks: ["data", "software", "intelligence"],
    employmentType: "independent-consulting",
    description:
      "Designed data-processing and analytical solutions for real-estate datasets, combining distributed data engineering, unstructured-data extraction, and business analytics.",
    highlights: [
      "Implemented Databricks ETL pipelines using Apache Spark and Delta Lake",
      "Applied Medallion Architecture to real-estate data processing",
      "Developed pipeline-monitoring dashboards for latency, failures, throughput, and data quality",
      "Built LLM-based extraction of unstructured auction content with over 87% field-level accuracy",
      "Produced reports on pricing trends, auction volumes, and regional demand",
    ],
  },

  {
    id: "norma",
    category: "employment",
    title: "AI/ML Software Engineer",
    organization: "Norma",
    location: "France (Remote)",
    period: {
      start: "2024-09",
      end: "2026-05",
    },
    tracks: ["software", "data", "intelligence"],
    employmentType: "permanent",
    description:
      "Developed AI-enabled software and data-processing workflows for legal-document automation and enterprise resource planning.",
    highlights: [
      "Designed an OCR/NLP legal-document pipeline, improving field-level F1 by 30%",
      "Built a stateful LangGraph agent with tool use and multi-step reasoning",
      "Developed an LLM evaluation framework using exact-match, fuzzy-match, and embedding-similarity metrics",
      "Integrated sales and purchasing forecasting into an ERP system",
    ],
  },
];
