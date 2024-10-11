import { MENU_ITEM_IMG } from "../utils/constants";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import {useState, useEffect} from "react";

const RestaurantMenuCard = ({item}) => {
    const {name, price, defaultPrice, description, imageId, isVeg, id} = item.card.info;
    const [quantity, setQuantity] = useState(0);
    const menuItems = useSelector((store) => store.cart.items);

    const dispatcher = useDispatch();
    const handleClick = (item) => {
        console.log("clicked");
        dispatcher(addItem(item));
        setQuantity(quantity+1);
    } 

    useEffect(() => {
        const index = menuItems.findIndex((item) => item?.card?.info.id === id);
        if(index >= 0){
            const i = menuItems.at(index);
            setQuantity(i.quantity);
        }
        // else{
        //     setQuantity(item.quantity);
        // }

    }, []);

    return (
        <div className="flex justify-between items-center mx-4 my-4 px-4 pt-6 pb-8 bg-gray-200 rounded-lg">
            <div className="w-4/5 p-1">
                {
                isVeg?
                <div><FaLeaf className="text-green-600 mx-1"/></div> : 
                <div><FaDrumstickBite className="text-red-700 mx-1"/></div>
                }
                
                <div className="text-md font-semibold m-1">{name}</div>
                <div className="font-semibold m-1"> ₹ {price/100 || defaultPrice/100}</div>
                <div className=" font-light m-1">{description}</div>
            </div>
            <div className="w-40 h-40 object-fill overflow-hidden rounded-lg flex items-center">
                <img className="rounded-lg" src={MENU_ITEM_IMG + imageId}/>
                <button 
                className="w-20 p-2 ml-10 mt-40 absolute bg-black rounded-md text-white hover:bg-neutral-900 hover:shadow-lg"
                onClick={() => handleClick(item)}
                > 
                {quantity > 0 ? quantity+" +" : "Add"}
                </button>
            </div>
        </div>
    );
}

export default RestaurantMenuCard;