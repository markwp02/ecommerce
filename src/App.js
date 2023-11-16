import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CustomerOrderPage from "./pages/CustomerOrderPage";

function App() {

    return (
        <div className="container">
            <Navbar />
            <Route regexPath="^/$">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <Sidebar />
                    </div>
                    <div className="column is-three-quarters">
                        <ProductsList />
                    </div>
                </div>
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