import { IMG_LOGO } from "../utils/constants";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src = {IMG_LOGO}/>
            <h3 className="header-text">Food Taxi</h3>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;