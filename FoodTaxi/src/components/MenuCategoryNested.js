import MenuCategory from "./MenuCategory";

// Higher Order Component
const MenuCategoryNested = ({category, isExpanded, setExpandedMenuIndex}) => {
    const {title, categories} = category?.card?.card;

    return (
        <div className="bg-gray-100 px-2 py-4 my-4 rounded-xl">
            <div className="text-xl py-2 px-6 font-bold">
                {title}
            </div>
            {/* {console.log(categories)} */}
            {
                categories.map((c) => {
                    return <MenuCategory key={c.title} isExpanded={isExpanded} setExpandedMenuIndex={setExpandedMenuIndex} category={c}/>;
                })
            }
        </div>
    );
}

export default MenuCategoryNested;