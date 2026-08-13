# Portfolio Monorepo

A modern, high-performance portfolio monorepo built with a focus on scalability, maintainability, and automated delivery. This project leverages a Turborepo-managed monorepo architecture, deploying static web applications to Azure using Infrastructure as Code (IaC).

## 🚀 Tech Stack

- **Framework:** [Next.js (React)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Monorepo Management:** [Turborepo](https://turbo.build/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Infrastructure as Code (IaC):** [Azure Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hosting:** [Azure Static Web Apps (SWA)](https://azure.microsoft.com/en-us/products/app-service/static/)

---

## 📂 Project Structure

This monorepo uses a modular architecture to share configurations and UI components across multiple applications.

### Apps
- `apps/web`: The main portfolio website (Next.js with Static Export).

### Shared Packages
- `packages/ui`: A shared React component library powered by Tailwind CSS.
- `packages/tailwind-config`: Shared Tailwind and PostCSS configurations.
- `packages/typescript-config`: Centralized `tsconfig.json` definitions.
- `packages/eslint-config`: Shared linting rules (Next.js, React, Base).

### Infrastructure
- `infra/`: Contains Azure Bicep templates for automated resource provisioning.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or higher)
- [pnpm](https://pnpm.io/installation) (v10 or higher)

### Installation
```bash
pnpm install
```

### Development
Run all applications in development mode:
```bash
pnpm dev
```

### Build
Build all applications and packages:
```bash
pnpm build
```

---

## 🏗️ Infrastructure as Code (IaC)

The infrastructure is defined using **Azure Bicep** in the `infra/` directory.

### Resource: Azure Static Web App
The `infra/main.bicep` file provisions an **Azure Static Web App (SWA)** resource. It is configured with:
- **Location:** Defaulted to `eastasia` (configurable via parameters).
- **SKU:** Uses the `Free` tier by default.
- **Provider:** Integrated with `GitHub` for automated deployment tokens.

To deploy the infrastructure manually using the Azure CLI:
```bash
az deployment group create --resource-group <your-resource-group> --template-file infra/main.bicep
```

---

## 🔄 CI/CD Pipeline

The project implements a robust CI/CD workflow via **GitHub Actions** (`.github/workflows/ci.yml`).

### Workflow Steps
1. **Trigger:** Runs on every `push` or `pull_request` to the `main` branch.
2. **Environment Setup:** Configures Node.js (v20) and pnpm with dependency caching.
3. **Build:** Executes `pnpm build`, which triggers `turbo run build`. The `apps/web` application is configured for **Static Export (`output: 'export'`)**, generating a production-ready `out/` directory.
4. **Deploy:** Uses the `Azure/static-web-apps-deploy` action to upload the static assets to Azure.
   - **App Location:** `apps/web/out`
   - **Skip Build:** The action is configured to skip its internal build process (`skip_app_build: true`) and use the pre-built assets from the previous step for maximum consistency.

### Required Secrets
To enable the deployment, the following secret must be configured in the GitHub repository:
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: The deployment token retrieved from the Azure Portal after provisioning the Static Web App.

---

## 🧩 Utilities & Tooling
- **Prettier:** Code formatting with `prettier-plugin-tailwindcss` for class sorting.
- **ESLint:** Strict linting rules shared across the monorepo.
- **TypeScript:** End-to-end type safety.
