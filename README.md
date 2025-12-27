
# 🌐 Personal Portfolio Website

[![Project Version](https://img.shields.io/badge/version-0.0-blue.svg)][project-version]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)][license-url]
[![Build Status](https://github.com/your-username/your-repo/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/your-repo/actions/workflows/ci.yml)
[![Lint Status](https://img.shields.io/badge/lint-passed-brightgreen.svg)][lint-status]

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS, designed to showcase projects, experience, and achievements with a smooth user experience.

## ## Features

*   **⚡️ Performance Optimized**: Leveraging Next.js for fast page loads and optimized asset delivery.
*   **🎨 Dynamic UI/UX**: Interactive design elements including a custom cursor and smooth animations powered by [Framer Motion][framer-motion-url].
*   **💡 Theme Switching**: Seamless light/dark mode functionality for an adaptable viewing experience.
*   **📱 Responsive Layout**: Fully responsive design ensures optimal viewing across various devices and screen sizes.
*   **🧩 Modular Components**: Built with reusable [Radix UI][radix-ui-url] primitives and a comprehensive UI component library.
*   **🚀 Vercel Analytics Integration**: Integrated with [Vercel Analytics][vercel-analytics-url] for insightful performance and traffic monitoring.
*   **📝 Comprehensive Portfolio Sections**: Dedicated sections for Hero, About, Experience, Tech Stack, Projects, Achievements, and Contact information.

## ## Tech Stack

This project is built using a modern web development stack focused on performance, developer experience, and scalability.

| Category        | Technologies                                                                                                              |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Framework**   | [Next.js][nextjs-url] (React Framework for Production)                                                                    |
| **Frontend**    | [React][react-url] (UI Library), [TypeScript][typescript-url] (Typed JavaScript), [Framer Motion][framer-motion-url] (Animations) |
| **Styling**     | [Tailwind CSS][tailwind-css-url] (Utility-first CSS), [PostCSS][postcss-url] (CSS Post-processor), [Radix UI][radix-ui-url] (UI Primitives) |
| **UI Utilities**| [class-variance-authority][cva-url], [tailwind-merge][tailwind-merge-url], [tailwindcss-animate][tailwindcss-animate-url]      |
| **Forms**       | [React Hook Form][react-hook-form-url], [@hookform/resolvers][hookform-resolvers-url]                                      |
| **Date & Time** | [date-fns][date-fns-url], [React DayPicker][react-daypicker-url]                                                          |
| **Icons**       | [Lucide React][lucide-react-url], [React Icons (Fi, Si)][react-icons-url]                                                 |
| **Dev Tools**   | [ESLint][eslint-url] (Code Linting), [Autoprefixer][autoprefixer-url] (CSS Prefixing)                                     |
| **Deployment**  | [Vercel Analytics][vercel-analytics-url]                                                                                    |
| **Themeing**    | [next-themes][next-themes-url]                                                                                            |

## ## Quick Start

Follow these steps to get the development environment set up and running on your local machine.

### ### Prerequisites

Ensure you have the following software installed:

*   **Node.js**: `^18.x` or `^20.x` (LTS versions recommended)
*   **npm**: `^9.x` or `^10.x` (comes with Node.js) or **Yarn**: `^1.x`

> [!NOTE]
> This project does not require a separate database server (e.g., MongoDB, PostgreSQL) as portfolio data is loaded via a local data-loader.

### ### Installation

Clone the repository and install the dependencies:

bash
# Clone the repository
git clone https://github.com/your-username/portfolio-website-build.git

# Navigate into the project directory
cd portfolio-website-build

# Install dependencies using npm
npm install

# Or using yarn
# yarn install


### ### Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root of the project:

env
# Optional: Port for the development server
PORT=3000


> [!NOTE]
> No sensitive API keys or database URIs are required for basic functionality, as data is loaded locally.

## ## Development

### ### Commands

Run the following commands during development:

| Command        | Description                                     |
| :------------- | :---------------------------------------------- |
| `npm run dev`  | Starts the development server with hot-reloading |
| `npm run build`| Creates a production-ready build of the application |
| `npm run start`| Starts the Next.js production server (after `npm run build`) |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start the production server (after building)
npm run start

# Run linting checks
npm run lint


### ### Testing

The project structure does not explicitly include a testing framework (e.g., Jest, React Testing Library, Cypress). As such, a formal testing strategy is not currently outlined in the provided files. Unit and integration tests can be implemented using standard Next.js/React testing practices.

## ## API Reference

This project is primarily a static/server-rendered frontend portfolio. It does not expose a public API or integrate with an external backend server that provides a RESTful interface based on the provided `package.json` and file structure. Data for the portfolio sections is loaded internally via `@/lib/data-loader`.

## ## Deployment

This Next.js project is well-suited for deployment on platforms that support Node.js applications or static site generation.

### ### Dockerfile

For containerized deployment, you can use the following `Dockerfile`:

dockerfile
# Use a lightweight Node.js image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS dependencies
COPY package.json yarn.lock* package-lock.json* ./
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "No lock file found, running npm install" && npm install; \
  fi

# Build the Next.js application
FROM base AS build
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
# Optimize for Next.js, not all packages are needed
RUN npm install next@latest react@latest react-dom@latest

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]


### ### Platform Guides

*   **Vercel**: Given the use of `@vercel/analytics`, Vercel is the recommended deployment platform. Simply link your GitHub repository to [Vercel][vercel-url], and it will automatically detect and deploy your Next.js application.
*   **Netlify**: Similar to Vercel, [Netlify][netlify-url] offers seamless deployment for Next.js projects. Link your repository, and Netlify will handle the build and deployment process.
*   **Other Platforms**: For platforms like Heroku, AWS Amplify, or Google Cloud Run, you might need to configure build commands and environment variables manually.

## ## Contributing

Contributions are welcome! Please follow these guidelines to ensure a smooth contribution process.

### ### Branch Naming

Use clear and descriptive branch names following this convention:

*   `feat/<feature-name>`: For new features.
*   `bugfix/<issue-description>`: For bug fixes.
*   `chore/<task-description>`: For maintenance tasks, build process changes, etc.
*   `docs/<doc-update-description>`: For documentation updates.

### ### Commit Message Standards

Please adhere to [Conventional Commits][conventional-commits-url] for commit messages. This helps in generating changelogs and understanding the history.

**Example:**

feat: add dark mode toggle


fix: prevent custom cursor from appearing on touch devices


### ### Pull Request (PR) Template

When submitting a pull request, please ensure it includes:

1.  **A clear title**: Summarizing the changes.
2.  **Description**: Explaining the problem solved or feature added.
3.  **Related issues**: Link to any relevant GitHub issues.
4.  **Screenshots/Gifs**: For visual changes, if applicable.
5.  **Testing notes**: Instructions on how to test your changes.

---

[project-version]: https://github.com/your-username/your-repo
[license-url]: https://github.com/your-username/your-repo/blob/main/LICENSE
[lint-status]: https://github.com/your-username/your-repo/actions/workflows/lint.yml

[nextjs-url]: https://nextjs.org/docs
[react-url]: https://react.dev/
[typescript-url]: https://www.typescriptlang.org/docs/
[framer-motion-url]: https://www.framer.com/motion/
[tailwind-css-url]: https://tailwindcss.com/docs
[postcss-url]: https://postcss.org/
[radix-ui-url]: https://www.radix-ui.com/docs/primitives
[cva-url]: https://www.npmjs.com/package/class-variance-authority
[tailwind-merge-url]: https://www.npmjs.com/package/tailwind-merge
[tailwindcss-animate-url]: https://www.npmjs.com/package/tailwindcss-animate
[react-hook-form-url]: https://react-hook-form.com/
[hookform-resolvers-url]: https://www.npmjs.com/package/@hookform/resolvers
[date-fns-url]: https://date-fns.org/
[react-daypicker-url]: https://react-day-picker.js.org/
[lucide-react-url]: https://lucide.dev/
[react-icons-url]: https://react-icons.github.io/react-icons/
[eslint-url]: https://eslint.org/docs/latest/
[autoprefixer-url]: https://github.com/postcss/autoprefixer
[vercel-analytics-url]: https://vercel.com/docs/analytics
[next-themes-url]: https://github.com/pacocoursey/next-themes

[vercel-url]: https://vercel.com/
[netlify-url]: https://www.netlify.com/
[conventional-commits-url]: https://www.conventionalcommits.org/en/v1.0.0/
