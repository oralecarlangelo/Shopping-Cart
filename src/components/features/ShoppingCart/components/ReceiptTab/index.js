import React from "react";
import { useDispatch } from "react-redux";
import { pageChange } from "../../../Listings/listingSlice";
import { selectedItemsCleanup } from "../../shoppingCartSlice";

const RecieptTab = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => {
      dispatch(selectedItemsCleanup());
    };
  }, []);

  const handlePageChange = (page) => {
    dispatch(pageChange(page));
  };
  return (
    <div className="flex flex-col max-w-lg gap-5 p-10 mx-auto">
      <h1 className="text-4xl font-semibold text-center ">
        Thank you for your order!
      </h1>
      <p className="text-center text-gray-500">
        Your order will be prepared and shipped. please expect the package to
        arrive in 1 week.
      </p>
      <button
        className="transition-all duration-300 btn btn-secondary hover:btn-primary"
        onClick={() => handlePageChange("")}
      >
        Browse More
      </button>
    </div>
  );
};

export default RecieptTab;
