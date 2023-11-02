import { useSelector, useDispatch } from "react-redux";
import { updateProductQuantity, removeProductFromCart } from "../store";


function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleEdit = (productId, quantity) => {
        dispatch(updateProductQuantity({productId, quantity}));
    };

    const handleClick = (productId) => {
        dispatch(removeProductFromCart(productId));
    };

    let tableRows = cart.productsInCart.map(product => {
        return (
            <tr key={product.productId}>
                <td>{product.productName}</td>
                <td><input type="number" min="0" max={product.productStock} value={product.quantity} onChange={(e) => handleEdit(product.productId, e.target.value)} /></td>
                <td>${(product.productPrice * product.quantity).toFixed(2)}</td>
                <td><button className="delete" onClick={(p) => handleClick(product.productId)} /></td>
            </tr>
        );
    });

    let totalPrice = cart.productsInCart.reduce((total, product) => total+= product.productPrice * product.quantity, 0);

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