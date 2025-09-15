import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Badge } from "./ui/badge";
import { Home, Settings, Users, FileText, ChevronRight } from "lucide-react";

export function NavigationSection() {
  return (
    <section id="navigation">
      <h2 className="mb-8">Navigation Components</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>
              Organize content into multiple sections with tab navigation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="help">Help</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="mb-2">Overview Content</h4>
                  <p className="text-sm text-muted-foreground">
                    This is the overview tab content. It provides a high-level summary 
                    of the most important information.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="mb-2">Analytics Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Charts, graphs, and data insights would be displayed here.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="mb-2">Settings Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Configuration options and preferences would be shown here.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="help" className="mt-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="mb-2">Help Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Documentation, FAQs, and support resources would be available here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Breadcrumbs</CardTitle>
              <CardDescription>
                Show the current page location within a navigational hierarchy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-3">Standard Breadcrumb</h4>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              
              <div>
                <h4 className="mb-3">With Icons</h4>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#" className="flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        Dashboard
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Users
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Profile</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
              <CardDescription>
                Navigate through multiple pages of content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-3">Standard Pagination</h4>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
              
              <div className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Showing 11-20 of 247 results
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Navigation Menu</CardTitle>
            <CardDescription>
              Complex navigation with dropdowns and multi-level structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Web Apps</h4>
                          <p className="text-sm text-muted-foreground">
                            Build modern web applications
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Mobile Apps</h4>
                          <p className="text-sm text-muted-foreground">
                            Create cross-platform mobile experiences
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[300px]">
                      <NavigationMenuLink className="block space-y-2 p-3 rounded-md hover:bg-accent">
                        <h4 className="font-medium leading-none">Enterprise</h4>
                        <p className="text-sm text-muted-foreground">
                          Solutions for large organizations
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block space-y-2 p-3 rounded-md hover:bg-accent">
                        <h4 className="font-medium leading-none">Startups</h4>
                        <p className="text-sm text-muted-foreground">
                          Tools for growing businesses
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-4 py-2 hover:bg-accent rounded-md">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-4 py-2 hover:bg-accent rounded-md">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secondary Navigation</CardTitle>
            <CardDescription>
              Simple link-based navigation patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="mb-3">Horizontal Menu</h4>
                <nav className="flex items-center space-x-6 text-sm">
                  <a href="#" className="text-primary font-medium">
                    Dashboard
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Team
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Settings
                  </a>
                  <div className="flex items-center gap-2">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      New Feature
                    </a>
                    <Badge className="text-xs">Beta</Badge>
                  </div>
                </nav>
              </div>
              
              <div>
                <h4 className="mb-3">Vertical Menu</h4>
                <nav className="space-y-2 w-48">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-accent text-accent-foreground">
                    <Home className="h-4 w-4" />
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    <FileText className="h-4 w-4" />
                    Documents
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    <Users className="h-4 w-4" />
                    Team
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors">
                    <Settings className="h-4 w-4" />
                    Settings
                  </a>
                </nav>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}