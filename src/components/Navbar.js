import { useSelector } from 'react-redux';
import useNavigation from '../hooks/use-navigation';
import SearchProduct from './SearchProduct';
import { GoGlobe } from "react-icons/go";

function Navbar() {
    const { navigate } = useNavigation();
    const cart = useSelector((state) => state.cart);

    const onLogoClick = () => {
        let homePath = '/';
        navigate(homePath);
    };

    const onCartClick = () => {
        let cartPagePath = '/cart';
        navigate(cartPagePath);
    };

    let totalInCart = cart.orderProductsList.reduce((total, orderProduct) => Number(total) + Number(orderProduct.orderProductQuantity), 0);
    let cartButtonText = totalInCart > 0 ? `Cart (${totalInCart})` : "Cart"

    return (
        <div className="navbar">
            <button className="navbar-item" onClick={onLogoClick}>
                eCommerce <GoGlobe />
            </button>
            <div className="navbar-item">
                <SearchProduct />
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