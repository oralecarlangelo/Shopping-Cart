import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedItem,
  shoppingCartSelect,
} from "../ShoppingCart/shoppingCartSlice";
import { getAllListings, listingSelect, pageChange } from "./listingSlice";

const Listings = () => {
  const dispatch = useDispatch();
  const { shoes } = useSelector(listingSelect);
  const { selectedItems } = useSelector(shoppingCartSelect);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    dispatch(getAllListings());
  }, []);

  const onAddClick = (data) => {
    dispatch(addSelectedItem(data));
  };

  const getTotalItems = (items) => {
    return items.reduce((ack, item) => ack + item.count, 0);
  };

  const handlePageChange = (page) => {
    if (getTotalItems(selectedItems) > 0) {
      dispatch(pageChange(page));
    }
  };

  return (
    <div className="w-full max-w-6xl">
      <div className="flex justify-between p-5 ">
        <h1 className="text-5xl font-semibold text-center">Listings</h1>
        <button
          className="relative w-10 h-10 text-xl bg-gray-300 rounded-full"
          onClick={() => handlePageChange("shoppingcart")}
        >
          <i class="fa-solid fa-cart-shopping"></i>
          <div className="absolute w-5 h-5 text-sm bg-white rounded-full -right-2 -bottom-1">
            {getTotalItems(selectedItems)}
          </div>
        </button>
      </div>
      <div className="flex flex-wrap justify-center w-full h-32 gap-10 mt-10">
        {shoes &&
          shoes.map((shoe, i) => {
            const splitPrice = shoe.price.toString().split("");
            return (
              <div key={i} className="w-[300px] p-5 bg-gray-100 shadow-lg">
                <div
                  style={{ backgroundImage: `url(${shoe.img})` }}
                  className="h-48 bg-center bg-cover"
                />
                <div>
                  <h4 className="text-xl">{shoe.itemName}</h4>
                  <p className="text-gray-600">{shoe.category}</p>
                  <div className="flex justify-between">
                    <p className="text-gray-600">{`₱${splitPrice.shift()},  ${splitPrice
                      .join("")
                      .toString()}`}</p>
                    <button
                      className="transition-all duration-300 rounded-full px-7 hover:bg-gray-700 hover:text-gray-100"
                      onClick={() => onAddClick(shoe)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Listings;
