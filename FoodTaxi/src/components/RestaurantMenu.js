import { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=456986&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setResInfo(json);
    };
    
    if (resInfo === null) {
        return <h1>Loading ....</h1>;
    }

    const resDetails = resInfo.data.cards[2].card.card.info;
    console.log(resDetails);
    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    

    return (
    <div className="container">
        <h1>{resDetails.name}</h1>
        <h5>{resDetails.areaName}</h5>
        <h5>{resDetails.costForTwo}</h5>
        <h5>{resDetails.avgRatingString}</h5>

        <hr></hr>
        <h3>Menu</h3>

        <div className="menu-items">
            <ul>
                {itemCards.map((item) => {
                    const {name, price, defaultPrice} = item.card.info;
                    return <li>{name} {price/100 ||defaultPrice/100} </li>;
                })}
            </ul>
        </div>
    </div>
    );
};

export default RestaurantMenu;