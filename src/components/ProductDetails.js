import { useSelector } from "react-redux";
import { useFetchProductByIdQuery } from "../store";
import useNavigation from "../hooks/use-navigation";
import getIdFromPath from "../hooks/get-id-from-path";

function ProductDetails() {

    const { currentPath } = useNavigation();    
    const productId = getIdFromPath(currentPath);

    const {data, error, isFetching} = useFetchProductByIdQuery(productId);

    if (isFetching) {
        return <div>Is Loading product</div>
    } else if (error) {
        return <div>Error loading product</div>
    } 
    
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
                </div>
            </div>
        </div>
        
    );
    

    
    

};

export default ProductDetails;