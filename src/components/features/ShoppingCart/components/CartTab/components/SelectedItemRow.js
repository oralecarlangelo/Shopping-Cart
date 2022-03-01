import React from "react";
import { useDispatch } from "react-redux";
import {
  editSelectedItem,
  removeSelectedItem,
} from "../../../shoppingCartSlice";

const SelectedItemRow = ({ selected }) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(selected.count);

  React.useEffect(() => {
    dispatch(editSelectedItem({ id: selected.id, count }));
  }, [count]);

  const handleRemoveItem = (id) => {
    dispatch(removeSelectedItem(id));
  };

  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  return (
    <div className="grid grid-cols-5 p-3">
      <div className="flex gap-2">
        <div
          className="bg-red-500 bg-center bg-cover w-14 h-14"
          style={{ backgroundImage: `url(${selected.img})` }}
        />
        <div>
          <h3 className="text-xl text-gray-800">
            {truncate(selected.itemName, 20, "...")}
          </h3>
          <p className="text-gray-500">{selected.category}</p>
        </div>
      </div>
      <div className="text-gray-500">43</div>
      <div className="text-gray-500">{selected.color}</div>
      <div className="text-gray-500">
        <input
          type="number"
          className="w-20 h-full px-5 bg-slate-200"
          onChange={(e) => setCount(e.currentTarget.value)}
          value={count}
        />
      </div>
      <div className="flex items-start justify-between">
        <p className="text-gray-500">{`${formatter.format(
          selected.totalPrice
        )}`}</p>
        <button
          className="text-xl"
          onClick={() => handleRemoveItem(selected.id)}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedItemRow;
