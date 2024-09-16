import { IMG_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src = {IMG_LOGO}/>
            <h3 className="header-text">Food Taxi</h3>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/contact"> Contact Us </Link></li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;