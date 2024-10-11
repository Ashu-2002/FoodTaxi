import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { RES_INFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import MenuCategoryNested from "./MenuCategoryNested";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [expandedMenuIndex, setExpandedMenuIndex] = useState(0);
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
    // console.log(resInfo);
    const categories = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
       return c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    // c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    });
    //console.log(categories);
    // console.log(itemCards);
    return (
    <div className="w-1/2 m-auto p-4 ">
        <div className="m-2">
            <h2 className="text-3xl font-bold">{resDetails.name}</h2>
            <h5 className="text-md font-semibold">{resDetails.locality}</h5>
            <h5 className="text-md font-semibold">{resDetails.costForTwoMessage}</h5>
            <div className="text-md font-semibold flex items-center"><FaStar className="mr-1"/> {resDetails.avgRatingString}</div>
        </div>
        <hr className="h-2"/>
        <h3 className="text-2xl font-semibold mb-4 mx-2 text-center">Menu</h3>
        <div className="">
            {categories.map((category, index) => {
                return category.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? 
                 <MenuCategory key={category.card.card.title} category={category} isExpanded={expandedMenuIndex === index} setExpandedMenuIndex={() => setExpandedMenuIndex(index)} /> :
                 <MenuCategoryNested key={category.card.card.title} category={category} isExpanded={expandedMenuIndex === index} setExpandedMenuIndex={() => setExpandedMenuIndex(index)}/>
            })}
        </div>
    </div>
    );
};

export default RestaurantMenu;