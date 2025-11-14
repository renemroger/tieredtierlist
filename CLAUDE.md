# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using the App Router, TypeScript, and Tailwind CSS. The project aims to create a tier list creation and sharing application.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server at http://localhost:3000 with hot reload.

### Building for Production
```bash
npm run build
```
Creates an optimized production build. Always run this before deploying to catch type errors and build issues.

### Running Production Server
```bash
npm run start
```
Runs the production build locally. Must run `npm run build` first.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues. The project uses Next.js ESLint configuration.

## Project Structure

### App Router Architecture
- **`app/`**: Next.js App Router directory containing all routes and pages
  - `layout.tsx`: Root layout wrapping all pages, includes Inter font and metadata
  - `page.tsx`: Home page component (route: `/`)
  - `globals.css`: Global styles and Tailwind directives

### Configuration Files
- **TypeScript**: Path alias `@/*` maps to root directory for imports
- **Tailwind**: Configured to scan `pages/`, `components/`, and `app/` directories
- **Next.js**: Using Next.js 15 with default configuration

## Technology Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.15
- **Language**: TypeScript 5
- **Font**: Inter (Google Fonts, loaded via next/font)

## GitHub Actions Integration

This repository has two Claude Code workflows configured:

1. **Claude Code Review** (`claude-code-review.yml`): Automatically reviews PRs for code quality, bugs, performance, security, and test coverage
2. **Claude PR Assistant** (`claude.yml`): Triggers on `@claude` mentions in issues, PR comments, and reviews

Both workflows use the `CLAUDE_CODE_OAUTH_TOKEN` secret and reference this CLAUDE.md file for project conventions.

## Development Notes

### Component Creation
When creating new components:
- Place reusable components in a `components/` directory (currently not created)
- Use TypeScript for type safety
- Apply Tailwind CSS classes for styling
- Follow the pattern in `app/page.tsx` for responsive design with `md:` and `lg:` breakpoints

### Routing
- Create new routes by adding folders in the `app/` directory
- Each route needs a `page.tsx` file to be publicly accessible
- Use `layout.tsx` files for shared UI between routes

### Dark Mode
The application is configured for dark mode support via Tailwind's `dark:` variant. CSS variables `--background` and `--foreground` are used for theme colors.

### Type Safety
- Strict TypeScript is enabled
- Use proper typing for React components and Next.js metadata
- Path imports use `@/*` alias (e.g., `@/components/Button`)