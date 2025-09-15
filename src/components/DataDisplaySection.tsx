import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { Skeleton } from "./ui/skeleton";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";
import { Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react";

export function DataDisplaySection() {
  const tableData = [
    { id: "1", name: "John Doe", role: "Developer", status: "Active", progress: 85 },
    { id: "2", name: "Sarah Wilson", role: "Designer", status: "Active", progress: 92 },
    { id: "3", name: "Mike Johnson", role: "Manager", status: "Away", progress: 67 },
    { id: "4", name: "Emily Davis", role: "Developer", status: "Inactive", progress: 43 },
  ];

  return (
    <section id="data-display">
      <h2 className="mb-8">Data Display</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
            <CardDescription>
              Structured data presentation with status indicators and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          user.status === 'Active' ? 'default' : 
                          user.status === 'Away' ? 'secondary' : 
                          'outline'
                        }
                        className={
                          user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          user.status === 'Away' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={user.progress} className="w-16" />
                        <span className="text-xs text-muted-foreground w-8">
                          {user.progress}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="text-sm text-primary hover:underline">
                        Edit
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
              <CardDescription>
                Skeleton components for loading states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              
              <Separator />
              
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-8" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>
                Scrollable list of recent activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64 w-full">
                <div className="space-y-4">
                  {[
                    { user: "John Doe", action: "created a new project", time: "2 hours ago", type: "create" },
                    { user: "Sarah Wilson", action: "updated the design system", time: "4 hours ago", type: "update" },
                    { user: "Mike Johnson", action: "completed the sprint", time: "6 hours ago", type: "complete" },
                    { user: "Emily Davis", action: "commented on issue #123", time: "8 hours ago", type: "comment" },
                    { user: "Alex Thompson", action: "deployed to production", time: "12 hours ago", type: "deploy" },
                    { user: "Lisa Chen", action: "created new branch", time: "1 day ago", type: "create" },
                    { user: "David Brown", action: "merged pull request", time: "1 day ago", type: "merge" },
                    { user: "Anna White", action: "fixed critical bug", time: "2 days ago", type: "fix" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>
                          {' '}
                          <span className="text-muted-foreground">{activity.action}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          activity.type === 'create' ? 'bg-green-50 text-green-700 border-green-200' :
                          activity.type === 'update' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          activity.type === 'complete' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                          'bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Revenue</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">$45,230</span>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+12%</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="bg-gradient-to-r from-chart-1/20 to-chart-2/20 rounded-lg flex items-end p-4">
                <div className="flex items-end gap-1 h-16 w-full">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((height, i) => (
                    <div 
                      key={i}
                      className="bg-chart-1 rounded-sm flex-1"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </AspectRatio>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Users</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">2,345</span>
                <div className="flex items-center gap-1 text-red-600">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">-3%</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="bg-gradient-to-r from-chart-3/20 to-chart-4/20 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-8 border-chart-3 border-t-chart-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-semibold">68%</span>
                  </div>
                </div>
              </AspectRatio>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Conversion</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">3.2%</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Minus className="h-4 w-4" />
                  <span className="text-sm">0%</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="bg-gradient-to-r from-chart-5/20 to-chart-1/20 rounded-lg flex items-end p-4">
                <div className="flex items-end gap-1 h-16 w-full">
                  {[30, 45, 35, 60, 40, 70, 50, 65, 45, 55, 75, 60].map((height, i) => (
                    <div 
                      key={i}
                      className="bg-chart-5 rounded-sm flex-1"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Key Metrics Overview</CardTitle>
            <CardDescription>
              Important performance indicators at a glance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>This Month</span>
                </div>
                <p className="text-2xl font-semibold">$12,426</p>
                <p className="text-sm text-muted-foreground">Monthly Recurring Revenue</p>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">+8.2% from last month</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Today</span>
                </div>
                <p className="text-2xl font-semibold">1,249</p>
                <p className="text-sm text-muted-foreground">Active Sessions</p>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingDown className="h-3 w-3 text-red-600" />
                  <span className="text-red-600">-2.1% from yesterday</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>This Week</span>
                </div>
                <p className="text-2xl font-semibold">573</p>
                <p className="text-sm text-muted-foreground">New Signups</p>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">+15.3% from last week</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>All Time</span>
                </div>
                <p className="text-2xl font-semibold">99.9%</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
                <div className="flex items-center gap-1 text-xs">
                  <Minus className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Stable</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}