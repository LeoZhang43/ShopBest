import { User, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { AutoCompletion } from "./features/AutoComplete";

export function TopNavigation() {
  return (
    <header>
      <div className="flex justify-center items-center justify-between h-16 border-b border-gray-100 mb-3">
        <div className="flex hidden sm:inline-block">
         <ShoppingBag/>
          <span>ShopBest</span>
        </div>
        <div className="w-1/2">
          <AutoCompletion />
        </div>
        <Button variant="outline">
          <User/>
          <span className="hidden sm:inline-block">Sign In</span>
        </Button>
      </div>
    </header>
  );
}