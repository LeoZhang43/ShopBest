import { TopNavigation } from "./components/TopNavigation";
import { SideNavigation } from "./components/SideNavigation";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { FilterCheckedBar } from "./components/features/FilterCheckedBar";

export default function App() {

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <FilterCheckedBar />
      <div className="flex min-h-[calc(100vh-4rem-10rem)] m-5 gap-4 mt-16">
        <SideNavigation />
        <main className="min-h-[calc(100vh-4rem)]">
          <ProductList/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
