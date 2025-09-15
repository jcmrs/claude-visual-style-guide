export function StyleGuideHeader() {
  return (
    <header className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
        <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
      </div>
      
      <h1 className="mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
        Visual Style Guide
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        A comprehensive design system inspired by Anthropic and Claude.AI, 
        featuring consistent UI components, typography, and interaction patterns 
        for building cohesive web applications.
      </p>
      
      <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
          <span>Tailwind CSS v4</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
          <span>shadcn/ui Components</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
          <span>React + TypeScript</span>
        </div>
      </div>
    </header>
  );
}