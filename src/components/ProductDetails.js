import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../store";
import useNavigation from "../hooks/use-navigation";
import getIdFromPath from "../hooks/get-id-from-path";
import { addToCart } from "../store";

function ProductDetails() {
    const dispatch = useDispatch();
    const { currentPath } = useNavigation();    
    const productId = getIdFromPath(currentPath);

    const {data, error, isFetching} = useFetchProductByIdQuery(productId);

    if (isFetching) {
        return <div>Is Loading product</div>
    } else if (error) {
        return <div>Error loading product</div>
    } 

    const lowStockLimit = 10;
    const outOfStockLimit = 0;
    const outOfStock = data.productStock === outOfStockLimit ? true : false;
    const lowStock = data.productStock < lowStockLimit && data.productStock > outOfStockLimit ? true : false;

    const onAddToCartClick = () => {
        dispatch(addToCart(data));
    };
    
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-12">{data.productName}</p>
                    </div>
                </div>
                <div className="card-image">
                    <img className="max-w-xl" alt={data.productName} src={data.productImageUrl}/>
                </div>
                <div className="content">
                    <p>{data.productDescription}</p>
                    <p>${data.productPrice.toFixed(2)}</p>
                    {lowStock && <p>Low Stock ({data.productStock})</p>}
                    {outOfStock && <p>Out of Stock</p>}
                </div>
                <div className="buttons">
                        <button disabled={outOfStock} className="button is-primary is-light" onClick={onAddToCartClick}>
                           Add To Cart
                        </button>
                    </div>
            </div>
        </div>
        
    );
    

    
    

};

export default ProductDetails;