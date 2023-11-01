import useNavigation from '../hooks/use-navigation';

function Navbar() {
    const { navigate } = useNavigation();

    const onCartClick = () => {
        navigate("/cart");
    };

    return (
        <div className="navbar">
            <div className="navbar-brand">
                eCommerce
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button className="button is-primary is-light" onClick={onCartClick}>
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;