import RestaurantCard from "./RestaurantCard";
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
  <div className="bg-zinc-100 font-trebuchet">
        <div className="">
          <button className={"py-2 px-2 mt-4 mx-4 ml-80 rounded-lg border-black border-1 text-sm font-medium " + (topRatedFilter? "bg-green-700  text-white" : "bg-gray-300")} onClick={(e) => {
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
        <div className="mx-2 px-2 text-center">
            <input type="text" className="py-1 px-2 border border-black rounded-lg" placeholder="Search here ..." value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            <button className="py-2 px-2 m-4 rounded-lg bg-green-700 text-sm text-white font-light"
             onClick={() => {
              const data = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredList(data);
            }} >Search</button>
        </div>
        <div className="flex justify-center flex-wrap w-10/12 m-auto">
            {
              filteredList.map(restaurant => <div className="w-1/6 m-10 rounded-lg overflow-visible">
                <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link></div>)
            }
        </div>
    </div>
  )
};

export default Body;