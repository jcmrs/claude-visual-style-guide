import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Star, Heart, MessageCircle, Share, MoreHorizontal, Calendar, MapPin } from "lucide-react";

export function CardsSection() {
  return (
    <section id="cards">
      <h2 className="mb-8">Cards & Containers</h2>
      
      <div className="grid gap-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>
                Simple card with header, content, and footer sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is the main content area of the card. It can contain any type of content.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">John Doe</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                "Working with this design system has been incredible. The components are well-crafted and the documentation is excellent."
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>24</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>8</span>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Share className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-base">Project Alpha</CardTitle>
                <CardDescription>In Progress</CardDescription>
              </div>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Active
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="w-full" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Due Dec 15, 2024</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs">SM</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs">+2</AvatarFallback>
                  </Avatar>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistics Card</CardTitle>
              <CardDescription>
                Display key metrics and statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">2,345</p>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                      +12%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">$45,230</p>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs">
                      -3%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">156</p>
                  <p className="text-sm text-muted-foreground">New Signups</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">89%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Card</CardTitle>
              <CardDescription>
                Display event information with location and time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Design System Workshop</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn how to build and maintain design systems at scale
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Thursday, Dec 14, 2024 • 2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Conference Room A, Building 2</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">25 attending</span>
                  <div className="flex -space-x-2">
                    <Avatar className="w-6 h-6 border-2 border-background">
                      <AvatarFallback className="text-xs">AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-6 h-6 border-2 border-background">
                      <AvatarFallback className="text-xs">CD</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-6 h-6 border-2 border-background">
                      <AvatarFallback className="text-xs">+23</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <Button size="sm">Join</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Showcase</CardTitle>
            <CardDescription>
              Complex card layout with multiple content sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-chart-1 to-chart-2 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                </div>
                <div>
                  <h4 className="font-medium">Design Tool Pro</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(4.9)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Professional design tool with advanced features
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-chart-3 to-chart-4 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                </div>
                <div>
                  <h4 className="font-medium">Analytics Dashboard</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">(4.2)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comprehensive analytics and reporting platform
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-chart-5 to-chart-1 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg"></div>
                </div>
                <div>
                  <h4 className="font-medium">Team Collaboration</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(5.0)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Real-time collaboration tools for teams
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between w-full">
              <p className="text-sm text-muted-foreground">
                Showing 3 of 12 products
              </p>
              <Button variant="outline">View All</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}