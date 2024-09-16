import { IMG_RES_CDN } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId} = props.resData.info;
    const {deliveryTime} = props.resData.info.sla;

    return (
        <div className="res-card">
            <img className="res-card-img" alt= "res-card" src={ IMG_RES_CDN + cloudinaryImageId }/>
            <div className="res-card-data">
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <h5><FaStar color="green"/> {avgRating} · {deliveryTime} mins </h5>
            </div>
        </div>
    )
};

export default RestaurantCard;