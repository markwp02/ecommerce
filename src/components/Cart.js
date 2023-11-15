import { useSelector, useDispatch } from "react-redux";
import { updateProductQuantity, removeProductFromCart } from "../store";
import { useAddCustomerOrderMutation } from "../store";


function Cart() {
    const cart = useSelector((state) => state.cart);
    const [addCustomerOrder, results] = useAddCustomerOrderMutation();
    const dispatch = useDispatch();

    const handleEdit = (productId, newProductQuantity) => {
        dispatch(updateProductQuantity({productId, newProductQuantity}));
    };

    const handleBuyClick = () => {
        let totalPrice = calculateTotalPrice();
        addCustomerOrder({ customerOrderTotalPrice: totalPrice, orderProducts: cart.orderProductsList});
    };

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
            <button className="button is-primary" onClick={handleBuyClick}>Buy Now</button>
        </div>

    );
};

export default Cart;