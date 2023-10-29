import { useSelector } from "react-redux";

function ProductDetails() {

    const productDetail = useSelector((state) => state.productDetail);
    const selectedProduct = productDetail.selectedProduct;    

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-12">{selectedProduct.productName}</p>
                    </div>
                </div>
                <div className="card-image">
                    <img className="max-w-xl" alt={selectedProduct.productName} src={selectedProduct.productImageUrl}/>
                </div>
                <div className="content">
                    <p>{selectedProduct.productDescription}</p>
                    <p>${selectedProduct.productPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
    

};

export default ProductDetails;