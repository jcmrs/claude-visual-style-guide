import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ColorPaletteSection() {
  const colorGroups = [
    {
      title: "Primary Colors",
      description: "Main brand colors and high-contrast elements",
      colors: [
        { name: "Background", class: "bg-background", textClass: "text-foreground" },
        { name: "Foreground", class: "bg-foreground", textClass: "text-background" },
        { name: "Primary", class: "bg-primary", textClass: "text-primary-foreground" },
        { name: "Primary Foreground", class: "bg-primary-foreground", textClass: "text-primary" },
      ]
    },
    {
      title: "Secondary Colors",
      description: "Supporting colors for UI elements and states",
      colors: [
        { name: "Secondary", class: "bg-secondary", textClass: "text-secondary-foreground" },
        { name: "Muted", class: "bg-muted", textClass: "text-muted-foreground" },
        { name: "Accent", class: "bg-accent", textClass: "text-accent-foreground" },
        { name: "Card", class: "bg-card border", textClass: "text-card-foreground" },
      ]
    },
    {
      title: "Semantic Colors",
      description: "Colors with specific meaning and context",
      colors: [
        { name: "Destructive", class: "bg-destructive", textClass: "text-destructive-foreground" },
        { name: "Border", class: "bg-background border-4 border-border", textClass: "text-foreground" },
        { name: "Input", class: "bg-input-background border", textClass: "text-foreground" },
        { name: "Ring", class: "bg-background ring-4 ring-ring", textClass: "text-foreground" },
      ]
    },
    {
      title: "Chart Colors",
      description: "Data visualization and chart colors",
      colors: [
        { name: "Chart 1", class: "bg-chart-1", textClass: "text-white" },
        { name: "Chart 2", class: "bg-chart-2", textClass: "text-white" },
        { name: "Chart 3", class: "bg-chart-3", textClass: "text-white" },
        { name: "Chart 4", class: "bg-chart-4", textClass: "text-white" },
        { name: "Chart 5", class: "bg-chart-5", textClass: "text-white" },
      ]
    }
  ];

  return (
    <section id="colors">
      <h2 className="mb-8">Color Palette</h2>
      
      <div className="grid gap-6">
        {colorGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.colors.map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div 
                      className={`h-20 rounded-lg ${color.class} ${color.textClass} flex items-center justify-center transition-all hover:scale-105`}
                    >
                      <span className="text-sm font-medium">Aa</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{color.name}</p>
                      <code className="text-xs text-muted-foreground">
                        {color.class.split(' ')[0]}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Usage Guidelines</CardTitle>
          <CardDescription>Best practices for color usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-3">Light Mode</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use high contrast between text and background</li>
                <li>• Primary colors for main actions and focus states</li>
                <li>• Muted colors for secondary information</li>
                <li>• Borders should be subtle but visible</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Dark Mode</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Automatically adapts using CSS custom properties</li>
                <li>• Maintains color relationships and contrast ratios</li>
                <li>• Reduced brightness to prevent eye strain</li>
                <li>• All components work seamlessly in both modes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}