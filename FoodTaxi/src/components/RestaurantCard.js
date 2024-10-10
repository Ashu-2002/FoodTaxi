import { IMG_RES_CDN } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId} = props.resData.info;
    const {deliveryTime} = props.resData.info.sla;

    return (
        <div className="hover:cursor-pointer hover:opacity-90">
            <img className="w-80 h-48 m-auto rounded-lg object-cover" alt= "res-card" src={ IMG_RES_CDN + cloudinaryImageId }/>
            <div className="m-2 p-2">
                <div className="text-lg font-bold mb-1">{name}</div>
                <div className="mb-1">{cuisines.join(", ")}</div>
                <div className="flex items-center mb-1 font-semibold"><FaStar className="mr-1" color="green"/> {avgRating} · {deliveryTime} mins </div>
            </div>
        </div>
    )
};

export default RestaurantCard;