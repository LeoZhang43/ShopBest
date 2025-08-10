import { TopNavigation } from "./components/TopNavigation";
import { SideNavigation } from "./components/SideNavigation";
import { ProductCard } from "./components/ProductCard";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/button";
import { Filter, SortAsc } from "lucide-react";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro - 128GB Natural Titanium",
    price: "$999.00",
    originalPrice: "$1,199.00",
    brand: "Apple",
    rating: 4.8,
    reviewCount: 2847,
    platform: "Amazon",
    platformLogo:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=32&h=32&fit=crop&crop=center",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop&crop=center",
    discount: 17,
  },
  {
    id: "2",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: "$349.99",
    originalPrice: "$399.99",
    brand: "Sony",
    rating: 4.7,
    reviewCount: 1253,
    platform: "Best Buy",
    platformLogo:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=32&h=32&fit=crop&crop=center",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop&crop=center",
    discount: 13,
  },
  {
    id: "3",
    name: "Nike Air Max 270 Men's Running Shoes",
    price: "$150.00",
    brand: "Nike",
    rating: 4.5,
    reviewCount: 892,
    platform: "Nike",
    platformLogo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=32&h=32&fit=crop&crop=center",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "4",
    name: 'Samsung 65" QLED 4K Smart TV',
    price: "$1,299.99",
    originalPrice: "$1,499.99",
    brand: "Samsung",
    rating: 4.6,
    reviewCount: 567,
    platform: "Walmart",
    platformLogo:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=32&h=32&fit=crop&crop=center",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&crop=center",
    discount: 13,
  },
  {
    id: "5",
    name: 'MacBook Air M2 - 13.6" - 256GB',
    price: "$1,099.00",
    originalPrice: "$1,199.00",
    brand: "Apple",
    rating: 4.9,
    reviewCount: 1654,
    platform: "Apple",
    platformLogo:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=32&h=32&fit=crop&crop=center",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&crop=center",
    discount: 8,
  },
  {
    id: "6",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: "$79.95",
    originalPrice: "$99.95",
    brand: "Instant Pot",
    rating: 4.4,
    reviewCount: 3421,
    platform: "Target",
    platformLogo:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=32&h=32&fit=crop&crop=center",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    discount: 20,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <div className="flex min-h-[calc(100vh-4rem-10rem)]">
        <SideNavigation />
        <main className="min-h-[calc(100vh-4rem)]">
          {/* Main Content */}
          <div className="p-5">
            {/* Header Section */}
            <div className="mb-6">
              <h1 className="mb-2">For You</h1>
              <p className="text-muted-foreground">
                Discover personalized deals and recommendations
                across all platforms
              </p>
            </div>

            {/* Filters and Sort */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button variant="outline" className="gap-2">
                  <SortAsc className="h-4 w-4" />
                  Sort by Price
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Showing {sampleProducts.length} products
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {sampleProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center">
              <Button variant="outline" className="px-8">
                Load More Products
              </Button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}