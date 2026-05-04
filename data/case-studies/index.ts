import { aiCaseStudies } from "./ai";
import { dataCaseStudies } from "./data";
import { designCaseStudies } from "./design";

export { aiCaseStudies } from "./ai";
export { dataCaseStudies } from "./data";
export { designCaseStudies } from "./design";

export type CaseStudy = {
  id: string;
  title: string;
  thumbnailUrl: string;
  summary: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  toolsUsed?: string[];
  behanceUrl?: string;
  behanceViews?: number;
  behanceLikes?: number;
  images: {
    url: string;
    caption: string;
  }[];
};

export const allCaseStudies = {
  ai: aiCaseStudies,
  data: dataCaseStudies,
  design: designCaseStudies,
};
