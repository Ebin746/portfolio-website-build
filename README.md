✨ Portfolio Website Build

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?style=flat&logo=node.js)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm-10.x-blue?style=flat&logo=npm)](https://www.npmjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-lightgray?style=flat&logo=vercel)](https://vercel.com/)

_A modern, responsive, and interactive personal portfolio website designed to showcase projects, experience, and achievements._


## Features


🔧 **Core Functionality**
- Modular section architecture for easy content management (Hero, About, Experience, Projects, Tech Stack, Achievements, Contact).
- Interactive navigation bar with smooth scrolling to sections.
- Dynamic content rendering for portfolio data (personal info, experience, projects, etc.).

🎨 **User Interface & Experience**
- Responsive design ensuring optimal viewing across various devices (desktop, tablet, mobile).
- Custom animated cursor for enhanced visual engagement.
- Theme switching capability (Light/Dark mode) for personalized viewing.

⚡ **Performance & Animations**
- Smooth, performant animations and transitions powered by Framer Motion.
- Optimized image loading with Next.js Image component.

⚙️ **Development & Styling**
- Utilizes Shadcn/ui-inspired components built on Radix UI primitives.
- Comprehensive styling with Tailwind CSS for rapid and consistent UI development.
- TypeScript for robust type-safety and improved developer experience.


## Tech Stack


| Category     | Technologies                                                                                   |
|:-------------|:-----------------------------------------------------------------------------------------------|
| Frontend     | [React][react-url], [Next.js][nextjs-url], [TypeScript][typescript-url], [Framer Motion][framer-motion-url], [Radix UI][radix-ui-url], [next-themes][next-themes-url], [react-hook-form][react-hook-form-url] |
| Styling      | [Tailwind CSS][tailwindcss-url], [PostCSS][postcss-url]                                      |
| Icons        | [React Icons][react-icons-url]                                                                 |
| Deployment   | [Vercel][vercel-url]                                                                           |
| Tools        | [ESLint][eslint-url], [Prettier][prettier-url]                                                 |


## Quick Start

This section outlines the steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following software installed:
- [Node.js][nodejs-url] (v20.x or higher)
- [npm][npm-url] (v10.x or higher) or [Yarn][yarn-url] (v1.22.x or higher)
- Git

### Installation

Clone the repository and install dependencies:

bash
# Clone the repository
git clone https://github.com/your-username/portfolio-website-build.git

# Navigate into the project directory
cd portfolio-website-build

# Install dependencies using npm
npm install
# Or using yarn
# yarn install


### Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root directory and populate it as follows.

env
# Port for the development server
PORT=3000

# Example: If your data-loader fetches from an external API, define its URL here.
# NEXT_PUBLIC_API_BASE_URL=https://api.example.com


> [!NOTE]
> Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Avoid placing sensitive information in these variables.


## Development


### Commands

Execute the following commands from the project root directory:

bash
# Start the development server (http://localhost:3000 by default)
npm run dev
# Or using yarn
# yarn dev

# Create a production-ready build
npm run build
# Or using yarn
# yarn build

# Start the production build locally
npm run start
# Or using yarn
# yarn start

# Run ESLint to check for code quality issues
npm run lint
# Or using yarn
# yarn lint


### Testing

This project does not currently include an explicit testing framework configuration (e.g., Jest, React Testing Library, Playwright). For a comprehensive application, it is recommended to implement:
- **Unit Tests**: To verify individual components and utility functions.
- **Integration Tests**: To ensure different parts of the application work together correctly.
- **End-to-End (E2E) Tests**: To simulate user flows and validate the entire application experience.


## Deployment

This Next.js project is ideally suited for deployment on [Vercel][vercel-url], the creators of Next.js, offering a streamlined deployment experience.

1.  **Create a Vercel Account**: If you don't have one, sign up at [vercel.com][vercel-url].
2.  **Connect GitHub**: Link your GitHub account to Vercel.
3.  **Import Project**: From the Vercel dashboard, click "Add New..." -> "Project" and select your `portfolio-website-build` repository.
4.  **Configure**: Vercel will automatically detect that it's a Next.js project. You can review the build and output settings, and add any environment variables defined in your `.env.local` file (e.g., `NEXT_PUBLIC_API_BASE_URL`) within the Vercel project settings.
5.  **Deploy**: Click "Deploy". Vercel will build and deploy your application. Subsequent pushes to your connected Git branch will trigger automatic re-deployments.


## Contributing

Contributions are welcome! If you'd like to contribute, please follow these guidelines:

1.  **Fork the Repository**: Fork this repository to your own GitHub account.
2.  **Clone Your Fork**: Clone your forked repository to your local machine.
    bash
    git clone https://github.com/your-username/portfolio-website-build.git
    
3.  **Create a New Branch**: Create a new branch for your feature or bugfix.
    bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b bugfix/issue-description
    
4.  **Implement Changes**: Make your changes, ensuring they adhere to the project's code style and conventions.
5.  **Commit Your Changes**: Write clear, concise commit messages.
    - Use a conventional commit style (e.g., `feat: Add new project section`, `fix: Resolve responsive layout issue`, `chore: Update dependencies`).
6.  **Push to Your Fork**: Push your branch to your forked repository.
    bash
    git push origin feature/your-feature-name
    
7.  **Open a Pull Request**: Open a pull request from your branch to the `main` branch of the original repository. Provide a descriptive title and detailed explanation of your changes.


[react-url]: https://react.dev/
[nextjs-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[framer-motion-url]: https://www.framer.com/motion/
[radix-ui-url]: https://www.radix-ui.com/
[next-themes-url]: https://github.com/pacocoursey/next-themes
[react-hook-form-url]: https://react-hook-form.com/
[tailwindcss-url]: https://tailwindcss.com/
[postcss-url]: https://postcss.org/
[react-icons-url]: https://react-icons.github.io/react-icons/
[vercel-url]: https://vercel.com/
[eslint-url]: https://eslint.org/
[prettier-url]: https://prettier.io/
[nodejs-url]: https://nodejs.org/
[npm-url]: https://www.npmjs.com/
[yarn-url]: https://yarnpkg.com/
