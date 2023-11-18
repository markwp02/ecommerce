import { useFetchCustomerOrderByIdQuery } from "../store";
import getIdFromPath from "../hooks/get-id-from-path";
import useNavigation from "../hooks/use-navigation";
import { HOME_PAGE_PATH } from "../constants/PathConstants";

function CustomerOrderPage() {
    const { currentPath, navigate } = useNavigation();    
    const customerOrderId = getIdFromPath(currentPath);
    const {data, error, isFetching} = useFetchCustomerOrderByIdQuery(customerOrderId);

    if (isFetching) {
        return <div>Is Loading product</div>
    } else if (error) {
        return <div>Error loading product</div>
    } 

    /**
     * Refresh on navigation to update the product stock
     * @param {*} event 
     * @returns 
     */
    const handleContinueShoppingClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        navigate(HOME_PAGE_PATH);
    };

    let tableRows = data.orderProducts.map(orderProduct => {
        return (
            <tr key={orderProduct.product.productId}>
                <td>{orderProduct.product.productName}</td>
                <td>{orderProduct.orderProductQuantity}</td>
                <td>${(orderProduct.product.productPrice * orderProduct.orderProductQuantity).toFixed(2)}</td>
            </tr>
        );
    });

    return (
        <div>
            <p className="title">Completed Order</p>
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
                        <th>${data.customerOrderTotalPrice}</th>
                    </tr>
                </tfoot>
            </table>
            <p className="block">{data.orderStatus.orderStatusName}</p>
            <a href={HOME_PAGE_PATH} className="button is-primary" onClick={handleContinueShoppingClick}>Continue Shopping</a>
        </div>
    );
};

export default CustomerOrderPage;