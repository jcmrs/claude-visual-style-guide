import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Skeleton } from "./ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { toast } from "sonner@2.0.3";
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  X, 
  Bell, 
  HelpCircle,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react";

export function FeedbackSection() {
  const showToast = (type: string) => {
    switch (type) {
      case 'success':
        toast.success("Success! Your changes have been saved.");
        break;
      case 'error':
        toast.error("Error! Something went wrong. Please try again.");
        break;
      case 'warning':
        toast.warning("Warning! Please review your input.");
        break;
      case 'info':
        toast.info("Info: New features are now available.");
        break;
      default:
        toast("Default toast message");
    }
  };

  return (
    <section id="feedback">
      <h2 className="mb-8">Feedback & Status</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Alert Components</CardTitle>
            <CardDescription>
              Different alert types for various notification scenarios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert. It provides helpful context or additional details.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-800 dark:text-green-200">Success</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                Your account has been created successfully. You can now start using the application.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-800 dark:text-yellow-200">Warning</AlertTitle>
              <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                Please review your settings. Some configurations may need your attention.
              </AlertDescription>
            </Alert>

            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <X className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-800 dark:text-red-200">Error</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                Unable to process your request. Please check your connection and try again.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Toast Notifications</CardTitle>
              <CardDescription>
                Temporary notifications that appear and disappear automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => showToast('success')}
                  className="w-full"
                >
                  Success Toast
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => showToast('error')}
                  className="w-full"
                >
                  Error Toast
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => showToast('warning')}
                  className="w-full"
                >
                  Warning Toast
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => showToast('info')}
                  className="w-full"
                >
                  Info Toast
                </Button>
              </div>
              
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Click any button above to see toast notifications in action. 
                  They will appear in the bottom-right corner of the screen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
              <CardDescription>
                Show completion status and loading states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>File Upload</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="w-full" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Profile Completion</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Complete
                  </Badge>
                </div>
                <Progress value={100} className="w-full" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Project Setup</span>
                  <span>30%</span>
                </div>
                <Progress value={30} className="w-full" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Loading...</span>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Help Elements</CardTitle>
            <CardDescription>
              Tooltips and hover cards for contextual information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="mb-4">Tooltips</h4>
                <div className="flex flex-wrap gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          <HelpCircle className="mr-2 h-4 w-4" />
                          Hover for help
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip with additional information.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Notifications (3 unread)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="outline" className="cursor-help">
                          Beta Feature
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This feature is currently in beta testing</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Hover Cards</h4>
                <div className="flex flex-wrap gap-4">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link" className="p-0 h-auto underline">
                        @johndoe
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">John Doe</h4>
                          <p className="text-sm text-muted-foreground">
                            Senior Developer at Acme Inc. Passionate about building great user experiences.
                          </p>
                          <div className="flex items-center pt-2">
                            <Calendar className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                              Joined December 2021
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link" className="p-0 h-auto underline">
                        Design Conference 2024
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Design Conference 2024</h4>
                        <p className="text-sm text-muted-foreground">
                          The premier event for designers and developers to connect, learn, and be inspired.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>March 15-17, 2024</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>San Francisco, CA</span>
                        </div>
                        <Button size="sm" className="w-full mt-3">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Learn More
                        </Button>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status Badges</CardTitle>
            <CardDescription>
              Visual indicators for different states and conditions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-4">System Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API Status</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Operational
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CDN</span>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Degraded
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Backup System</span>
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      Down
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="mb-4">User Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Account Status</span>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Subscription</span>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Pro Plan
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email Verification</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Two-Factor Auth</span>
                    <Badge variant="outline">Not Enabled</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}