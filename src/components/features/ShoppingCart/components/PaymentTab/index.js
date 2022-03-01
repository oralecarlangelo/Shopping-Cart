import React from "react";
import DatePicker from "react-datepicker";

const PaymentTab = ({ selectedItems, handleTabChange }) => {
  const [date, setDate] = React.useState("");

  const totalPrice = selectedItems.reduce(
    (ack, item) => ack + item.totalPrice,
    0
  );

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl font-semibold text-center ">Payment Details</h1>
        <p className="text-center text-gray-500">
          Please Input your Payment Information to proceed to check out.
        </p>
      </div>
      <div className="flex flex-col h-32 max-w-lg gap-5 mx-auto ">
        <input className="input-default" placeholder="Card Holder's Name" />
        <input className="input-default" placeholder="5478-xxxx-xxxx-xxxx" />
        <div className="flex items-center gap-5">
          <p>EXPIRATION DATE</p>
          <DatePicker
            wrapperClassName="calendarContainer"
            selected={date}
            className="w-24 input-default"
            dateFormat="MM/yy"
            onChange={(e) => setDate(e)}
            showMonthYearPicker
            showFullMonthYearPicker
          />
          CVV
          <input className="w-24 input-default" maxLength={3} type="number" />
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="btn btn-primary"
            onClick={() => handleTabChange("Reciept")}
          >{`PAY ${formatter.format(totalPrice)}`}</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTab;
