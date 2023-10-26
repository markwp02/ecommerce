import { useSelector } from "react-redux";
import { useFetchProductsByCategoryQuery } from "../store";
import ShowProduct from "./ShowProduct";

function ProductsList() {

    const category = useSelector((state) => state.categories);
    const {data, error, isFetching} = useFetchProductsByCategoryQuery(category.selected);

    let content;
    if (isFetching) {
        content = <div>Is Loading products</div>
    } else if (error) {
        content = <div>Error loading products.</div>
    } else {
        content = data.map(product => {
            return <ShowProduct key={product.productId}>{product}</ShowProduct>
        });
    }
//grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    return ( 
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {content}
        </div>
    );
};

export default ProductsList;