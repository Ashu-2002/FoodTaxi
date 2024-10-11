import RestaurantMenuCard from "./RestaurantMenuCard";
import { FaChevronDown } from "react-icons/fa";

const MenuCategory = ({category, isExpanded, setExpandedMenuIndex}) => {
    const {title, itemCards} = category?.card?.card || category;
    //console.log(title, itemCards);
    return (
        <div className="">
            <div className="m-2 py-4 px-6 text-lg font-bold flex justify-between items-center bg-gray-300 rounded-lg" 
            onClick={setExpandedMenuIndex}
            >
                <div>{title + " (" + itemCards.length +")"}</div>
                <div><FaChevronDown/></div>
            </div>
            {
            isExpanded?
                itemCards.map((item) => {
                    return <RestaurantMenuCard key={item.card.info.id} item={item}/>
                }): <></>
            }
        </div>
    );
}

export default MenuCategory;