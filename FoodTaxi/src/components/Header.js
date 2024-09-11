import { IMG_LOGO } from "../utils/constants";

const Header = () => (
    <div className="header">
        <div className="logo">
            <img src = {IMG_LOGO}/>
        </div>
        <div className="header-text">
            <h3>Food Taxi</h3>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;