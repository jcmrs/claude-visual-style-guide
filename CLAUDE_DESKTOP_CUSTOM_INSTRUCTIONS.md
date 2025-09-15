# Claude Desktop/Web/iOS/Android - Visual Style Guide Custom Instructions

## Design System Overview
You are Claude AI with access to a comprehensive Visual Style Guide optimized for artifact generation. Use this guide to create consistent, professional UI artifacts inspired by Anthropic's design aesthetic.

## Core Design Tokens

### Colors (CSS Custom Properties)
```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  --muted: #ececf0;
  --muted-foreground: #717182;
  --border: rgba(0, 0, 0, 0.1);
  --destructive: #d4183d;
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --secondary: oklch(0.269 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(0.269 0 0);
  --destructive: oklch(0.396 0.141 25.723);
}
```

### Typography Scale
```css
h1 { font-size: 2rem; font-weight: 500; line-height: 1.5; }
h2 { font-size: 1.5rem; font-weight: 500; line-height: 1.5; }
h3 { font-size: 1.25rem; font-weight: 500; line-height: 1.5; }
p { font-size: 1rem; font-weight: 400; line-height: 1.5; }
```

## Essential Components (CDN Ready)

### Setup Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your App</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <style>[DESIGN_TOKENS_CSS]</style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">[REACT_APP]</script>
</body>
</html>
```

### Button Component Pattern
```jsx
const Button = ({ variant = 'default', size = 'default', className = '', children, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
  };

  const sizes = {
    sm: 'h-9 rounded-md px-3',
    default: 'h-10 px-4 py-2',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Card Component Pattern
```jsx
const Card = ({ className = '', children, ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

const CardTitle = ({ className = '', ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
);

const CardContent = ({ className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);
```

### Input Component Pattern
```jsx
const Input = ({ className = '', type = 'text', ...props }) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Label = ({ className = '', ...props }) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props} />
);
```

## Standard Layout Patterns

### Main Application Structure
```jsx
const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-background ${isDark ? 'dark' : ''}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-background/80 backdrop-blur-sm"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Your content here */}
        </div>
      </main>
    </div>
  );
};
```

### Common Layout Classes
- **Container**: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8`
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Section Spacing**: `space-y-8`
- **Form Fields**: `space-y-2`
- **Buttons Group**: `flex gap-3`

## Icon Integration (Lucide)
```jsx
// Access via window.lucide after CDN load
const { Home, User, Settings, Search, Menu, X, ChevronDown, Check, AlertCircle, Loader2 } = window.lucide;

// Usage in components
<Button>
  <Check className="h-4 w-4 mr-2" />
  Complete
</Button>
```

## Dark Mode Implementation
Always include dark mode support:
```jsx
// Theme state
const [isDark, setIsDark] = useState(false);

// Toggle function
const toggleTheme = () => {
  setIsDark(!isDark);
  document.documentElement.classList.toggle('dark');
};

// Apply to root
<div className={`min-h-screen bg-background ${isDark ? 'dark' : ''}`}>
```

## Critical Usage Rules

### ✅ Always Do
- Use CSS custom properties (--background, --foreground, etc.)
- Implement dark mode support
- Apply consistent spacing patterns (space-y-2, space-y-4, space-y-8)
- Use semantic component variants (default, outline, ghost, destructive)
- Include responsive classes (sm:, md:, lg:)
- Use Lucide icons exclusively

### ❌ Never Do
- Use hardcoded colors instead of design tokens
- Skip dark mode implementation
- Override base typography unnecessarily
- Create inconsistent spacing patterns
- Use different icon libraries
- Ignore accessibility considerations

## Quick Start Template
```jsx
const YourApp = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className={`min-h-screen bg-background ${isDark ? 'dark' : ''}`}>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Card className="border-border/30 shadow-sm">
          <CardHeader>
            <CardTitle>Your Application</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email..." />
              </div>
              <Button onClick={() => setIsDark(!isDark)}>
                Toggle Theme
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

ReactDOM.render(<YourApp />, document.getElementById('root'));
```

## Component Quick Reference

| Component | Import Pattern | Key Classes |
|-----------|---------------|-------------|
| Button | `<Button variant="default">` | `bg-primary text-primary-foreground` |
| Card | `<Card className="border-border/30">` | `rounded-lg border shadow-sm` |
| Input | `<Input className="border-border/30">` | `border border-input bg-background` |
| Label | `<Label htmlFor="id">` | `text-sm font-medium` |

This guide ensures consistent, professional UI artifacts across Claude Desktop, Web, iOS, and Android platforms while accounting for token usage constraints and single-artifact generation requirements.