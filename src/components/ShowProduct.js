function ShowProduct({children}) {
    
    let content;
    if(children.productStock === 0) {
        content = "Out of Stock"; 
    } else {
        content = "$" + children.productPrice.toFixed(2);
    }
    
    return (
    <div className="card">
        <div className="card-image">
            <img alt={children.productName} src={children.productUrl}/>
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
    </div>
    );
};

export default ShowProduct;