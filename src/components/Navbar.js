import { useSelector } from 'react-redux';
import useNavigation from '../hooks/use-navigation';
import SearchProduct from './SearchProduct';
import { GoGlobe } from "react-icons/go";
import { CART_PAGE_PATH, SIGNUP_PAGE_PATH, LOGIN_PAGE_PATH, HOME_PAGE_PATH } from '../constants/PathConstants';

function Navbar() {
    const { navigate } = useNavigation();
    const cart = useSelector((state) => state.cart);
    const customer = useSelector((state) => state.customer);

    const loggedInCustomer = customer.loggedIn;
    const isLoggedIn = loggedInCustomer.customerId != null ? true: false;

    const onLogoClick = (event) => {
        singlePageNavigation(event, HOME_PAGE_PATH);
    };

    const onCartClick = (event) => {
       singlePageNavigation(event, CART_PAGE_PATH);
    };

    const onLoginPageClick = (event) => {
        singlePageNavigation(event, LOGIN_PAGE_PATH);
    }

    const onSignupPageClick = (event) => {
        singlePageNavigation(event, SIGNUP_PAGE_PATH);
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

    let loginContent = (
        <div>
            <a href={SIGNUP_PAGE_PATH} className="button is-primary" onClick={onSignupPageClick}>
                <strong>Sign up</strong>
            </a>
            <a href={LOGIN_PAGE_PATH} className="button is-light" onClick={onLoginPageClick}>
                Log in
            </a>
        </div>
    );
    
    let customerContent = (
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
            {loggedInCustomer.customerFirstName}
            </a>
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#">
                Details
                </a>
                <a class="navbar-item" href="#">
                Orders
                </a>
                <a class="navbar-item" href="#">
                Log out
                </a>
            </div>
        </div>
    );


    return (
        <div className="navbar">
            <a href={HOME_PAGE_PATH} className="navbar-item" onClick={onLogoClick}>
                eCommerce <GoGlobe />
            </a>
            <div className="navbar-item">
                <SearchProduct />
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a href={CART_PAGE_PATH} className="button is-light" onClick={onCartClick}>
                            {cartButtonText}
                        </a>
                        {!isLoggedIn && loginContent}
                    </div>
                </div>
                {isLoggedIn && customerContent}
            </div>
        </div>
    );
};

export default Navbar;