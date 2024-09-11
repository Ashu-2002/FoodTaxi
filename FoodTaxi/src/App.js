import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


const oneResData = {
    "info": {
      "id": "326931",
      "name": "Chinese Wok",
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


const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body/>
        {/* <Footer/> */}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);