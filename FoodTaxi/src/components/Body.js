import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resMockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
              filteredList.map(restaurant => <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>)
            }
        </div>
    </div>
  )
};

export default Body;