import { TopNavigation } from "./components/TopNavigation";
import { SideNavigation } from "./components/SideNavigation";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { useSelector } from "react-redux";

export default function App() {
  // Get search results from Redux state
  const products = useSelector((state: any) => state.search.results);

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <div className="flex min-h-[calc(100vh-4rem-10rem)]">
        <SideNavigation />
        <main className="min-h-[calc(100vh-4rem)] p-4">
          <ProductList products={products} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
