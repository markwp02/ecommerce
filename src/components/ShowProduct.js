import useNavigation from '../hooks/use-navigation';

function ShowProduct({children}) {
    const { navigate } = useNavigation();
    let productPath = `/productdetails/${children.productId}`;

    const outOfStock = children.productStock === 0 ? true : false;

    /**
     * Method to handle navigation
     * Meta key (Mac) and ctrl key (Windows) will use the href to navigate
     * to a new tab.
     * Prevent default to stop the app from refetching data from the server.
     * @param {*} event 
     * @returns 
     */
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(productPath);
    };

    return (
    <a href={productPath} className="card cursor-pointer" onClick={handleClick}>
        <div className="card-image">
            <img alt={children.productName} src={children.productImageUrl}/>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-6">{children.productName}</p>
                </div>
            </div>
            <div className="content">
                ${children.productPrice.toFixed(2)}
                {outOfStock && <p>Out of Stock</p>}
            </div>
        </div>
    </a>
    );
};

export default ShowProduct;