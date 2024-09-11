import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resMockData";

const oneResData = {
    info: {
      "id": "326931",
      name: "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Late GA Kulkarni Path",
      "areaName": "Kothrud",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "avgRatingString": "4.2",
      "sla": {
        "deliveryTime": 40,
      }
  }
};


const Body = () => (
    <div className="body">
        <div className="search">
            <input type="text" placeholder="Search here ..."/>
        </div>
        <div className="res-container">
            {
                resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
            }
        </div>
    </div>
);

export default Body;