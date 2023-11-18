import Sidebar from "../components/Sidebar";
import ProductsList from "../components/ProductsList";

function HomePage() {
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

export default HomePage;