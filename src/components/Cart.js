import { useSelector } from "react-redux";


function Cart() {
    const cart = useSelector((state) => state.cart);

    let tableRows = cart.productsInCart.map(product => {
        return (
            <tr key={product.productId}>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>${(product.productPrice * product.quantity).toFixed(2)}</td>
            </tr>
        );
    });

    let totalPrice = cart.productsInCart.reduce((total, product) => total+= product.productPrice * product.quantity, 0);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
                <tfoot>
                    <th />
                    <th />
                    <th>${totalPrice.toFixed(2)}</th>
                </tfoot>
            </table>
            
        </div>

    );
};

export default Cart;