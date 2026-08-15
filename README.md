# Portfolio Monorepo

A modern, high-performance portfolio monorepo built with a focus on scalability, maintainability, and automated delivery. This project leverages a Turborepo-managed monorepo architecture, deploying static web applications to Azure using Infrastructure as Code (IaC).

## 🚀 Tech Stack

- **Framework:** [Next.js (React)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Serverless Backend:** [Azure Functions (Node.js v4 model)](https://learn.microsoft.com/en-us/azure/azure-functions/)
- **Email Service:** [Resend SDK](https://resend.com/)
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
- `apps/api`: Azure Functions serverless backend (Node.js v4 model) for contact form processing and email delivery via Resend.

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

- [Node.js](https://nodejs.org/) (v22 or higher)
- [pnpm](https://pnpm.io/installation) (v10 or higher)

### Installation

```bash
pnpm install
```

---

## 📋 Command Reference Sheet

### Monorepo-Wide Commands

Run these commands from the root directory:

| Command             | Action                | Description                                                                       |
| :------------------ | :-------------------- | :-------------------------------------------------------------------------------- |
| `pnpm dev`          | **Start Dev Servers** | Runs all applications in dev mode (Next.js at `localhost:3001`).                  |
| `pnpm build`        | **Build All**         | Builds all apps and packages for production via Turborepo.                        |
| `pnpm test`         | **Run Unit Tests**    | Executes unit test suites across workspaces using Vitest.                         |
| `pnpm check`        | **Full Verification** | Runs type check, lint check, format check, and tests across the repo.             |
| `pnpm fix`          | **Auto-Fix All**      | Auto-formats code with Prettier and auto-fixes ESLint warnings across workspaces. |
| `pnpm check-types`  | **Type Check**        | Runs TypeScript compiler / Next.js typegen across all packages (`tsc --noEmit`).  |
| `pnpm lint`         | **Lint Check**        | Runs ESLint across all packages with zero-warning threshold (`--max-warnings 0`). |
| `pnpm lint:fix`     | **Fix Lint**          | Auto-fixes fixable ESLint warnings across all packages.                           |
| `pnpm format`       | **Format Code**       | Formats all `.ts`, `.tsx`, `.md`, `.json`, and `.css` files using Prettier.       |
| `pnpm format:check` | **Format Check**      | Verifies Prettier code formatting without changing files (used in CI).            |

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

#### Serverless Backend API (`apps/api`)

```bash
pnpm --filter @repo/api start  # Run Azure Functions locally (via Azure Functions Core Tools)
```

#### Shared UI Library (`packages/ui`)

```bash
pnpm --filter @repo/ui check-types  # Type check UI package
pnpm --filter @repo/ui lint         # Lint UI components
pnpm --filter @repo/ui lint:fix     # Auto-fix UI lint issues
pnpm --filter @repo/ui build:styles # Compile Tailwind styles
```

---

## 🧪 Testing & Quality Assurance

This repository uses [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for fast, isolated unit testing.

### Testing Philosophy

Rather than writing brittle snapshot tests for purely static presentation, the test suite focuses on **high-ROI business logic, state machines, and interactive components**:

- **Deterministic Logic:** Pure utility functions (badge color resolution, theme contrast, data integrity).
- **Interactive UI Lifecycle:** Modal state toggling, keyboard accessibility (`Escape` listeners), PDF zoom handling, and mobile menu transitions.
- **Form Handling & Resiliency:** Contact form field validation, API payload serialization, error states, and network fault handling.

### Test Suites Overview

| Test File                                                                   | Target Module                                  | Description & Scope                                                                               |
| :-------------------------------------------------------------------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| [`tech-badges.test.ts`](apps/web/lib/tech-badges.test.ts)                   | `apps/web/lib/tech-badges.ts`                  | Validates badge styling for light & dark modes and ensures unknown technologies fall back safely. |
| [`page.test.tsx`](apps/web/app/contact/page.test.tsx)                       | `apps/web/app/contact/page.tsx`                | Tests contact form validation, API submission, success state transitions, and error handling.     |
| [`Navbar.test.tsx`](apps/web/components/Navbar.test.tsx)                    | `apps/web/components/Navbar.tsx`               | Verifies desktop routing links, mobile drawer toggling, and light/dark theme switcher state.      |
| [`ResumeModal.test.tsx`](apps/web/app/components/home/ResumeModal.test.tsx) | `apps/web/app/components/home/ResumeModal.tsx` | Verifies modal accessibility, dialog rendering, zoom controls, and keyboard `Escape` closing.     |
| [`PDFViewer.test.tsx`](apps/web/app/components/PDFViewer.test.tsx)          | `apps/web/app/components/PDFViewer.tsx`        | Validates PDF rendering initialization and fallback error handling.                               |
| [`home-content.test.ts`](apps/web/app/components/home/home-content.test.ts) | `apps/web/app/components/home/home-content.ts` | Asserts structural integrity and schema conformity of featured projects and career data.          |

### Running Tests

```bash
# Run all unit tests across the monorepo
pnpm test

# Run tests in watch mode during development
pnpm --filter web test --watch

# Run a specific test suite
pnpm --filter web test apps/web/lib/tech-badges.test.ts
```

---

## ⚡ Serverless Backend Architecture

The backend email delivery service is built as a zero-cost **Azure Managed Function** inside `apps/api`:

- **Runtime & Model:** Node.js (v20+) using the Azure Functions **v4 programming model**.
- **Email Service:** [Resend](https://resend.com/) for transactional email handling.
- **Routing & Proxy:** Integrated directly with Azure Static Web Apps. The frontend calls the relative path `/api/contact`, and Azure SWA automatically proxies the request to the Managed Function without custom CORS configuration.
- **Zero Idle Cost:** Serverless execution that scales to zero when not handling requests.

### Local Development

Local settings and environment variables can be placed in `apps/api/local.settings.json`:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsFeatureFlags": "EnableWorkerIndexing",
    "RESEND_API_KEY": "your_resend_api_key"
  }
}
```

Run locally:

```bash
pnpm --filter @repo/api start
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
  - `pnpm test` (Vitest unit test suites)
- **Purpose:** Quality gate that blocks regressions before PR approval and merge.

### 2. Build & Deploy (`.github/workflows/ci.yml`)

- **Trigger:** Push or merged PR to the `main` branch.
- **Tasks:**
  1. Sets up Node.js 22 and pnpm with dependency cache.
  2. Runs `pnpm build --filter=web` with static HTML export (`apps/web/out`).
  3. Deploys frontend static build (`app_location: apps/web/out`) and Azure Functions backend (`api_location: apps/api`) simultaneously via `Azure/static-web-apps-deploy`.

### Environment Variables & Secrets

Configure the following:

- **GitHub Repository Secret:**
  - `AZURE_STATIC_WEB_APPS_API_TOKEN`: Deployment token from the Azure Portal for the Static Web App.
- **Azure Portal Application Setting (under Static Web App -> Environment variables):**
  - `RESEND_API_KEY`: Your Resend API secret key for email dispatch.

---

## 🧩 Utilities & Tooling

- **Prettier:** Code formatting with `prettier-plugin-tailwindcss` for class sorting.
- **ESLint:** Strict linting rules shared across the monorepo.
- **TypeScript:** End-to-end type safety.
