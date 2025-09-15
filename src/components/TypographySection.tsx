import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function TypographySection() {
  return (
    <section id="typography">
      <h2 className="mb-8">Typography</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Heading Hierarchy</CardTitle>
            <CardDescription>
              Our typography system uses consistent spacing and weights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h1>Heading 1</h1>
              <code className="text-xs text-muted-foreground">h1 • font-medium • 2xl</code>
            </div>
            <div>
              <h2>Heading 2</h2>
              <code className="text-xs text-muted-foreground">h2 • font-medium • xl</code>
            </div>
            <div>
              <h3>Heading 3</h3>
              <code className="text-xs text-muted-foreground">h3 • font-medium • lg</code>
            </div>
            <div>
              <h4>Heading 4</h4>
              <code className="text-xs text-muted-foreground">h4 • font-medium • base</code>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Body Text</CardTitle>
            <CardDescription>
              Readable and accessible text styles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p>
                This is a paragraph of body text. It uses the base font size with normal weight 
                and a line height of 1.5 for optimal readability across different screen sizes.
              </p>
              <code className="text-xs text-muted-foreground mt-2 block">p • font-normal • base • leading-relaxed</code>
            </div>
            
            <div>
              <p className="text-muted-foreground">
                This is muted text, often used for descriptions, captions, or secondary information.
              </p>
              <code className="text-xs text-muted-foreground mt-2 block">text-muted-foreground</code>
            </div>
            
            <div>
              <label>Form Label</label>
              <code className="text-xs text-muted-foreground mt-1 block">label • font-medium</code>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Code and Technical Text</CardTitle>
          <CardDescription>
            Monospace fonts for code snippets and technical content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <code className="bg-muted px-2 py-1 rounded text-sm">
                inline code snippet
              </code>
            </div>
            
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`function StyleGuide() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1>Visual Style Guide</h1>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}