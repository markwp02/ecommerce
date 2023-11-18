import { useSelector } from 'react-redux';
import useNavigation from '../hooks/use-navigation';
import SearchProduct from './SearchProduct';
import { GoGlobe } from "react-icons/go";

function Navbar() {
    const { navigate } = useNavigation();
    const cart = useSelector((state) => state.cart);
    const cartPagePath = '/cart';
    const signupPagePath = '/signup';
    const loginPagePath = '/login';
    const homePath = '/';

    const onLogoClick = (event) => {
        singlePageNavigation(event, homePath);
    };

    const onCartClick = (event) => {
       singlePageNavigation(event, cartPagePath);
    };

    const onLoginPageClick = (event) => {
        singlePageNavigation(event, loginPagePath);
    }

    /**
     * Method to handle navigation
     * Meta key (Mac) and ctrl key (Windows) will use the href to navigate
     * to a new tab.
     * Prevent default to stop the app from refetching data from the server.
     * @param {*} event 
     * @returns 
     */
    const singlePageNavigation = (event, path) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(path);
    }

    let totalInCart = cart.orderProductsList.reduce((total, orderProduct) => Number(total) + Number(orderProduct.orderProductQuantity), 0);
    let cartButtonText = totalInCart > 0 ? `Cart (${totalInCart})` : "Cart"

    return (
        <div className="navbar">
            <a href={homePath} className="navbar-item" onClick={onLogoClick}>
                eCommerce <GoGlobe />
            </a>
            <div className="navbar-item">
                <SearchProduct />
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a href={cartPagePath} className="button is-light" onClick={onCartClick}>
                            {cartButtonText}
                        </a>
                        <a href={signupPagePath} className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a href={loginPagePath} className="button is-light" onClick={onLoginPageClick}>
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;