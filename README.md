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

---

## 📋 Command Reference Sheet

### Monorepo-Wide Commands

Run these commands from the root directory:

| Command | Action | Description |
| :--- | :--- | :--- |
| `pnpm dev` | **Start Dev Servers** | Runs all applications in dev mode (Next.js at `localhost:3001`). |
| `pnpm build` | **Build All** | Builds all apps and packages for production via Turborepo. |
| `pnpm check` | **Full Verification** | Runs type check, lint check, and formatting check across the entire repo. |
| `pnpm fix` | **Auto-Fix All** | Auto-formats code with Prettier and auto-fixes ESLint warnings across workspaces. |
| `pnpm check-types` | **Type Check** | Runs TypeScript compiler / Next.js typegen across all packages (`tsc --noEmit`). |
| `pnpm lint` | **Lint Check** | Runs ESLint across all packages with zero-warning threshold (`--max-warnings 0`). |
| `pnpm lint:fix` | **Fix Lint** | Auto-fixes fixable ESLint warnings across all packages. |
| `pnpm format` | **Format Code** | Formats all `.ts`, `.tsx`, `.md`, `.json`, and `.css` files using Prettier. |
| `pnpm format:check` | **Format Check** | Verifies Prettier code formatting without changing files (used in CI). |

### Workspace-Specific Commands

Target individual apps or packages using `--filter`:

#### Web Application (`apps/web`)
```bash
pnpm --filter web dev          # Start Next.js dev server on port 3001
pnpm --filter web build        # Build static export for deployment
pnpm --filter web check-types  # Run TypeScript type check
pnpm --filter web lint         # Run ESLint check
pnpm --filter web lint:fix     # Auto-fix ESLint issues
pnpm --filter web test         # Run unit tests with Vitest
```

#### Shared UI Library (`packages/ui`)
```bash
pnpm --filter @repo/ui check-types  # Type check UI package
pnpm --filter @repo/ui lint         # Lint UI components
pnpm --filter @repo/ui lint:fix     # Auto-fix UI lint issues
pnpm --filter @repo/ui build:styles # Compile Tailwind styles
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

## 🔄 CI/CD & Automated Workflows

The repository includes automated GitHub Actions workflows under `.github/workflows/`:

### 1. PR Verification (`.github/workflows/pr-checks.yml`)
- **Trigger:** Pull Requests targeting the `main` branch.
- **Tasks:**
  - `pnpm format:check` (Prettier)
  - `pnpm check-types` (TypeScript)
  - `pnpm lint` (ESLint with zero-warning tolerance)
- **Purpose:** Quality gate that blocks regressions before PR approval and merge.

### 2. Build & Deploy (`.github/workflows/ci.yml`)
- **Trigger:** Push or merged PR to the `main` branch.
- **Tasks:**
  1. Sets up Node.js 20 and pnpm with dependency cache.
  2. Runs `pnpm build --filter=web` with static HTML export (`apps/web/out`).
  3. Deploys static build to Azure Static Web Apps via `Azure/static-web-apps-deploy`.

### Required Secrets
To enable automated deployments, configure this secret in GitHub:
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Deployment token from the Azure Portal for the Static Web App.

---

## 🧩 Utilities & Tooling
- **Prettier:** Code formatting with `prettier-plugin-tailwindcss` for class sorting.
- **ESLint:** Strict linting rules shared across the monorepo.
- **TypeScript:** End-to-end type safety.
