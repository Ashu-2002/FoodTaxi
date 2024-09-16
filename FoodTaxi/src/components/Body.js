import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resMockData";
import { useEffect, useState } from "react";

let threeResData = [{
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
    }},{
  info: {
    "id": "36931",
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
}},{
info: {
  "id": "32691",
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
  "avgRating": 3.9,
  "avgRatingString": "4.2",
  "sla": {
    "deliveryTime": 40,
  }
}}
];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRatedFilter, setTopRatedFilter] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    console.log(json);
  };

  return (
  <div className="body">
        <div className="filters">
          <button className={"btn-top-rated-filter " + (topRatedFilter? "btn-green" : "btn-default")} onClick={(e) => {
            if(topRatedFilter){
              setFilteredList(listOfRestaurants);
              setTopRatedFilter(false);
            }
            else{
              const data = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.2);
              setFilteredList(data);
              setTopRatedFilter(true);
            }
            console.log(e);
          }}
          >Top Rated Restaurants</button>
        </div>
        <div className="search">
            <input type="text" placeholder="Search here ..." value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            <button onClick={() => {
              const data = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredList(data);
            }} >Search</button>
        </div>
        <div className="res-container">
            {
              filteredList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
            }
        </div>
    </div>
  )
};

export default Body;