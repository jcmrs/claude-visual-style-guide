import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Toggle } from "./ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Download, Heart, Settings, Bold, Italic, Underline } from "lucide-react";

export function ButtonsSection() {
  return (
    <section id="buttons">
      <h2 className="mb-8">Buttons & Interactive Elements</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Different button styles for various use cases and hierarchies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {/* Primary Buttons */}
              <div>
                <h4 className="mb-4">Primary Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button disabled>Disabled</Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    With Icon
                  </Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h4 className="mb-4">Secondary Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* Destructive Buttons */}
              <div>
                <h4 className="mb-4">Destructive Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive">Delete</Button>
                  <Button variant="destructive" variant="outline">
                    Cancel Subscription
                  </Button>
                </div>
              </div>

              {/* Icon Buttons */}
              <div>
                <h4 className="mb-4">Icon Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>
                Status indicators and labels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-3">Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Active
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Pending
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      New
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toggle Controls</CardTitle>
              <CardDescription>
                Single and grouped toggle buttons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-3">Single Toggle</h4>
                  <div className="flex gap-2">
                    <Toggle aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                    <Toggle aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </Toggle>
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-3">Toggle Group</h4>
                  <ToggleGroup type="multiple" className="justify-start">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                      <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
            <CardDescription>When and how to use different button types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="mb-3">Primary Buttons</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Main call-to-action</li>
                  <li>• One per screen/section</li>
                  <li>• High visual weight</li>
                  <li>• Important user actions</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3">Secondary Buttons</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Supporting actions</li>
                  <li>• Multiple per screen</li>
                  <li>• Medium visual weight</li>
                  <li>• Common user tasks</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3">Ghost/Link Buttons</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Tertiary actions</li>
                  <li>• Low visual weight</li>
                  <li>• Navigation elements</li>
                  <li>• Optional actions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}