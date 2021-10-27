import React from "react";
import "css/main.css";
import cn from "classnames";

const Item_details = ({ title, currency_code, price, quantity }) => {
   const levelLow = 10;
  const levelHigh = 20;
  const titleLetters = "".concat(title).split("", 50);
  const preparedTitle =
    titleLetters.length < 50 ? title : `${titleLetters.join("")}...`;

  return (
    <div className="item-details">
      <p className="item-title">{preparedTitle}</p>
      <p className="item-price">
        {price}
        {currency_code}
      </p>
      <p
        className={cn("item-quantity", {
          "level-low": quantity <= levelLow,
          "level-medium": quantity <= levelHigh && quantity > levelLow,
          "level-high": quantity > levelHigh,
        })}
      >
        {quantity}
      </p>
    </div>
  );
};
export default Item_details;