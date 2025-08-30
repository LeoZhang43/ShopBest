import { ProductCard } from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts, setSearchParameters, setSearchParameterChangeLocally, setPushToPreviousSearchStatus } from "../store/searchSlice";
import { setFilter } from "../store/filterSlice";
import { RootState } from "../store/store";
import { GoogleShopping, ShoppingResults, FilterElements, SearchParameters } from "../type";

export function ProductList(){
    const {
        products, 
        search_parameters_change_locally
    } = useSelector((state: RootState) => state.search);
    const {
        device,
        engine,
        gl,
        google_domain,
        hl,
        q: query,
        shoprs,
    }  = useSelector((state: RootState) => state.search.search_parameters);
    const dispatch = useDispatch();

    function dealData(rowData: GoogleShopping){
        const products: ShoppingResults[] = rowData.shopping_results;
        let search_parameters: SearchParameters = rowData.search_parameters;
        const filters: FilterElements[] = rowData.filters;
        if (!("shoprs" in search_parameters)) {
            search_parameters = { 
                //@ts-ignore
                ...search_parameters,
                 shoprs: "" 
            };
        }
        dispatch(setProducts(products));
        dispatch(setSearchParameters(search_parameters));
        dispatch(setFilter(filters));
    }
    
    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            if(!query || !search_parameters_change_locally){
                return;
            }
            const params = new URLSearchParams({
                q: query,
                device,
                engine,
                gl,
                hl,
                google_domain,
                shoprs,
            });

            try {
                const res = await fetch(`http://localhost:8000/api/products?${params.toString()}`, {
                    signal: controller.signal,
                });
                const data = await res.json();
                dealData(data);
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            } finally {
                dispatch(setSearchParameterChangeLocally(false));
                dispatch(setPushToPreviousSearchStatus(true));
            }
        }

        fetchData();
        return () => controller.abort();
    }, [shoprs, device, engine, gl, google_domain, hl, query]);
    
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
                {products.map((product) => (
                    <ProductCard key={product.product_id} {...product} />
                ))}
            </div>

            {/* Load More */}
            {/* <div className="flex justify-center">
                <Button variant="outline" className="px-8">
                Load More Products
                </Button>
            </div> */}
        </div>
    )
}

