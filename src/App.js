import React from "react";
import { useSelector } from "react-redux";
import Listings from "./components/features/Listings";
import { listingSelect } from "./components/features/Listings/listingSlice";
import ShoppingCart from "./components/features/ShoppingCart";

function App() {
  const { page } = useSelector(listingSelect);

  const pageSwitch = () => {
    switch (page) {
      case "shoppingcart":
        return <ShoppingCart />;
      default:
        return <Listings />;
    }
  };

  return (
    <div className="flex justify-center h-screen bg-sky-100">
      {pageSwitch()}
    </div>
  );
}

export default App;
