import { useSelector } from "react-redux";
import RestaurantMenuCard from "./RestaurantMenuCard";
import {BsTrash} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);    
    const dispatcher = useDispatch();
    const handleClick = () => {
        dispatcher(clearCart());
    }
    
    return (
        <div className="w-1/2 mx-auto">
            <div className="text-3xl mb-4 mt-10 mx-2 px-6 font-bold flex justify-between">
                <div className="flex items-center">
                    <div>Cart</div> 
                    <div className="mx-2"><MdOutlineShoppingCart/></div>
                </div>
                <div className="text-2xl font-normal hover:cursor-pointer"
                onClick={handleClick}
                ><BsTrash color="red"/></div>
            </div>
            {cartItems.map((item) => {
                return <RestaurantMenuCard key={item.card.info.id} item={item}/>;
            })}
        </div>
    );
}

export default Cart;