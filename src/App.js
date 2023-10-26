import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";

function App() {

    return (
        <div className="columns">
            <div className="column is-one-quarter">
                <Sidebar />
            </div>
            <div className="column is-three-quarters">
                <ProductsList />
            </div>
        </div>
    );
};

export default App;