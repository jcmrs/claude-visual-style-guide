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

## Claude AI Integration Features

This Visual Style Guide is optimized for Claude AI artifact generation with machine-readable specifications:

### 1. Machine-Readable Documentation
- **`CLAUDE_DESIGN_SYSTEM_GUIDE.md`** - Comprehensive guide with exact usage patterns and color variables
- **`COMPONENT_SPECIFICATIONS.md`** - Detailed technical specifications for each component with import statements
- **`Guidelines.md`** - Implementation guidelines and best practices
- **`claude-design-tokens.json`** - Machine-readable JSON specification with exact CSS values and Tailwind usage

### 2. Claude Reference Section
- Interactive `ClaudeReferenceSection` component displays design tokens, component specs, and layout patterns
- Shows exact import statements and variant options for consistent artifact generation
- Includes expandable code examples and usage patterns
- Features responsive design breakpoints and state management examples

### 3. Structured Specifications
- Design tokens with exact CSS values and semantic color mappings
- Component imports and variant specifications for shadcn/ui components
- Common layout patterns with ready-to-use code snippets
- Quality checklist and implementation guidelines for artifact completion

This structure enables Claude to generate perfectly consistent UI artifacts that match the design system specifications.

## Claude Code Self-Improvement Protocol

This meta-framework enables continuous enhancement of project documentation and workflows through structured learning and reflection.

### Workflow Enhancement Rules

1. **Before Major Operations**: Check if CLAUDE.md has specific instructions for the task
2. **After Encountering Errors**: Document solution and develop prevention steps
3. **When Completing Tasks**: Reflect on workflow efficiency and knowledge gaps
4. **Review/Report**: Present improvement opportunities to user with specific recommendations
5. **If Gaps Found and Approved**: Update CLAUDE.md with approved improvements

### Review/Report Format

When identifying improvement opportunities, present:

```
**Issue Identified**: [Brief description of gap, error, or inefficiency]
**Proposed Solution**: [Specific CLAUDE.md addition or modification]  
**Rationale**: [Why this would improve future interactions]
**Request**: "Should I add this improvement to CLAUDE.md?"
```

### Autonomous Mode Override

**Learning Curve Recognition**: User may instruct Claude Code to operate autonomously by saying:
- *"Skip review/report and apply improvements directly"*
- *"Use autonomous mode for documentation updates"* 
- *"I trust your judgment on CLAUDE.md improvements"*

**When in Autonomous Mode**:
- Apply steps 1-3 and 5 directly
- Skip step 4 (Review/Report)
- Continue until user requests return to review mode
- Still announce what improvements were made

### Error Response Protocol

**Systematic Error Learning**:
1. **Pattern Recognition**: Identify error type and root cause
2. **Immediate Resolution**: Fix the current issue
3. **Prevention Documentation**: Add specific prevention guidelines
4. **Workflow Integration**: Update operational procedures
5. **Knowledge Persistence**: Ensure future sessions inherit the learning

### Self-Reflection Checkpoints

After completing significant tasks, evaluate:
- **Efficiency**: Were there workflow bottlenecks or redundancies?
- **Knowledge Gaps**: What information would have accelerated the work?
- **Tool Usage**: Could different tools or approaches have been better?
- **Documentation Quality**: Are instructions clear and complete?
- **Pattern Recognition**: What patterns emerge that should be systematized?

### Meta-Documentation Guidelines

**Improvement Criteria**:
- Solutions must be **specific and actionable**
- Instructions must be **clear for future Claude Code sessions**
- Changes must **improve efficiency or accuracy**
- Documentation must remain **concise and well-organized**

**Update Principles**:
- Add error prevention steps immediately after resolution
- Document successful patterns for reuse
- Remove obsolete instructions when tools or workflows change
- Maintain logical organization and findability

## Development Guidelines

- Follow existing React/TypeScript patterns
- Use shadcn/ui components as base layer
- Maintain consistency with Claude design system
- Ensure responsive design across all components
- Test components across different screen sizes

## GitHub Operations

**IMPORTANT**: This repository requires proper GitHub MCP tool usage to prevent file update errors.

### For Updating Repository Files

**Always follow this workflow when updating files in the repository:**

1. **Get Current File SHA** (for existing files):
   ```
   Use: mcp__github__get_file_contents
   Parameters: owner, repo, path
   Extract: SHA from response
   ```

2. **Update File with SHA**:
   ```
   Use: mcp__github__create_or_update_file  
   Parameters: owner, repo, path, content, message, branch, sha
   CRITICAL: Include the SHA from step 1
   ```

### For Multiple File Operations

**Preferred approach for multiple files:**
```
Use: mcp__github__push_files
Parameters: owner, repo, branch, files[], message
Advantage: Handles multiple files in single commit, no SHA required
```

### Error Prevention

**Common Error**: `"sha" wasn't supplied. []`
- **Cause**: Trying to update existing file without providing current SHA
- **Solution**: Always get file contents first to retrieve SHA
- **Prevention**: Use the two-step workflow above

**GitHub MCP Tools Available:**
- `mcp__github__get_file_contents` - Retrieve file and SHA
- `mcp__github__create_or_update_file` - Single file operations  
- `mcp__github__push_files` - Multiple file operations (recommended)
- `mcp__github__list_workflows` - Check deployment status
- `mcp__github__run_workflow` - Trigger deployments

## Deployment

The project is configured for automatic deployment to GitHub Pages:

- **Live URL**: https://jcmrs.github.io/claude-visual-style-guide/
- **GitHub Actions**: Automatically builds and deploys on push to main branch
- **Build Output**: Vite builds to `./build` directory with correct base path
- **Pages Configuration**: Uses GitHub Actions with Static HTML deployment

### Manual Deployment
```bash
# Build for production
npm run build

# The build output in ./build/ is ready for static hosting
```

## Best Practices

### For Claude AI Usage
- Reference `CLAUDE_DESIGN_SYSTEM_GUIDE.md` for consistent color usage and component patterns
- Use the `ClaudeReferenceSection` component as a quick reference for design tokens
- Follow the exact import statements specified in `COMPONENT_SPECIFICATIONS.md`
- Leverage `claude-design-tokens.json` for programmatic access to design values

### For Development
- Always use the design system's CSS custom properties instead of hardcoded colors
- Import components from `./components/ui/[component]` following shadcn/ui patterns
- Maintain the existing file structure when adding new components
- Test dark/light theme compatibility for all new components

### For Maintenance
- Update `claude-design-tokens.json` when adding new design tokens
- Keep component specifications in sync with actual component implementations
- Document any new patterns in the appropriate `.md` files
- Ensure all new components follow the accessibility guidelines

### For Repository Operations
- **Always use GitHub MCP tools** for repository operations
- **Get SHA before updating files** to prevent 422 errors
- **Use `mcp__github__push_files`** for multiple file changes
- **Monitor deployment status** with workflow tools

## File Structure Reference

```
src/
├── components/
│   ├── ui/                          # shadcn/ui components (Button, Card, Input, etc.)
│   ├── ClaudeReferenceSection.tsx   # AI-optimized reference component
│   ├── StyleGuideHeader.tsx         # Main header component
│   ├── ColorPaletteSection.tsx      # Color system showcase
│   ├── TypographySection.tsx        # Typography specimens
│   ├── ButtonsSection.tsx           # Button variants and states
│   ├── FormsSection.tsx             # Form components and patterns
│   ├── CardsSection.tsx             # Card layouts and variants
│   ├── NavigationSection.tsx        # Navigation patterns
│   ├── FeedbackSection.tsx          # Alerts, toasts, notifications
│   ├── DataDisplaySection.tsx       # Tables, lists, data presentation
│   ├── LayoutSection.tsx            # Grid systems and containers
│   ├── StatusIndicatorsSection.tsx  # Loading states, progress, badges
│   └── figma/
│       └── ImageWithFallback.tsx    # Figma integration component
├── styles/
│   ├── globals.css                  # Design system CSS custom properties
│   └── style-guide.css              # Style guide specific styles
├── CLAUDE_DESIGN_SYSTEM_GUIDE.md   # Primary Claude AI reference
├── COMPONENT_SPECIFICATIONS.md      # Technical component specs
├── Guidelines.md                    # Implementation guidelines
├── claude-design-tokens.json       # Machine-readable design tokens
└── App.tsx                          # Main application component
```

## Notes

- Project includes comprehensive Claude design system documentation optimized for AI consumption
- Components are built following accessibility best practices with ARIA support
- Design tokens are centralized in both CSS custom properties and JSON format
- Style guide serves as both interactive documentation and AI reference system
- Responsive design tested across desktop, tablet, and mobile breakpoints
- Repository operations require proper GitHub MCP tool usage to prevent SHA-related errors
- Self-improvement protocol enables continuous documentation enhancement through structured learning