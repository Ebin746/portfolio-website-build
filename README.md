💼 Portfolio Website
![Version](https://img.shields.io/badge/version-0.0-blue.svg)

A modern, responsive portfolio website showcasing personal projects, experience, tech stack, and achievements.

## Overview

This project is a personal portfolio website designed to present a developer's or designer's professional profile. It provides a dynamic and visually appealing platform to highlight skills, projects, and work experience. The site aims to serve as a comprehensive online resume, enabling potential employers or collaborators to quickly understand the individual's capabilities and contact them.

## Features

-   **Interactive Hero Section**: Engaging introduction with personal branding.
-   **Dynamic Experience Timeline**: Visualize professional history with detailed roles and contributions.
-   **Project Showcase**: Dedicated section to display featured projects with descriptions, tech used, and links.
-   **Comprehensive Tech Stack Display**: Animate and categorize the technologies mastered by the individual.
-   **Achievements & Awards**: Highlight key accomplishments and recognitions.
-   **Smooth Custom Cursor**: Enhances user experience with a personalized, interactive cursor.
-   **Responsive Navigation & Theming**: Seamless experience across devices with adaptive design and dark mode support.

## Tech Stack

| Category   | Technologies                                                                                                                                                                                                                                                                                                                                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org), [React](https://react.dev)                                                                                                                                                                                                                                                                                     |
| Language   | [TypeScript](https://www.typescriptlang.org)                                                                                                                                                                                                                                                                                                 |
| Styling    | [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com)                                                                                                                                                                                                                                                                |
| Animation  | [Framer Motion](https://www.framer.com/motion/)                                                                                                                                                                                                                                                                                              |
| Utilities  | [React Icons](https://react-icons.github.io/react-icons/), [Next-Themes](https://github.com/pacocoursey/next-themes), [React Hook Form](https://react-hook-form.com/), [Vercel Analytics](https://vercel.com/docs/concepts/analytics/quickstart)                                                                                                |
| Tooling    | [ESLint](https://eslint.org), [PostCSS](https://postcss.org), [Autoprefixer](https://github.com/postcss/autoprefixer), [class-variance-authority](https://www.npmjs.com/package/class-variance-authority), [tailwind-merge](https://github.com/dcastil/tailwind-merge)                                                                     |

## Project Structure


.
├── app/                  # Next.js App Router routes and global styles
├── components/           # Reusable UI components
│   └── ui/               # Generic UI components built with Radix UI and Tailwind CSS
├── hooks/                # Custom React hooks for shared logic
├── lib/                  # Utility functions and data loaders
├── public/               # Static assets like images and documents (e.g., resume)
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
├── package.json          # Project metadata and dependencies
└── tsconfig.json         # TypeScript configuration
