import { 
  Heart, 
  Percent, 
  Shirt, 
  Bookmark, 
  Grid3X3,
  Home,
  Smartphone,
  Monitor,
  Headphones,
  Watch,
  Camera
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const mainNavItems = [
  { icon: Home, label: "For You", active: true },
  { icon: Percent, label: "Deals" },
  { icon: Shirt, label: "Try On" },
  { icon: Bookmark, label: "Saved" },
];

const categoryItems = [
  { icon: Smartphone, label: "Electronics" },
  { icon: Shirt, label: "Fashion" },
  { icon: Home, label: "Home & Garden" },
  { icon: Monitor, label: "Computers" },
  { icon: Headphones, label: "Audio" },
  { icon: Watch, label: "Watches" },
  { icon: Camera, label: "Photography" },
];

export function SideNavigation() {
  return (
    <aside className="sticky w-96 top-16 h-[calc(100vh-4rem)] border-r bg-background overflow-y-auto">
      <div className="p-5 space-y-6">
        {/* Main Navigation */}
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                item.active ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>

        <Separator />

        {/* Shop by Category */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Grid3X3 className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Shop by Category</h3>
          </div>
          <nav className="space-y-1">
            {categoryItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}