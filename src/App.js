import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import ProductDetails from "./components/ProductDetails";

function App() {

    return (
        <div className="container">
            <Navbar />
            <div className="columns">
                <div className="column is-one-quarter">
                    <Sidebar />
                </div>
                <div className="column is-three-quarters">
                    <Route path="/">
                        <ProductsList />
                    </Route>
                    <Route path="/productdetails">
                        <ProductDetails />
                    </Route>
                </div>
            </div>
        </div>

    );
};

export default App;