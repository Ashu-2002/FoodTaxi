import { useEffect, useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { FaStar } from "react-icons/fa6";
import { RES_INFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch(RES_INFO_URL + resId);
        const json = await data.json();
        setResInfo(json);
    };
    
    if (resInfo === null) {
        return <h1>Loading ....</h1>;
    }

    const resDetails = resInfo?.data?.cards[2]?.card?.card?.info;
    // console.log(resDetails);
    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    

    return (
    <div className="w-1/2 m-auto p-4 ">
        <div className="m-2">
            <h2 className="text-3xl font-bold">{resDetails.name}</h2>
            <h5 className="text-md font-semibold">{resDetails.locality}</h5>
            <h5 className="text-md font-semibold">{resDetails.costForTwoMessage}</h5>
            <div className="text-md font-semibold flex items-center"><FaStar className="mr-1"/> {resDetails.avgRatingString}</div>
        </div>
        <hr className="h-2"/>
        <h3 className="text-2xl font-semibold m-2 text-center">Menu</h3>

        <div className="">
            <ul>
                {/* {console.log(itemCards[1])} */}
                {itemCards.map((item) => {
                    return <li key={item.id}><RestaurantMenuCard item = {item}/> </li>;
                })}
            </ul>
        </div>
    </div>
    );
};

export default RestaurantMenu;