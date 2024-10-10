import { IMG_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="font-segoe font flex justify-between items-center border-b-2 border-black shadow-xl">
        <div className="flex items-center">
            <img className="logo w-28 mx-2" src = {IMG_LOGO}/>
            <h3 className="text-4xl font-bold">Food Taxi</h3>
        </div>
        <div >
            <ul className="flex items-center m-2 px-8 text-xl">
                <li className="m-2"><Link to="/"> Home </Link></li>
                <li className="m-2"><Link to="/about"> About </Link></li>
                <li className="m-2"><Link to="/contact"> Contact Us </Link></li>
                <li className="m-2">Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;