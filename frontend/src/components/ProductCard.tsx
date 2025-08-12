import { Star, ExternalLink, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  brand: string;
  rating: number;
  reviewCount: number;
  platform: string;
  platformLogo: string;
  image: string;
  discount?: number;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  brand,
  rating,
  reviewCount,
  platform,
  platformLogo,
  image,
  discount,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            -{discount}%
          </Badge>
        )}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        {/* Brand */}
        <div className="text-sm text-muted-foreground font-medium">{brand}</div>
        
        {/* Product Name */}
        <h3 className="font-medium line-clamp-2 leading-5">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
        
        {/* Platform and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <ImageWithFallback
              src={platformLogo}
              alt={platform}
              className="h-5 w-5 rounded"
            />
            <span className="text-sm text-muted-foreground">{platform}</span>
          </div>
          <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
            View Deal
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}