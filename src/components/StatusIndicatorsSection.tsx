import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Loader2, 
  CircleDot, 
  Circle, 
  Wifi, 
  WifiOff, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Clock,
  Zap,
  Pause,
  Play,
  RefreshCw,
  MoreHorizontal
} from "lucide-react";

export function StatusIndicatorsSection() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [pulseDemo, setPulseDemo] = useState(true);

  // Demo animation toggle
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseDemo(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  return (
    <section id="status-indicators">
      <h2 className="mb-8">Status Indicators</h2>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Processing States</CardTitle>
            <CardDescription>
              Animated and static indicators for AI thinking, processing, and ready states
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Animated (Processing)
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-sm">Processing request...</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-5 w-5 animate-spin text-chart-2" />
                    <span className="text-sm">Generating response...</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <CircleDot className="h-5 w-5 text-chart-3" />
                      <div className="absolute inset-0 h-5 w-5 border-2 border-chart-3 rounded-full animate-ping opacity-30"></div>
                    </div>
                    <span className="text-sm">Connecting to AI...</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      <div className="w-1 h-4 bg-chart-4 rounded-full animate-pulse mr-1"></div>
                      <div className="w-1 h-4 bg-chart-4 rounded-full animate-pulse mr-1 [animation-delay:0.2s]"></div>
                      <div className="w-1 h-4 bg-chart-4 rounded-full animate-pulse mr-1 [animation-delay:0.4s]"></div>
                      <div className="w-1 h-4 bg-chart-4 rounded-full animate-pulse [animation-delay:0.6s]"></div>
                    </div>
                    <span className="text-sm">Audio processing...</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MoreHorizontal className="h-5 w-5 animate-pulse text-chart-5" />
                    <span className="text-sm">Waiting for response...</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="flex items-center gap-2">
                  <Circle className="h-4 w-4" />
                  Static (Ready/Status)
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Ready for input</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Circle className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Idle</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="text-sm">Error occurred</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm">Warning state</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Rate limited</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Pause className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">Paused</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4>Interactive Demo</h4>
                <Button 
                  onClick={simulateProcessing} 
                  disabled={isProcessing}
                  size="sm"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Start Processing
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Click the button to see a simulated AI processing state transition.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Connection Status</CardTitle>
              <CardDescription>
                Network and service connectivity indicators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Connected</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Online
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <WifiOff className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Disconnected</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    Offline
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Wifi className="h-4 w-4 text-yellow-600" />
                      <div className="absolute inset-0 animate-pulse">
                        <Wifi className="h-4 w-4 text-yellow-600 opacity-50" />
                      </div>
                    </div>
                    <span className="text-sm">Reconnecting</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Unstable
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      <div className="w-1 h-3 bg-green-500 rounded-full mr-0.5"></div>
                      <div className="w-1 h-3 bg-green-500 rounded-full mr-0.5"></div>
                      <div className="w-1 h-3 bg-green-500 rounded-full mr-0.5"></div>
                      <div className="w-1 h-3 bg-gray-300 rounded-full mr-0.5"></div>
                      <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-sm">Signal Strength</span>
                  </div>
                  <Badge variant="outline">3/5</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Indicators</CardTitle>
              <CardDescription>
                User presence and activity status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    {pulseDemo && (
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>
                  <span className="text-sm">Active</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Away</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Busy</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">Offline</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
                  </div>
                  <span className="text-sm">Do Not Disturb</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 border-2 border-gray-400 rounded-full bg-transparent"></div>
                  <span className="text-sm">Invisible</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Progress & Loading States</CardTitle>
            <CardDescription>
              Various loading patterns and progress indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4>Spinners</h4>
                <div className="flex items-center gap-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4>Dots</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-current rounded-full animate-pulse [animation-delay:-0.4s]"></div>
                  <div className="w-3 h-3 bg-current rounded-full animate-pulse [animation-delay:-0.2s]"></div>
                  <div className="w-3 h-3 bg-current rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4>Pulses</h4>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-current rounded-full"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-current rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-current rounded-full"></div>
                    <div className="absolute inset-0 w-6 h-6 bg-current rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
            <CardDescription>Best practices for implementing status indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3">Animation Guidelines</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use animations sparingly - only when conveying important state changes</li>
                  <li>• Keep animations subtle and non-distracting</li>
                  <li>• Prefer CSS animations over JavaScript for better performance</li>
                  <li>• Respect user preferences for reduced motion</li>
                  <li>• Use consistent timing and easing across similar animations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3">Color & Accessibility</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't rely solely on color to convey status</li>
                  <li>• Include text labels or icons alongside color indicators</li>
                  <li>• Ensure sufficient contrast for status colors</li>
                  <li>• Use semantic colors consistently (green=success, red=error)</li>
                  <li>• Test with colorblind users or simulation tools</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3">AI Interface Patterns</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Show processing state immediately upon user action</li>
                  <li>• Provide estimated time for longer operations</li>
                  <li>• Use different animations for different types of AI work</li>
                  <li>• Clear indicators when AI is ready for new input</li>
                  <li>• Show connection status for cloud-based AI services</li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-3">Performance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pause animations when not visible to save battery</li>
                  <li>• Use transform and opacity for smoother animations</li>
                  <li>• Avoid animating layout properties (width, height)</li>
                  <li>• Consider will-change CSS property for complex animations</li>
                  <li>• Limit concurrent animations on the same page</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}