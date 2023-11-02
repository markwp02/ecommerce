import { useSelector } from 'react-redux';
import useNavigation from '../hooks/use-navigation';

function Navbar() {
    const { navigate } = useNavigation();
    const cart = useSelector((state) => state.cart);

    const onCartClick = () => {
        navigate("/cart");
    };

    let totalInCart = cart.productsInCart.reduce((total, product) => total+= product.quantity, 0);
    let cartButtonText = totalInCart > 0 ? `Cart (${totalInCart})` : "Cart"

    return (
        <div className="navbar">
            <div className="navbar-brand">
                eCommerce
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button className="button is-primary is-light" onClick={onCartClick}>
                            {cartButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;