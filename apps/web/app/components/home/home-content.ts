export interface PipelineStep {
  label: string;
  detail: string;
}

export interface FeaturedProjectData {
  eyebrow: string;
  title: string;
  summary: string;
  contribution: string;
  technologies: readonly string[];
  repositoryUrl: string;
  projectsHref: string;
  pipeline: readonly PipelineStep[];
}

export interface SupportingProjectData {
  category: string;
  title: string;
  summary: string;
  href: string;
}

export interface CapabilityData {
  index: string;
  title: string;
  description: string;
  evidence: string;
}

export const heroStack = [
  "TypeScript",
  "Node.js",
  "Docker",
  "Azure",
  "Terraform",
] as const;

export const featuredProject: FeaturedProjectData = {
  eyebrow: "Selected infrastructure project",
  title: "Cloud Portfolio IaC",
  summary:
    "A statically exported Next.js monorepo with an automated build and deployment path to Azure Static Web Apps.",
  contribution:
    "Built the portfolio as a Turborepo workspace, defined the Azure resource in Bicep, and wired GitHub Actions to build and publish the web application.",
  technologies: [
    "Next.js",
    "Turborepo",
    "GitHub Actions",
    "Azure Bicep",
    "Azure Static Web Apps",
  ],
  repositoryUrl: "https://github.com/naori11/personal-portfolio",
  projectsHref: "/projects",
  pipeline: [
    {
      label: "Push to main",
      detail: "GitHub Actions starts the portfolio delivery workflow.",
    },
    {
      label: "Build static export",
      detail: "pnpm builds the web workspace into apps/web/out.",
    },
    {
      label: "Deploy artifact",
      detail: "Azure Static Web Apps publishes the generated site.",
    },
  ],
};

export const supportingProjects: readonly SupportingProjectData[] = [
  {
    category: "Connected system",
    title: "KidSync: Smart RFID Security",
    summary:
      "An RFID verification system connecting ESP32 and RC522 hardware with a Flutter and Supabase application.",
    href: "/projects",
  },
  {
    category: "Backend application",
    title: "Coffeetory POS",
    summary:
      "A PHP and MySQL inventory system for product tracking and small-retail sales operations.",
    href: "/projects",
  },
];

export const capabilities: readonly CapabilityData[] = [
  {
    index: "01",
    title: "Infrastructure & delivery",
    description:
      "Automate repeatable builds, deployments, and cloud provisioning using containers, CI/CD pipelines, and Infrastructure as Code.",
    evidence:
      "This portfolio uses GitHub Actions, Azure Bicep, and Azure Static Web Apps as a working delivery example.",
  },
  {
    index: "02",
    title: "Cloud-native backend",
    description:
      "Build scalable application logic, database integrations, and robust APIs structured to run efficiently in cloud environments.",
    evidence:
      "Coffeetory connects inventory and sales workflows through a PHP and MySQL application.",
  },
  {
    index: "03",
    title: "Connected systems & telemetry",
    description:
      "Integrate physical hardware and telemetry with cloud applications, bridging real-world events and digital databases.",
    evidence:
      "KidSync combines ESP32 and RC522 hardware with a Flutter and Supabase application.",
  },
];
