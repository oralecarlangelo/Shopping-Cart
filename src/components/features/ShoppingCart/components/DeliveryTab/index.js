import React from "react";

const DeliveryTab = ({ handleTabChange }) => {
  return (
    <div>
      <h1 className="p-5 text-4xl font-semibold text-center">
        Shipping Information
      </h1>
      <div className="grid grid-cols-2 gap-5 ">
        <input className="input-default" placeholder="First Name" />
        <input className="input-default" placeholder="Last Name" />
        <input className="input-default" placeholder="Telephone" />
        <input className="input-default" placeholder="Company" />
        <input
          className="col-span-2 input-default"
          placeholder="Street Address"
        />
        <input className="input-default" placeholder="City" />
        <input className="input-default" placeholder="Zip Code" />
        <input className="input-default" placeholder="State" />
        <input className="input-default" placeholder="Country" />
      </div>
      <div className="flex justify-between p-10">
        <button
          className="btn btn-secondary"
          onClick={() => handleTabChange("")}
        >
          BACK TO CART
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleTabChange("Payment")}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default DeliveryTab;
