function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                eCommerce
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <button className="button is-primary is-light">
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;