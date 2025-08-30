import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Quick Links */}
          <div className="space-y-4">
            <h4>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Partner Stores</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4>Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4>Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">support@shopbest.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">1-800-SHOP-CMP</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p>&copy; 2025 ShopBest. All rights reserved.</p>
          <p>Made with ❤️ for smart shoppers</p>
        </div>
      </div>
    </footer>
  );
}