export type ServiceFeature = {
  title: string;
  description: string;
  icon?: string; // Path to icon if needed
};

export type ServiceProcess = {
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
  }[];
};

export type ServiceTechnology = {
  name: string;
  description: string;
  icon?: string; // Path to icon if needed
};

export type ServiceBenefit = {
  title: string;
  description: string;
  icon?: string; // Path to icon if needed
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  parentService: string;
  title: string;
  description: string;
  headerImage: string;
  metaDescription: string;
  features: ServiceFeature[];
  process: ServiceProcess;
  technologies: ServiceTechnology[];
  benefits: ServiceBenefit[];
  faqs: FAQ[];
  relatedServices: string[]; // Slugs of related services
};

export type ServiceMap = {
  [key: string]: ServiceContent;
};