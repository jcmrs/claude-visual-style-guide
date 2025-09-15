# Component Specifications for Claude AI

## Core Component Library

### Button Component

**Import:** `import { Button } from "./components/ui/button"`

**Variants:**
```jsx
// Primary (default)
<Button variant="default" size="default">
  Primary Action
</Button>

// Secondary  
<Button variant="outline" size="default">
  Secondary Action  
</Button>

// Tertiary
<Button variant="ghost" size="default">
  Tertiary Action
</Button>

// Destructive
<Button variant="destructive" size="default">
  Delete Item
</Button>
```

**Sizes:**
- `size="sm"` - Small button (height: 36px)
- `size="default"` - Default button (height: 40px)  
- `size="lg"` - Large button (height: 44px)
- `size="icon"` - Square icon button (40x40px)

**States:**
```jsx
// Loading state
<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin mr-2" />
  Loading...
</Button>

// With icon
<Button>
  <Download className="h-4 w-4 mr-2" />
  Download
</Button>
```

---

### Card Component

**Import:** `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"`

**Standard Pattern:**
```jsx
<Card className="border-border/30 shadow-sm">
  <CardHeader className="border-b border-border/30">
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent className="p-6">
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter className="border-t border-border/30 pt-6">
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Variants:**
```jsx
// Simple card (no header/footer borders)
<Card className="border-border/30 shadow-sm">
  <CardContent className="p-6">
    Content only
  </CardContent>
</Card>

// Hover card
<Card className="border-border/30 shadow-sm hover:shadow-md transition-shadow">
  {/* Content */}
</Card>
```

---

### Input Components

**Text Input:**
```jsx
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"

<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input 
    id="email"
    type="email"
    placeholder="Enter your email..."
    className="border-border/30"
  />
</div>
```

**Textarea:**
```jsx
import { Textarea } from "./components/ui/textarea"

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea 
    id="message"
    placeholder="Type your message..."
    className="border-border/30 min-h-[100px]"
  />
</div>
```

**Select:**
```jsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"

<div className="space-y-2">
  <Label htmlFor="role">Role</Label>
  <Select>
    <SelectTrigger className="border-border/30">
      <SelectValue placeholder="Select a role" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Administrator</SelectItem>
      <SelectItem value="user">User</SelectItem>
      <SelectItem value="guest">Guest</SelectItem>
    </SelectContent>
  </Select>
</div>
```

---

### Navigation Components

**Main Navigation:**
```jsx
<nav className="border-b border-border/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-primary rounded-lg"></div>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:block">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

**Breadcrumbs:**
```jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

### Data Display Components

**Table:**
```jsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"

<div className="border border-border/30 rounded-lg overflow-hidden">
  <Table>
    <TableHeader>
      <TableRow className="border-b border-border/30">
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="border-b border-border/30">
        <TableCell className="font-medium">John Doe</TableCell>
        <TableCell>
          <Badge variant="default">Active</Badge>
        </TableCell>
        <TableCell>Administrator</TableCell>
        <TableCell>
          <Button variant="ghost" size="sm">Edit</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
```

**Badge:**
```jsx
import { Badge } from "./components/ui/badge"

<Badge variant="default">Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

---

### Feedback Components

**Alert:**
```jsx
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert"
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react"

// Success Alert
<Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

// Error Alert  
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>

// Warning Alert
<Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This action cannot be undone.
  </AlertDescription>
</Alert>

// Info Alert
<Alert className="border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    New features are available in this update.
  </AlertDescription>
</Alert>
```

**Toast Notifications:**
```jsx
import { toast } from "sonner@2.0.3"

// Success toast
toast.success("Changes saved successfully!")

// Error toast
toast.error("Something went wrong")

// Info toast  
toast.info("New update available")

// Loading toast
const loadingToast = toast.loading("Saving changes...")
// Later: toast.dismiss(loadingToast)
```

**Progress Indicator:**
```jsx
import { Progress } from "./components/ui/progress"

<div className="space-y-2">
  <div className="flex items-center justify-between text-sm">
    <span>Progress</span>
    <span>75%</span>
  </div>
  <Progress value={75} className="h-2" />
</div>
```

---

### Dialog & Modal Components

**Dialog:**
```jsx
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description of what this dialog does.
      </DialogDescription>
    </DialogHeader>
    
    <div className="py-4">
      {/* Dialog content */}
    </div>
    
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Sheet (Slide-out panel):**
```jsx
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Sheet description or instructions.
      </SheetDescription>
    </SheetHeader>
    
    <div className="py-4">
      {/* Sheet content */}
    </div>
  </SheetContent>
</Sheet>
```

---

### Layout Components

**Main Application Layout:**
```jsx
export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-background transition-colors duration-200 ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="border-b border-border/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        {/* Nav content */}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Page content */}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
}
```

**Grid Layouts:**
```jsx
// Responsive card grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map((item) => (
    <Card key={item.id}>
      {/* Card content */}
    </Card>
  ))}
</div>

// Two-column layout  
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>

// Sidebar layout
<div className="flex flex-col lg:flex-row gap-8">
  <aside className="lg:w-64 flex-shrink-0">
    {/* Sidebar */}
  </aside>
  <main className="flex-1">
    {/* Main content */}
  </main>
</div>
```

---

## Common Patterns

### Form Layouts
```jsx
<form className="space-y-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="firstName">First Name</Label>
      <Input id="firstName" placeholder="John" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="lastName">Last Name</Label>
      <Input id="lastName" placeholder="Doe" />
    </div>
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
  
  <div className="flex justify-end gap-3">
    <Button variant="outline">Cancel</Button>
    <Button type="submit">Save Changes</Button>
  </div>
</form>
```

### Loading States
```jsx
// Button loading
<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin mr-2" />
  Saving...
</Button>

// Page loading
<div className="flex items-center justify-center h-64">
  <div className="flex items-center gap-3">
    <Loader2 className="h-5 w-5 animate-spin" />
    <span>Loading...</span>
  </div>
</div>

// Skeleton loading
import { Skeleton } from "./components/ui/skeleton"

<div className="space-y-3">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
```

### Empty States
```jsx
<div className="text-center py-12">
  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
    <Inbox className="h-6 w-6 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-medium">No items found</h3>
  <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
    Get started by creating your first item.
  </p>
  <Button className="mt-4">
    <Plus className="h-4 w-4 mr-2" />
    Create Item
  </Button>
</div>
```

This specification provides Claude AI with exact component usage patterns and ensures consistent implementation across all artifacts.