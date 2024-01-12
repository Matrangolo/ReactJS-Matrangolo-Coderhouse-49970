import CartWidget from "./CartWidget";
import Logo from "../assets/logoDrop.webp";

const NavBar = () => {
    return (
        <nav className="container-fluid fondoNav text-center">
            <div className="row">
                <div className="col-2">
                <img src={Logo} alt="Logo-Drop" style={{ width: '100px', height: '100px' }} />
                </div>
                <div className="col-8 d-flex align-items-center">
                    <button className="btn btn-primary">PlayStation</button>
                    <button className="btn btn-success mx-2">Xbox</button>
                    <button className="btn btn-danger">Nintendo</button>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
