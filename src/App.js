import Navbar from "./components/Navbar";
import Route from "./components/Route";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CustomerOrderPage from "./pages/CustomerOrderPage";
import HomePage from "./pages/HomePage";

function App() {

    return (
        <div className="container">
            <Navbar />
            <Route regexPath="^/$">
                <HomePage />
            </Route>
            <Route regexPath="^/productdetails/[0123456789]+$">
                <ProductDetailsPage />
            </Route>
            <Route regexPath="^/cart$">
                <CartPage />
            </Route>
            <Route regexPath="^/customerOrder/[0123456789]+$">
                <CustomerOrderPage />
            </Route>
        </div>

    );
};

export default App;