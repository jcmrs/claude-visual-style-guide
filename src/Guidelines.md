# Claude AI Design System Guidelines

## Overview
This Visual Style Guide serves as the **definitive design system reference** for Claude AI when generating web application artifacts. Follow these guidelines precisely to ensure consistent, professional, and accessible user interfaces that match Anthropic's design standards.

## Core Principles

### 1. **Design Philosophy**
- **Minimal & Clean**: Prioritize whitespace, subtle shadows, and clear hierarchy
- **Functional**: Every element serves a purpose with clear user intent
- **Accessible**: Maintain high contrast ratios and semantic HTML structure
- **Consistent**: Use standardized spacing, colors, and interaction patterns

### 2. **Color System**
**ALWAYS use CSS custom properties defined in `/styles/globals.css`:**

```css
/* Primary semantic colors */
background, foreground, primary, secondary, muted, accent, destructive

/* UI element colors */
border, input, ring, card, popover

/* Text colors */  
muted-foreground, card-foreground, primary-foreground
```

**Tailwind Usage:**
- `bg-background` for main backgrounds
- `text-foreground` for primary text
- `text-muted-foreground` for secondary text
- `border-border` for all borders (use `/30` opacity: `border-border/30`)
- `bg-card` for elevated surfaces

### 3. **Typography**
**CRITICAL: Do NOT override base typography unless specifically requested**

The design system provides automatic typography that applies when no Tailwind text classes are present:
- `h1` through `h4` have proper font weights and sizes
- `p` elements have consistent line-height
- `label` and `button` elements are properly styled

**Only use Tailwind typography classes when you need to deviate from defaults.**

### 4. **Component Library**
**Always use shadcn/ui components as the foundation:**

```typescript
// Standard imports
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
```

**Never create custom versions of existing shadcn components.**

## Implementation Standards

### Layout Patterns

**Main Container:**
```jsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  {/* Content */}
</div>
```

**Section Spacing:**
```jsx
<div className="space-y-8">        // Standard sections
<div className="space-y-6">        // Form elements  
<div className="space-y-4">        // Related items
<div className="space-y-2">        // Field groups
```

**Grid Layouts:**
```jsx
// Responsive card grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Two-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
```

### Component Standards

**Buttons:**
```jsx
<Button variant="default">Primary Action</Button>
<Button variant="outline">Secondary Action</Button>  
<Button variant="ghost">Tertiary Action</Button>
<Button variant="destructive">Delete Action</Button>
```

**Cards:**
```jsx
<Card className="border-border/30 shadow-sm">
  <CardHeader className="border-b border-border/30">
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent className="p-6">
    Content
  </CardContent>
</Card>
```

**Forms:**
```jsx
<div className="space-y-2">
  <Label htmlFor="field">Field Label</Label>
  <Input 
    id="field"
    placeholder="Enter text..."
    className="border-border/30"
  />
</div>
```

**Navigation:**
```jsx
<nav className="border-b border-border/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Navigation content */}
    </div>
  </div>
</nav>
```

### Theme Implementation

**Always implement dark mode support:**

```jsx
const [isDark, setIsDark] = useState(false);

const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.classList.toggle('dark');
};

return (
  <div className={`min-h-screen bg-background ${isDark ? 'dark' : ''}`}>
    {/* App content */}
  </div>
);
```

**Theme toggle button:**
```jsx
<Button
  variant="outline"
  size="icon"
  onClick={toggleTheme}
  className="bg-background/80 backdrop-blur-sm border-border/50"
>
  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
</Button>
```

### Icon Standards

**Always use Lucide React:**
```jsx
import { Home, User, Settings, Search, Menu, X, ChevronDown, 
         Check, AlertCircle, Info, Loader2 } from "lucide-react"

// Standard size: h-4 w-4 (16px)
// Large size: h-5 w-5 (20px)
// Small size: h-3 w-3 (12px)
```

### Responsive Design

**Required breakpoints:**
- `sm:` (640px+) - Stack to side-by-side layout
- `md:` (768px+) - Tablet layout adjustments  
- `lg:` (1024px+) - Desktop layout
- `xl:` (1280px+) - Large desktop

**Common responsive patterns:**
```jsx
// Responsive grid
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"

// Responsive text
className="text-2xl sm:text-3xl lg:text-4xl"

// Responsive padding
className="px-4 sm:px-6 lg:px-8"
```

### State Management

**Loading States:**
```jsx
<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin mr-2" />
  Loading...
</Button>
```

**Empty States:**
```jsx
<div className="text-center py-12">
  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
    <Inbox className="h-6 w-6 text-muted-foreground" />
  </div>
  <h3>No items found</h3>
  <p className="text-muted-foreground mt-2">Get started by creating your first item.</p>
  <Button className="mt-4">Create Item</Button>
</div>
```

**Error States:**
```jsx
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
</Alert>
```

## File Structure Requirements

```
/
├── App.tsx                    // Main entry point with theme support
├── components/
│   ├── ui/                   // shadcn/ui components (DO NOT MODIFY)
│   └── [CustomComponents]/   // Custom application components
├── styles/
│   └── globals.css          // Design tokens (DO NOT MODIFY unless requested)
└── [other files]
```

## Quality Checklist

Before completing any artifact, verify:

- [ ] **Dark mode** implemented and working
- [ ] **CSS custom properties** used for all colors
- [ ] **shadcn/ui components** imported correctly
- [ ] **Typography** uses default HTML elements (no unnecessary Tailwind text classes)
- [ ] **Responsive design** patterns applied
- [ ] **Lucide React** icons used consistently
- [ ] **Accessibility** considerations (proper labels, contrast, focus states)
- [ ] **Loading/empty/error states** handled appropriately
- [ ] **Consistent spacing** using space-y-* and gap-* utilities
- [ ] **Border opacity** using border-border/30 pattern

## Common Mistakes to Avoid

❌ **Don't:**
- Override base typography unnecessarily
- Create custom versions of shadcn components
- Use hardcoded colors instead of CSS custom properties
- Skip responsive design considerations
- Use different icon libraries
- Implement components without dark mode support
- Use inconsistent spacing patterns

✅ **Do:**
- Follow the exact component patterns shown in this guide
- Use the provided design tokens consistently
- Implement all required responsive breakpoints
- Include proper loading and error states
- Maintain accessibility standards
- Test both light and dark themes

## Reference Files

- **Main documentation**: `/CLAUDE_DESIGN_SYSTEM_GUIDE.md`
- **Component specifications**: `/COMPONENT_SPECIFICATIONS.md` 
- **Live examples**: All components in `/components/` directory
- **Design tokens**: `/styles/globals.css`

---

**This design system ensures Claude AI generates professional, consistent UI artifacts that match Anthropic's high standards for user experience and visual design.**