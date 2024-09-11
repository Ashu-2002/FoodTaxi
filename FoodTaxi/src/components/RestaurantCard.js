import { IMG_RES_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId} = props.resData.info;

    return (
        <div className="res-card">
            <img src={ IMG_RES_CDN + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
};

export default RestaurantCard;