import { useSelector } from "react-redux";
import { useFetchProductsByCategoryQuery } from "../store";
import ShowProduct from "./ShowProduct";

function ProductsList() {

    const category = useSelector((state) => state.categories);
    const search = useSelector((state) => state.search);
    const {data, error, isFetching} = useFetchProductsByCategoryQuery(category.selected);

    let content;
    if (isFetching) {
        content = <div>Is Loading products</div>
    } else if (error) {
        content = <div>Error loading products.</div>
    } else {
        let filteredProducts = data.filter((product) => {
            return product.productName.toLowerCase().includes(search.searchTerm.toLowerCase());
        });
        content = filteredProducts.map(product => {
            return <ShowProduct key={product.productId}>{product}</ShowProduct>
        });
    }

    return ( 
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {content}
        </div>
    );
};

export default ProductsList;