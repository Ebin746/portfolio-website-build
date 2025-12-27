✨ Portfolio Website Build
[![Node.js](https://img.shields.io/badge/Node.js-22+-green?style=flat-square&logo=node.js)][nodejs]
[![Next.js](https://img.shields.io/badge/Next.js-^14.2.5-black?style=flat-square&logo=next.js)][nextjs]
[![TypeScript](https://img.shields.io/badge/TypeScript-^5-blue?style=flat-square&logo=typescript)][typescript]
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-^4.9-38B2AC?style=flat-square&logo=tailwind-css)][tailwind]
[![npm](https://img.shields.io/badge/npm-^10.5.2-cb0000.svg?style=flat-square&logo=npm)][npm]
[![Project Version](https://img.shields.io/badge/version-0.0.0-blue?style=flat-square)](package.json)

*A modern, interactive personal portfolio website designed to showcase projects, experience, and achievements.*

## Features

- ⚡ **Performance Optimized:** Built with Next.js for fast loading and server-side rendering capabilities.
- 🎨 **Dynamic UI Components:** Utilizes a comprehensive set of Shadcn/ui components for a consistent and adaptable user interface.
- 🚀 **Smooth Animations:** Integrates Framer Motion for elegant and engaging UI transitions and interactions.
- ⚙️ **Themed Presentation:** Supports theme switching to personalize the viewing experience.
- 👁️ **Custom Interactive Cursor:** Enhances user engagement with a custom-designed cursor.
- 📱 **Responsive Design:** Ensures optimal viewing and interaction across various devices and screen sizes.
- 🧩 **Modular Section Design:** Organizes content into distinct sections for easy navigation and content management.

## Tech Stack

| Category         | Technologies                                                                                |
|:-----------------|:--------------------------------------------------------------------------------------------|
| Framework        | Next.js [nextjs], React [react]                                                             |
| Language         | TypeScript [typescript]                                                                     |
| Styling          | Tailwind CSS [tailwind], PostCSS [postcss], CSS Modules                                   |
| UI Components    | Shadcn/ui, Radix UI [radixui], `class-variance-authority`                                   |
| Animation        | Framer Motion [framer]                                                                      |
| State Management | React Hooks [react]                                                                         |
| Form Management  | React Hook Form [react-hook-form], Zod [zod] (via `@hookform/resolvers`)                  |
| Utilities        | `date-fns` [date-fns], `next-themes` [next-themes], `tailwind-merge` [tailwind-merge]     |
| Development      | ESLint [eslint], Autoprefixer [autoprefixer]                                                |
| Data Fetching    | Custom data loader (`@/lib/data-loader`)                                                   |

## Quick Start

### Prerequisites

Ensure you have the following installed on your system:

-   Node.js: Version 22.x or higher.
-   npm: Version 10.x or higher (typically ships with Node.js).
-   Git

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/your-username/portfolio-website-build.git
    cd portfolio-website-build
    

2.  **Install dependencies:**
    bash
    npm install
    

## Development

### Scripts

The following scripts are available for development:

bash
npm run dev      # Starts the development server
npm run build    # Builds the application for production
npm run start    # Starts the production server (after building)
npm run lint     # Runs ESLint to check for code quality issues


> [!NOTE]
> Run `npm run dev` to start the local development server. The application will be accessible at `http://localhost:3000`.

## Deployment

This project is built using Next.js and is optimized for deployment on Vercel.

To deploy your instance:

1.  Create a new project on Vercel.
2.  Connect your Git repository.
3.  Vercel will automatically detect Next.js and configure the build process.

bash
# Recommended deployment platform
vercel deploy


[nodejs]: https://nodejs.org
[nextjs]: https://nextjs.org
[typescript]: https://www.typescriptlang.org
[tailwind]: https://tailwindcss.com
[npm]: https://www.npmjs.com
[react]: https://react.dev
[postcss]: https://postcss.org
[radixui]: https://www.radix-ui.com
[framer]: https://www.framer.com/motion
[react-hook-form]: https://react-hook-form.com
[zod]: https://zod.dev
[date-fns]: https://date-fns.org
[next-themes]: https://github.com/pacocoursey/next-themes
[tailwind-merge]: https://github.com/dcastil/tailwind-merge
[eslint]: https://eslint.org
[autoprefixer]: https://github.com/postcss/autoprefixer
