import Navbar from "./components/Navbar";
import Route from "./components/Route";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CustomerOrderPage from "./pages/CustomerOrderPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

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
            <Route regexPath="^/login">
                <LoginPage />
            </Route>
            <Route regexPath="^/signup">
                <SignupPage />
            </Route>
        </div>

    );
};

export default App;