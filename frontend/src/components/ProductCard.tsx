import { Star, ExternalLink, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingResults } from "../type"; 

export function ProductCard({
  delivery,
  price,
  product_link,
  rating,
  reviews,
  source,
  source_icon,
  thumbnail,
  title,
  second_hand_condition,
  old_price,
  tag
}: ShoppingResults) {
  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-scale-down"
        />
        {tag && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            {tag}
          </Badge>
        )}
      </div>
      
      {/* Flex column to push action row down */}
      <div className="px-4 py-2 flex flex-col justify-between h-full">
        <div className="space-y-3">
          {/* Product Name */}
          <h3 className="font-medium line-clamp-2 leading-5">{title}</h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-base">{price}</span>
            {old_price && (
              <span className="text-sm text-muted-foreground line-through">
                {old_price}
              </span>
            )}
          </div>
          
          {/* Rating */}
          {rating > 0 && reviews > 0 && (
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
                ({reviews})
              </span>
            </div>
          )}

          {/* Delivery */}
          {delivery && (
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              <Package className="h-4 w-4" />
              <span>{delivery}</span>
            </div>
          )}

          {/* Second-hand Condition */}
          {second_hand_condition && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              {second_hand_condition}
            </Badge>
          )}
        </div>

        {/* Platform and Action (stays at bottom) */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-2">
            <ImageWithFallback
              src={source_icon}
              alt={source}
              className="h-5 w-5 rounded"
            />
            <span className="text-sm text-muted-foreground">{source}</span>
          </div>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            <a href={product_link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
