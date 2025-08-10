import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-5 w-full">
        {/* Logo and Brand */}
        <div className="gap-2 flex flex-row">
          <ShoppingBag className="h-8 w-8 text-primary" />
          <span className="text-xl font-medium">ShopBest</span>
        </div>

        {/* Search Bar */}
        <div className="ml-24 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products across platforms..."
              className="pl-10 pr-4 bg-input-background border-border"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <Button variant="outline" className="ml-auto gap-2">
          <User className="h-4 w-4" />
          Sign In
        </Button>
      </div>
    </header>
  );
}