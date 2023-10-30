import useNavigation from '../hooks/use-navigation';

function ShowProduct({children}) {
    const { navigate } = useNavigation();
    let productPath = `/productdetails/${children.productId}`;

    let content;
    if(children.productStock === 0) {
        content = "Out of Stock"; 
    } else {
        content = "$" + children.productPrice.toFixed(2);
    }

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
                {content}
            </div>
        </div>
    </a>
    );
};

export default ShowProduct;