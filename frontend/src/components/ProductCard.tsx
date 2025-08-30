import { Star, ExternalLink, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
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
  tag,
}: ShoppingResults) {
  return (
    <a href={product_link} target="_blank" rel="noopener noreferrer">
      
      <Card className="group border border-border hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <ImageWithFallback
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-scale-down pt-1"
          />
          {tag && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              {tag}
            </Badge>
          )}
          <div className="absolute top-2 right-2">
            <Button
              asChild
              size="sm"
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="px-4 py-2 grid grid-rows-[3fr_1fr_1fr_1fr_40px] h-full">
          <div className="flex items-start overflow-hidden">
            <h3 className="leading-5 line-clamp-3">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">{price}</span>
            {old_price && (
              <span className="text-muted-foreground line-through">
                {old_price}
              </span>
            )}
          </div>

          <div className="flex items-center">
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
                <span className="text-muted-foreground">
                  ({reviews})
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center">
              <div className="text-sm text-muted-foreground flex items-center gap-1 w-full">
                {delivery && (
                  <div className="flex gap-1 items-center">
                    <Package className="h-4 w-4 shrink-0" />
                    <span>{delivery}</span>
                  </div>
                )}
              </div>
          </div>

          <div className="flex items-center">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                {second_hand_condition || "Brand new"}
              </Badge>
          </div>
          <div className="flex items-center">
            <ImageWithFallback
              src={source_icon}
              alt={source}
              className="h-5 w-5 rounded"
            />
            <span className="text-muted-foreground">{source}</span>
          </div>
        </div>
      </Card>
    </a>
  );
}
