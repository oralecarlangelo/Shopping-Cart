import React from "react";
import { useDispatch } from "react-redux";
import SelectedItemRow from "./components/SelectedItemRow";
import { pageChange } from "../../../Listings/listingSlice";

const CartTab = ({ selectedItems, handleTabChange }) => {
  const dispatch = useDispatch();
  const totalPrice = selectedItems.reduce(
    (ack, item) => ack + item.totalPrice,
    0
  );

  React.useEffect(() => {
    if (selectedItems.length === 0) {
      dispatch(pageChange(""));
    }
  }, [selectedItems]);

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  const handleContinueShopping = (listing) => {
    dispatch(pageChange(listing));
  };

  return (
    <div className="p-8 bg-gray-50">
      <div
        className={`grid grid-cols-5 p-3 ${
          selectedItems.length > 0 && "border-b border-gray-700"
        }`}
      >
        <p>ADDED ITEMS</p>
        <p>SIZE</p>
        <p>COLOR</p>
        <p>QUANTITY</p>
        <p>PRICE</p>
      </div>
      <div className="">
        {selectedItems.map((selected) => (
          <SelectedItemRow selected={selected} />
        ))}
      </div>
      {selectedItems.length > 0 && (
        <div>
          <div className="flex justify-end max-w-[980px] ">
            <p className="flex items-center gap-5 text-base text-gray-500 ">
              TOTAL PRICE:{" "}
              <span className="text-2xl text-gray-900">{`${formatter.format(
                totalPrice
              )}`}</span>
            </p>
          </div>
          <div className="flex justify-between mt-10">
            <button
              className="btn btn-secondary"
              onClick={() => handleContinueShopping("")}
            >
              CONTINUE SHOPPING
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleTabChange("Delivery")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTab;
