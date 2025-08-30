import { TopNavigation } from "./components/TopNavigation";
import { SideNavigation } from "./components/SideNavigation";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { FilterCheckedBar } from "./components/features/FilterCheckedBar";

export default function App() {

  return (
    <div className="mx-3">
      <TopNavigation />
      <FilterCheckedBar />
      <div className="flex gap-2">
        <div className="flex-[0_0_33%] max-w-[12rem]">
          <SideNavigation />
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
