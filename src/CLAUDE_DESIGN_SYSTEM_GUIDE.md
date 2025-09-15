# Claude Design System Reference Guide

## Overview
This comprehensive Visual Style Guide serves as the **primary design system reference** for Claude AI when generating consistent UI artifacts. It follows Anthropic/Claude.AI's clean, minimal aesthetic and provides standardized components, patterns, and guidelines.

## How Claude Should Use This Guide

### 1. **Color System** 
Always use the CSS custom properties defined in `/styles/globals.css`:

```css
/* Primary Colors */
--background: Light #ffffff | Dark oklch(0.145 0 0)
--foreground: Light oklch(0.145 0 0) | Dark oklch(0.985 0 0)
--primary: Light #030213 | Dark oklch(0.985 0 0)
--secondary: Light oklch(0.95 0.0058 264.53) | Dark oklch(0.269 0 0)
--muted: Light #ececf0 | Dark oklch(0.269 0 0)
--muted-foreground: Light #717182 | Dark oklch(0.708 0 0)
--border: Light rgba(0, 0, 0, 0.1) | Dark oklch(0.269 0 0)
```

**Usage in Tailwind:**
- `bg-background` for main backgrounds
- `text-foreground` for primary text
- `border-border` for all borders
- `text-muted-foreground` for secondary text

### 2. **Typography System**
The design system includes automatic typography that applies to HTML elements when no Tailwind text classes are present:

```css
h1: font-size: var(--text-2xl), font-weight: 500, line-height: 1.5
h2: font-size: var(--text-xl), font-weight: 500, line-height: 1.5
h3: font-size: var(--text-lg), font-weight: 500, line-height: 1.5
p: font-size: var(--text-base), font-weight: 400, line-height: 1.5
```

**IMPORTANT:** Only override typography with Tailwind classes when specifically needed. Default HTML elements will be styled automatically.

### 3. **Component Library**
All components use shadcn/ui as the foundation. Import from `./components/ui/[component]`:

```typescript
import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
```

### 4. **Theme Support**
Always implement dark mode support:

```typescript
const [isDark, setIsDark] = useState(false);

const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.classList.toggle('dark');
};
```

Apply theme class to root container:
```jsx
<div className={`min-h-screen bg-background ${isDark ? 'dark' : ''}`}>
```

## Standard Component Patterns

### Button Variants
```jsx
// Primary action
<Button variant="default">Primary Button</Button>

// Secondary action  
<Button variant="outline">Secondary Button</Button>

// Tertiary action
<Button variant="ghost">Tertiary Button</Button>

// Destructive action
<Button variant="destructive">Delete</Button>
```

### Card Layout
```jsx
<Card className="border-border/30 shadow-sm">
  <CardHeader className="border-b border-border/30">
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>
```

### Form Elements
```jsx
<div className="space-y-2">
  <Label htmlFor="input">Field Label</Label>
  <Input 
    id="input"
    placeholder="Enter text..."
    className="border-border/30"
  />
</div>
```

### Navigation
```jsx
<nav className="border-b border-border/30 bg-background/95 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Navigation content */}
    </div>
  </div>
</nav>
```

## Design Principles

### 1. **Spacing**
- Use consistent spacing scale: `space-y-2`, `space-y-4`, `space-y-6`, `space-y-8`, `space-y-12`
- Container padding: `px-4`, `px-6`, `px-8` depending on screen size
- Section margins: `mt-8`, `mt-12`, `mt-16`, `mt-24`

### 2. **Borders & Shadows**
- Standard border: `border-border/30`
- Card shadows: `shadow-sm` for subtle elevation
- Focus rings: Built into components via `--ring` color

### 3. **Border Radius**
- Default: `--radius: 0.625rem` (10px)
- Small: `rounded-sm` (6px)
- Large: `rounded-lg` (10px)  
- XL: `rounded-xl` (14px)

### 4. **Layout Containers**
```jsx
// Main content wrapper
<div className="max-w-6xl mx-auto px-6 py-12">

// Section spacing
<div className="space-y-16">

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## Status Indicators & Feedback

### Loading States
```jsx
import { Loader2 } from "lucide-react"

<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin mr-2" />
  Loading...
</Button>
```

### Status Badges
```jsx
<Badge variant="default">Active</Badge>      // Green
<Badge variant="secondary">Pending</Badge>   // Gray  
<Badge variant="destructive">Error</Badge>   // Red
<Badge variant="outline">Draft</Badge>       // Outlined
```

### Alerts
```jsx
import { Alert, AlertDescription } from "./components/ui/alert"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertDescription>
    Alert message content
  </AlertDescription>
</Alert>
```

## Icon System
Use **Lucide React** for all icons:

```jsx
import { 
  Home, User, Settings, Search, Menu, X, 
  ChevronDown, ChevronRight, ArrowLeft, ArrowRight,
  Check, AlertCircle, Info, Loader2 
} from "lucide-react"

// Standard size: h-4 w-4 (16px)
// Large size: h-5 w-5 (20px)  
// Small size: h-3 w-3 (12px)
```

## Responsive Design

### Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Common Responsive Patterns
```jsx
// Grid that adapts to screen size
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

// Text that scales
<h1 className="text-2xl sm:text-3xl lg:text-4xl">

// Padding that adapts  
<div className="px-4 sm:px-6 lg:px-8">
```

## Quick Implementation Checklist

When creating new artifacts, ensure:

- [ ] Dark mode support implemented
- [ ] Uses CSS custom properties from globals.css
- [ ] Typography uses default HTML elements where possible
- [ ] shadcn/ui components imported correctly
- [ ] Consistent spacing and layout patterns
- [ ] Lucide React icons for all iconography
- [ ] Responsive design patterns applied
- [ ] Proper border and shadow usage
- [ ] Accessible color contrast maintained

## File Structure Reference

```
/
├── App.tsx                 // Main application entry
├── components/            
│   ├── ui/                // shadcn/ui components
│   └── [custom]/          // Custom components
├── styles/
│   └── globals.css        // Design tokens & base styles
└── assets/                // Images and static files
```

## Examples to Reference

The style guide application (`/App.tsx`) demonstrates all these patterns in practice. Reference the following sections:

- **Typography**: `/components/TypographySection.tsx`
- **Colors**: `/components/ColorPaletteSection.tsx` 
- **Buttons**: `/components/ButtonsSection.tsx`
- **Forms**: `/components/FormsSection.tsx`
- **Navigation**: `/components/NavigationSection.tsx`
- **Cards**: `/components/CardsSection.tsx`
- **Data Display**: `/components/DataDisplaySection.tsx`
- **Feedback**: `/components/FeedbackSection.tsx`
- **Status**: `/components/StatusIndicatorsSection.tsx`
- **Layout**: `/components/LayoutSection.tsx`

---

**This guide ensures Claude AI generates consistent, professional UI artifacts that match Anthropic's design standards.**