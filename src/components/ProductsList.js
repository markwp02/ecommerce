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
            return <ShowProduct key={product.productId} >{product}</ShowProduct>
        });
    }

    return <div>{content}</div>;
};

export default ProductsList;