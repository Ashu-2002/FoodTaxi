import { MENU_ITEM_IMG } from "../utils/constants";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa6";

const RestaurantMenuCard = (item) => {
    const {name, price, defaultPrice, description, imageId, isVeg} = item.item.card.info;
    return (
        <div className="flex justify-between items-center mx-4 my-4 px-4 py-6 bg-gray-200 rounded-lg">
            <div className="w-4/5 p-1">
                {
                isVeg?
                <div className><FaLeaf className="text-green-600 mx-1"/></div> : 
                <div className><FaDrumstickBite className="text-red-700 mx-1"/></div>
                }
                
                <div className="text-md font-semibold m-1">{name}</div>
                <div className="font-semibold m-1"> ₹ {price/100 || defaultPrice/100}</div>
                <div className=" font-light m-1">{description}</div>
            </div>
            <div className="w-40 h-40  object-fill overflow-hidden rounded-lg ">
                <img className="rounded-lg" src={MENU_ITEM_IMG + imageId}/>
            </div>
        </div>
    );
}

export default RestaurantMenuCard;