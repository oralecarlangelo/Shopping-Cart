import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listingSelect, tabChange } from "../Listings/listingSlice";
import CartTab from "./components/CartTab";
import DeliveryTab from "./components/DeliveryTab";
import PaymentTab from "./components/PaymentTab";
import RecieptTab from "./components/ReceiptTab";
import { shoppingCartSelect } from "./shoppingCartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartTabs = ["Cart", "Delivery", "Payment", "Reciept"];
  const { selectedItems } = useSelector(shoppingCartSelect);
  const { tab } = useSelector(listingSelect);

  const handleTabChange = (tab) => {
    dispatch(tabChange(tab));
  };

  const tabContent = () => {
    switch (tab.toLowerCase()) {
      case "cart":
        return (
          <CartTab
            selectedItems={selectedItems}
            handleTabChange={handleTabChange}
          />
        );
      case "delivery":
        return <DeliveryTab handleTabChange={handleTabChange} />;
      case "payment":
        return (
          <PaymentTab
            selectedItems={selectedItems}
            handleTabChange={handleTabChange}
          />
        );
      case "reciept":
        return <RecieptTab />;
      default:
        return (
          <CartTab
            selectedItems={selectedItems}
            handleTabChange={handleTabChange}
          />
        );
    }
  };

  return (
    <div className="w-full max-w-6xl p-10 m-20 bg-gray-50">
      <h1 className="p-5 text-5xl font-semibold text-center">Shopping Cart</h1>
      <div className="mt-10">
        <div className="flex w-full  border-[2px] border-gray-800 rounded-full">
          {cartTabs.map((tabs) => {
            return (
              <button
                // onClick={() => setSelectedTab(tabs)}
                className={`flex-1 px-10 py-2 uppercase rounded-full transition-all duration-300 ${
                  tab === tabs ? "bg-gray-800 text-gray-100" : ""
                }`}
              >
                {tabs}
              </button>
            );
          })}
        </div>
        {tabContent()}
      </div>
    </div>
  );
};

export default ShoppingCart;
