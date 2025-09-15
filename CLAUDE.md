# Visual Style Guide Web Project

A comprehensive web-based visual style guide built with React, TypeScript, and Vite, featuring the Claude design system components and guidelines.

## Project Overview

This project creates an interactive web-based style guide that showcases design system components, color palettes, typography, and usage guidelines. It serves as both documentation and a living reference for the Claude design system.

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn/ui components
- **Styling**: Tailwind CSS + CSS modules
- **Package Manager**: npm

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```

## Project Structure

```
src/
├── components/           # Main style guide sections
│   ├── ui/              # shadcn/ui component library
│   └── figma/           # Figma-related components
├── styles/              # Global styles and CSS
├── claude-design-tokens.json  # Design system tokens
└── documentation files # Guidelines and specifications
```

## Key Features

- Interactive component showcase
- Color palette visualization
- Typography specimens
- Form component examples
- Navigation patterns
- Status indicators and feedback
- Responsive layout examples
- Design token reference

## Guidelines

- Follow existing React/TypeScript patterns
- Use shadcn/ui components as base layer
- Maintain consistency with Claude design system
- Ensure responsive design across all components
- Test components across different screen sizes

## Notes

- Project includes comprehensive Claude design system documentation
- Components are built following accessibility best practices
- Design tokens are centralized in JSON format
- Style guide is designed to be both functional and visually appealing