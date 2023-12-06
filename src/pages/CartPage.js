import { useSelector, useDispatch } from "react-redux";
import { updateProductQuantity, removeProductFromCart, resetCart, useAddCustomerOrderMutation} from "../store";
import useNavigation from '../hooks/use-navigation';
import { CUSTOMER_ORDER_BASE_PATH, HOME_PAGE_PATH } from "../constants/PathConstants";

function CartPage() {
    const { navigate } = useNavigation();
    const cart = useSelector((state) => state.cart);
    const [addCustomerOrder, results] = useAddCustomerOrderMutation();
    const dispatch = useDispatch();

    const handleEdit = (productId, newProductQuantity) => {
        dispatch(updateProductQuantity({productId, newProductQuantity}));
    };

    const handleBuyClick =  async () => {
        let customerOrderTotalPrice = calculateTotalPrice();
        let orderProducts = cart.orderProductsList;

        const results = await addCustomerOrder({ customerOrderTotalPrice, orderProducts }).unwrap();

        dispatch(resetCart());

        let customerOrderPath = `${CUSTOMER_ORDER_BASE_PATH}${results.customerOrderId}`;
        navigate(customerOrderPath);
    };

    const handleReturnClick = (event) => {
        singlePageNavigation(event, HOME_PAGE_PATH);
    };

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

    const handleDeleteClick = (productId) => {
        dispatch(removeProductFromCart(productId));
    };

    const calculateTotalPrice = () => {
        let totalPrice = cart.orderProductsList.reduce((total, orderProduct) => total+= orderProduct.product.productPrice * orderProduct.orderProductQuantity, 0);
        return totalPrice.toFixed(2);
    }

    let tableRows = cart.orderProductsList.map(orderProduct => {
        return (
            <tr key={orderProduct.product.productId}>
                <td>{orderProduct.product.productName}</td>
                <td><input type="number" min="0" max={orderProduct.product.productStock} value={orderProduct.orderProductQuantity} onChange={(e) => handleEdit(orderProduct.product.productId, e.target.value)} /></td>
                <td>${(orderProduct.product.productPrice * orderProduct.orderProductQuantity).toFixed(2)}</td>
                <td><button className="delete" onClick={(p) => handleDeleteClick(orderProduct.product.productId)} /></td>
            </tr>
        );
    });

    let emptyCart = cart.orderProductsList.length === 0 ? true : false;

    return (
        <div>
            <p className="title">Shopping Cart</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
                <tfoot>
                    <tr>
                        <th />
                        <th>Total</th>
                        <th>${(calculateTotalPrice())}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="columns">
                <div className="column is-one-fifth">
                    <a href={HOME_PAGE_PATH} className="button is-danger" onClick={handleReturnClick}>Return</a>
                </div>
                <div className="column">
                    <button className="button is-primary" disabled={emptyCart} onClick={handleBuyClick}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;