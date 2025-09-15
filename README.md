# Visual Style Guide

A comprehensive design system and component library optimized for Claude AI artifact generation. This project provides standardized UI patterns, design tokens, and implementation guidelines for creating consistent, professional interfaces across all Claude platforms.

## Live Demo

**View the complete style guide:** https://jcmrs.github.io/claude-visual-style-guide/

## Overview

This Visual Style Guide serves as the primary design system reference for Claude AI when generating UI artifacts. It follows Anthropic's clean, minimal aesthetic and provides:

- Machine-readable design tokens and component specifications
- Comprehensive component library with shadcn/ui foundation
- Responsive layouts and dark mode support
- Cross-platform optimization for Claude Code, Desktop, Web, iOS, and Android

## Project Structure

```
/
├── src/
│   ├── components/           # React components demonstrating patterns
│   ├── CLAUDE_DESIGN_SYSTEM_GUIDE.md    # Comprehensive implementation guide
│   ├── COMPONENT_SPECIFICATIONS.md      # Technical component specs
│   └── claude-design-tokens.json        # Machine-readable design tokens
├── CLAUDE.md                            # Claude Code project configuration
├── CLAUDE_DESKTOP_CUSTOM_INSTRUCTIONS.md   # Desktop/Web/iOS/Android guide
├── CUSTOM_INSTRUCTIONS.txt              # Compressed Custom Instructions
├── CLAUDE_DESKTOP_TEST_INSTRUCTION.md   # Validation test instruction
└── test-artifact-sample.html           # Working validation example
```

## Quick Start

### For Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

### For Claude AI Integration

#### Claude Code Users
- The repository is ready for Claude Code with comprehensive documentation in `CLAUDE.md`
- All design patterns are accessible through the project files

#### Claude Desktop/Web/iOS/Android Users

1. **Apply Custom Instructions:**
   - Copy content from `CUSTOM_INSTRUCTIONS.txt`
   - Paste into your Claude platform's Custom Instructions settings

2. **Validate Installation:**
   - Use the test instruction from `CLAUDE_DESKTOP_TEST_INSTRUCTION.md`
   - Generate a test artifact to verify all components work correctly
   - Compare results with the live demo

## Design System Features

### Core Design Tokens
- Semantic color system with light/dark mode support
- Consistent typography scale and spacing patterns
- Border radius and shadow definitions
- CSS custom properties for maximum flexibility

### Component Library
- Built on shadcn/ui foundation
- Full TypeScript support
- Responsive design patterns
- Accessibility considerations

### Cross-Platform Optimization
- **Claude Code:** Full repository access with comprehensive tooling
- **Other Platforms:** Token-optimized Custom Instructions for single-artifact generation
- **CDN-ready:** Self-contained components using React, Tailwind, and Lucide via CDN

## Key Files Reference

| File | Purpose | Target Platform |
|------|---------|----------------|
| `CLAUDE.md` | Project configuration and best practices | Claude Code |
| `CLAUDE_DESKTOP_CUSTOM_INSTRUCTIONS.md` | Detailed implementation guide | Desktop/Web/iOS/Android |
| `CUSTOM_INSTRUCTIONS.txt` | Compressed Custom Instructions | Desktop/Web/iOS/Android |
| `CLAUDE_DESKTOP_TEST_INSTRUCTION.md` | Validation test generator | Desktop/Web/iOS/Android |
| `src/CLAUDE_DESIGN_SYSTEM_GUIDE.md` | Complete design system documentation | All platforms |
| `src/COMPONENT_SPECIFICATIONS.md` | Technical component specifications | All platforms |
| `src/claude-design-tokens.json` | Machine-readable design tokens | All platforms |

## Usage Guidelines

### For Claude Code
- Reference the comprehensive documentation in project files
- Use the build tools and development environment for testing
- Follow patterns established in the component examples

### For Other Claude Platforms
- Apply the Custom Instructions from `CUSTOM_INSTRUCTIONS.txt`
- Use the test instruction to validate functionality
- Generate UI artifacts using the established patterns

### Design Principles
- Always implement dark mode support
- Use CSS custom properties for theming
- Apply consistent spacing patterns
- Follow responsive design principles
- Use Lucide React for all iconography

## Technology Stack

- **Frontend:** React 18 + TypeScript
- **Build System:** Vite
- **Styling:** Tailwind CSS + CSS Custom Properties
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** GitHub Actions + GitHub Pages

## Contributing

The design system follows established patterns and guidelines. When contributing:

1. Maintain consistency with existing component patterns
2. Ensure dark mode compatibility
3. Follow the spacing and typography scales
4. Test across different screen sizes
5. Update documentation as needed

## Original Design

This implementation is based on the Figma design available at: https://www.figma.com/design/iwggjmSRjVzeXnEibszMHD/Visual-Style-Guide

## License

This project serves as a reference implementation for Claude AI artifact generation and follows established open-source component library patterns.