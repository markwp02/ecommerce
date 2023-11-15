import { useSelector, useDispatch } from "react-redux";
import { updateProductQuantity, removeProductFromCart } from "../store";


function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleEdit = (productId, quantity) => {
        dispatch(updateProductQuantity({productId, quantity}));
    };

    const handleDeleteClick = (productId) => {
        dispatch(removeProductFromCart(productId));
    };

    let tableRows = cart.orderProductsList.map(orderProduct => {
        return (
            <tr key={orderProduct.product.productId}>
                <td>{orderProduct.product.productName}</td>
                <td><input type="number" min="0" max={orderProduct.product.productStock} value={orderProduct.productQuantity} onChange={(e) => handleEdit(orderProduct.product.productId, e.target.value)} /></td>
                <td>${(orderProduct.product.productPrice * orderProduct.productQuantity).toFixed(2)}</td>
                <td><button className="delete" onClick={(p) => handleDeleteClick(orderProduct.product.productId)} /></td>
            </tr>
        );
    });

    let totalPrice = cart.orderProductsList.reduce((total, orderProduct) => total+= orderProduct.product.productPrice * orderProduct.productQuantity, 0);

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
                        <th>${totalPrice.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
            
        </div>

    );
};

export default Cart;