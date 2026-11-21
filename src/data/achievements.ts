import type { Achievement } from "../types/portfolio";

export const achievements: Achievement[] = [
  {
    id: "processing-performance",
    metric: "40%",
    label: "Faster analysis",
    context:
      "Reduction in end-to-end analysis time through asynchronous microscopic image-processing pipelines at Optoscopia.",
  },
  {
    id: "document-accuracy",
    metric: "+30%",
    label: "Field-level F1",
    context: "Improvement in legal-document extraction performance at Norma.",
  },
  {
    id: "auction-extraction",
    metric: ">87%",
    label: "Field-level accuracy",
    context:
      "Accuracy achieved by the LLM-based extraction workflow for unstructured auction content at VendueTech.",
  },
  {
    id: "students-trained",
    metric: "24+",
    label: "Students trained",
    context:
      "Students trained in Python, SQL, machine learning, and project-based development at GOMYCODE.",
  },
];
