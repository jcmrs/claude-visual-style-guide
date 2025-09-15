import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";
import { ScrollArea } from "./ui/scroll-area";
import { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Grid, Layers, Layout, Sidebar, PanelLeft } from "lucide-react";

export function LayoutSection() {
  return (
    <section id="layout">
      <h2 className="mb-8">Layout & Structure</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Grid Systems</CardTitle>
            <CardDescription>
              Responsive grid layouts for organizing content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="mb-4 flex items-center gap-2">
                <Grid className="h-4 w-4" />
                12-Column Grid
              </h4>
              <div className="grid grid-cols-12 gap-2 mb-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="bg-accent p-2 rounded text-center text-xs">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="mb-4">Common Layout Patterns</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Two-column layout (8/4)</p>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 bg-muted p-4 rounded">
                      <p className="text-sm">Main Content Area</p>
                    </div>
                    <div className="col-span-4 bg-accent p-4 rounded">
                      <p className="text-sm">Sidebar</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Three-column layout (3/6/3)</p>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 bg-accent p-4 rounded">
                      <p className="text-sm">Left Sidebar</p>
                    </div>
                    <div className="col-span-6 bg-muted p-4 rounded">
                      <p className="text-sm">Main Content</p>
                    </div>
                    <div className="col-span-3 bg-accent p-4 rounded">
                      <p className="text-sm">Right Sidebar</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Four-column layout (3/3/3/3)</p>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3 bg-muted p-4 rounded">
                      <p className="text-sm">Column 1</p>
                    </div>
                    <div className="col-span-3 bg-muted p-4 rounded">
                      <p className="text-sm">Column 2</p>
                    </div>
                    <div className="col-span-3 bg-muted p-4 rounded">
                      <p className="text-sm">Column 3</p>
                    </div>
                    <div className="col-span-3 bg-muted p-4 rounded">
                      <p className="text-sm">Column 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Aspect Ratios</CardTitle>
              <CardDescription>
                Maintain consistent proportions across different screen sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">16:9 (Video/Hero)</p>
                <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-chart-1 to-chart-2 rounded-lg flex items-center justify-center">
                  <Badge variant="secondary">16:9</Badge>
                </AspectRatio>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">4:3 (Traditional)</p>
                <AspectRatio ratio={4 / 3} className="bg-gradient-to-br from-chart-3 to-chart-4 rounded-lg flex items-center justify-center">
                  <Badge variant="secondary">4:3</Badge>
                </AspectRatio>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">1:1 (Square)</p>
                <AspectRatio ratio={1} className="bg-gradient-to-br from-chart-5 to-chart-1 rounded-lg flex items-center justify-center">
                  <Badge variant="secondary">1:1</Badge>
                </AspectRatio>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Separators</CardTitle>
              <CardDescription>
                Visual dividers to organize content sections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Section 1</p>
                  <p className="text-xs text-muted-foreground">Content above separator</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm">Section 2</p>
                  <p className="text-xs text-muted-foreground">Content below separator</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm">Left content</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="flex-1">
                  <p className="text-sm">Right content</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-chart-1 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">User Profile</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-chart-2 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Settings</p>
                    <p className="text-xs text-muted-foreground">Manage preferences</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Scrollable Areas</CardTitle>
            <CardDescription>
              Containers with custom scrollbars for overflow content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Vertical Scroll
                </h4>
                <ScrollArea className="h-48 w-full border rounded-lg p-4">
                  <div className="space-y-4">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">{i + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Item {i + 1}</p>
                          <p className="text-xs text-muted-foreground">Description for item {i + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              
              <div>
                <h4 className="mb-3 flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  Horizontal Scroll
                </h4>
                <ScrollArea className="w-full border rounded-lg">
                  <div className="flex gap-4 p-4" style={{ width: 'max-content' }}>
                    {Array.from({ length: 10 }, (_, i) => (
                      <Card key={i} className="w-48 flex-shrink-0">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm">Card {i + 1}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="aspect-video bg-gradient-to-br from-chart-1 to-chart-2 rounded-md mb-3"></div>
                          <p className="text-xs text-muted-foreground">
                            This is a horizontally scrollable card.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resizable Panels</CardTitle>
            <CardDescription>
              Interactive layouts with user-adjustable panel sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 flex items-center gap-2">
                  <PanelLeft className="h-4 w-4" />
                  Horizontal Panels
                </h4>
                <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
                  <ResizablePanel defaultSize={30} minSize={20}>
                    <div className="flex h-full items-center justify-center p-6">
                      <div className="text-center">
                        <Sidebar className="mx-auto h-8 w-8 mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">Sidebar</p>
                        <p className="text-xs text-muted-foreground">Resizable panel</p>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={70} minSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <div className="text-center">
                        <Layout className="mx-auto h-8 w-8 mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">Main Content</p>
                        <p className="text-xs text-muted-foreground">Primary content area</p>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
              
              <div>
                <h4 className="mb-3">Vertical Panels</h4>
                <ResizablePanelGroup direction="vertical" className="min-h-[300px] rounded-lg border">
                  <ResizablePanel defaultSize={60} minSize={40}>
                    <div className="flex h-full items-center justify-center p-6">
                      <div className="text-center">
                        <Layout className="mx-auto h-8 w-8 mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">Top Panel</p>
                        <p className="text-xs text-muted-foreground">Main content area</p>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={40} minSize={20}>
                    <div className="flex h-full items-center justify-center p-6">
                      <div className="text-center">
                        <Layers className="mx-auto h-8 w-8 mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">Bottom Panel</p>
                        <p className="text-xs text-muted-foreground">Secondary content</p>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Layout Guidelines</CardTitle>
            <CardDescription>
              Best practices for creating effective layouts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3">Spacing & Rhythm</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use consistent spacing units (4px, 8px, 16px, 24px, 32px)</li>
                  <li>• Maintain vertical rhythm with consistent line heights</li>
                  <li>• Use whitespace effectively to create visual hierarchy</li>
                  <li>• Group related elements with proximity principles</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3">Responsive Design</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Design mobile-first, enhance for larger screens</li>
                  <li>• Use flexible grid systems for consistent alignment</li>
                  <li>• Implement breakpoints: sm (640px), md (768px), lg (1024px)</li>
                  <li>• Test layouts across different screen sizes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3">Accessibility</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ensure proper heading hierarchy (h1, h2, h3, etc.)</li>
                  <li>• Maintain sufficient color contrast ratios</li>
                  <li>• Use semantic HTML elements for structure</li>
                  <li>• Make interactive elements keyboard accessible</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3">Performance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Optimize images with appropriate formats and sizes</li>
                  <li>• Use lazy loading for below-the-fold content</li>
                  <li>• Minimize layout shifts with consistent dimensions</li>
                  <li>• Implement efficient scroll handling for large lists</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}