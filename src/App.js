import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";

function App() {

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <ProductsList />
        </div>
    );
};

export default App;