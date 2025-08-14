import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Filter, SortAsc } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setProducts } from "../store/searchSlice";
import { RootState } from "../store/store";

export function ProductList(){
    const products =  useSelector((state: RootState) => state.search.products);
    const query =  useSelector((state: RootState) => state.search.query);
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            if(!query){
                return;
            }
            try {
                const res = await fetch(`http://localhost:8000/api/products?q=${encodeURIComponent(query)}`, {
                    signal: controller.signal,
                });
                const data = await res.json();
                const sliceData = data.slice(0, 10);
                dispatch(setProducts(sliceData));
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            } 
        }

        fetchData();
        return () => controller.abort();
    }, [query]);
    
    return(
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
                Showing {products.length} products
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                {products.map((product) => (
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
    )
}

