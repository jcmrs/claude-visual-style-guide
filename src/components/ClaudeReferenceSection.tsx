import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Code, FileText, Palette, Layout, Zap } from "lucide-react";

export function ClaudeReferenceSection() {
  const designTokens = [
    { name: "--background", light: "#ffffff", dark: "oklch(0.145 0 0)", usage: "bg-background" },
    { name: "--foreground", light: "oklch(0.145 0 0)", dark: "oklch(0.985 0 0)", usage: "text-foreground" },
    { name: "--primary", light: "#030213", dark: "oklch(0.985 0 0)", usage: "bg-primary" },
    { name: "--muted", light: "#ececf0", dark: "oklch(0.269 0 0)", usage: "bg-muted" },
    { name: "--border", light: "rgba(0, 0, 0, 0.1)", dark: "oklch(0.269 0 0)", usage: "border-border" },
  ];

  const componentSpecs = [
    {
      component: "Button",
      import: `import { Button } from "./components/ui/button"`,
      variants: ["default", "outline", "ghost", "destructive"],
      sizes: ["sm", "default", "lg", "icon"],
      example: `<Button variant="default">Click me</Button>`
    },
    {
      component: "Card",
      import: `import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"`,
      variants: ["default"],
      sizes: ["default"],
      example: `<Card className="border-border/30 shadow-sm">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>`
    },
    {
      component: "Input",
      import: `import { Input } from "./components/ui/input"`,
      variants: ["default"],
      sizes: ["default"],
      example: `<Input placeholder="Enter text..." className="border-border/30" />`
    }
  ];

  const layoutPatterns = [
    {
      name: "Main Container",
      description: "Standard page wrapper with responsive padding",
      code: `<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">`
    },
    {
      name: "Card Grid",
      description: "Responsive grid for cards and content blocks",
      code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`
    },
    {
      name: "Form Layout",
      description: "Consistent form field spacing",
      code: `<form className="space-y-6">
  <div className="space-y-2">
    <Label>Field Label</Label>
    <Input />
  </div>
</form>`
    }
  ];

  return (
    <section id="claude-reference" className="space-y-8">
      <div>
        <h2 className="mb-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Code className="h-4 w-4 text-primary-foreground" />
          </div>
          Claude AI Reference
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          Machine-readable specifications and quick reference for AI-assisted development. 
          Use these exact patterns for consistent implementation.
        </p>
      </div>

      {/* Design Tokens */}
      <Card className="border-border/30 shadow-sm">
        <CardHeader className="border-b border-border/30">
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Design Tokens
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Core CSS custom properties for consistent theming. Always use Tailwind classes that reference these tokens.
            </p>
            <div className="grid gap-3">
              {designTokens.map((token) => (
                <div key={token.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <code className="text-sm font-mono bg-background px-2 py-1 rounded">
                      {token.name}
                    </code>
                    <Badge variant="outline" className="font-mono text-xs">
                      {token.usage}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Light: {token.light}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>Dark: {token.dark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Quick Reference */}
      <Card className="border-border/30 shadow-sm">
        <CardHeader className="border-b border-border/30">
          <CardTitle className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            Component Quick Reference
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {componentSpecs.map((spec) => (
              <div key={spec.component} className="space-y-3">
                <div className="flex items-center gap-3">
                  <h4 className="font-medium">{spec.component}</h4>
                  <div className="flex gap-1">
                    {spec.variants.map((variant) => (
                      <Badge key={variant} variant="secondary" className="text-xs">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <code className="block text-sm bg-muted/50 p-3 rounded-md font-mono">
                  {spec.import}
                </code>
                
                <details className="group">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Show example usage
                  </summary>
                  <pre className="mt-2 text-sm bg-background border border-border/30 p-3 rounded-md overflow-x-auto">
                    <code>{spec.example}</code>
                  </pre>
                </details>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Layout Patterns */}
      <Card className="border-border/30 shadow-sm">
        <CardHeader className="border-b border-border/30">
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Common Layout Patterns
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {layoutPatterns.map((pattern) => (
              <div key={pattern.name} className="space-y-2">
                <div>
                  <h4 className="font-medium">{pattern.name}</h4>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </div>
                <pre className="text-sm bg-muted/50 p-3 rounded-md overflow-x-auto">
                  <code>{pattern.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guidelines */}
      <Card className="border-border/30 shadow-sm">
        <CardHeader className="border-b border-border/30">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Claude Implementation Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600 dark:text-green-400">✅ Always Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use CSS custom properties from globals.css</li>
                  <li>• Import shadcn/ui components correctly</li>
                  <li>• Implement dark mode support</li>
                  <li>• Use consistent spacing patterns</li>
                  <li>• Apply responsive design principles</li>
                  <li>• Use Lucide React for all icons</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-red-600 dark:text-red-400">❌ Never Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Override typography with Tailwind unless needed</li>
                  <li>• Create custom versions of shadcn components</li>
                  <li>• Use hardcoded colors instead of tokens</li>
                  <li>• Skip responsive design considerations</li>
                  <li>• Use different icon libraries</li>
                  <li>• Ignore accessibility patterns</li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-3">
              <h4 className="font-medium">Quick Start Template</h4>
              <pre className="text-sm bg-background border border-border/30 p-4 rounded-md overflow-x-auto">
                <code>{`import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={\`min-h-screen bg-background \${isDark ? 'dark' : ''}\`}>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Card className="border-border/30 shadow-sm">
          <CardHeader>
            <CardTitle>Your Application</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}