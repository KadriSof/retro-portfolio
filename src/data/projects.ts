import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "gridpulse",
    name: "GridPulse",
    category: "independent",
    status: "ongoing",
    summary:
      "A data engineering platform for collecting, processing, and analyzing European electricity-market data.",
    problem:
      "Energy-market analysis requires reliable access to heterogeneous datasets, repeatable ingestion, data transformation, and structured storage.",
    contribution: [
      "Designed an Airflow-based producer/consumer pipeline architecture.",
      "Implemented ENTSO-E API extraction for electricity-market datasets.",
      "Built Bronze-layer ingestion with object storage and provenance-aware organization.",
      "Integrated Docker-based services, PostgreSQL, and SeaweedFS.",
      "Developed the foundation for downstream data transformation and analytical models.",
    ],
    technologies: [
      "Python",
      "Apache Airflow",
      "Docker",
      "PostgreSQL",
      "SeaweedFS",
      "ENTSO-E API",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/grid-pulse",
      },
    ],
    featured: true,
    context: "Independent data engineering project",
  },
  {
    id: "auditora",
    name: "Auditora",
    category: "independent",
    status: "published",
    summary:
      "A lightweight, non-invasive observability and evaluation framework for data pipelines and LLM-powered systems.",
    problem:
      "Monitoring complex processing workflows requires instrumentation that provides execution context without tightly coupling observability logic to application code.",
    contribution: [
      "Designed a lightweight instrumentation approach.",
      "Implemented context-local execution state.",
      "Addressed isolation across threads and asynchronous routines.",
      "Developed a framework intended to integrate with existing processing systems.",
    ],
    technologies: [
      "Python",
      "Observability",
      "Context-local storage",
      "Asynchronous programming",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/Auditora",
      },
    ],
    featured: true,
    context: "Independent open-source engineering project",
  },
  {
    id: "bashkuto",
    name: "Bashkuto",
    category: "independent",
    status: "published",
    summary:
      "A Python toolkit for turning Unix shell environments into structured runtimes for AI agents.",
    problem:
      "AI agents need controlled access to command-line environments, with predictable execution, output handling, and operational safeguards.",
    contribution: [
      "Developed a structured interface around Bash command execution.",
      "Designed execution safeguards and timeout handling.",
      "Implemented output management and command-pipeline support.",
      "Focused on making shell environments usable as agent execution runtimes.",
    ],
    technologies: [
      "Python",
      "Bash",
      "Linux",
      "AI agents",
      "Process management",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/BashkutoPackage",
      },
      {
        label: "PyPI package",
        url: "https://pypi.org/project/bashkuto/",
      },
    ],
    featured: true,
    context: "Independent open-source engineering project",
  },
  {
    id: "symbolic-memory-graph",
    name: "Symbolic-Memory Graph",
    category: "independent",
    status: "published",
    summary:
      "A C++ graph-based memory implementation for representing entities and relationships in agentic systems.",
    problem:
      "Agent memory requires structured representations of entities, typed relationships, and connections that can be traversed and serialized.",
    contribution: [
      "Implemented graph structures for entities and relationships.",
      "Added typed relationships and weighted edges.",
      "Developed graph traversal capabilities.",
      "Implemented JSON serialization.",
    ],
    technologies: ["C++", "Graph data structures", "JSON", "CMake"],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/symbolic-memory-graph",
      },
    ],
    featured: true,
    context: "Independent systems and AI engineering project",
  },
  {
    id: "ulamacodex",
    name: "UlamaCodex",
    category: "independent",
    status: "published",
    summary:
      "An Arabic knowledge platform that collects digital book content and provides retrieval-augmented conversational access through author-inspired personas.",
    problem:
      "Arabic literary and scholarly content is distributed across digital sources. Making these collections accessible requires content acquisition, processing, retrieval, and an appropriate conversational interface.",
    contribution: [
      "Developed a scraping workflow for collecting Arabic book content from Turath.io.",
      "Designed the foundation for a searchable Arabic text collection.",
      "Worked on a retrieval-augmented question-answering backend.",
      "Explored author-inspired conversational personas for interacting with the collected works.",
    ],
    technologies: [
      "Python",
      "Web scraping",
      "Arabic NLP",
      "LLMs",
      "Retrieval-Augmented Generation",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/UlamaCodex",
      },
    ],
    featured: true,
    context: "Independent non-profit knowledge-access project",
  },
  {
    id: "levelapp",
    name: "LevelApp",
    category: "professional-open-source",
    status: "published",
    summary:
      "A framework for evaluating LLM-based systems through configurable scenarios, simulated conversations, and evaluation metrics.",
    problem:
      "Evaluating LLM applications requires repeatable tests that assess outputs against expected behavior and support regression analysis.",
    contribution: [
      "Developed a configuration-driven evaluation workflow.",
      "Worked on simulated conversational scenarios.",
      "Integrated multiple output-comparison and evaluation approaches.",
      "Contributed to testing and evaluation of LLM-powered applications.",
    ],
    technologies: [
      "Python",
      "LLM evaluation",
      "Natural Language Processing",
      "Testing",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/level-app",
      },
      {
        label: "PyPI package",
        url: "https://pypi.org/project/levelapp/",
      },
    ],
    featured: true,
    context:
      "Open-source project developed in the context of professional work at Norma",
  },
  {
    id: "data-analysis",
    name: "Data Analysis Collection",
    category: "supporting",
    status: "published",
    summary:
      "A collection of exploratory data analysis and applied data science projects.",
    problem:
      "Practical datasets provide opportunities to investigate data quality, discover patterns, and build analytical models.",
    contribution: [
      "Performed exploratory data analysis on multiple datasets.",
      "Worked on loan prepayment analysis and classification.",
      "Analyzed medical appointment data.",
    ],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Data Analysis",
      "Machine Learning",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/KadriSof/Data-Analysis",
      },
    ],
    featured: false,
    context: "Supporting data science work",
  },
];
