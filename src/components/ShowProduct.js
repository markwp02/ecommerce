import useNavigation from '../hooks/use-navigation';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store';

function ShowProduct({children}) {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    
    let content;
    if(children.productStock === 0) {
        content = "Out of Stock"; 
    } else {
        content = "$" + children.productPrice.toFixed(2);
    }

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(setSelectedProduct(children));
        navigate("/productdetails");
    };

    return (
    <div className="card cursor-pointer" onClick={handleClick}>
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
    </div>
    );
};

export default ShowProduct;