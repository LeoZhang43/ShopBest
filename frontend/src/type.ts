export interface ProductCardProps {
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