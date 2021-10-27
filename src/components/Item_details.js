import React from "react";
import "css/main.css";
import cn from "classnames";

const Item_details = ({ title, currency_code, price, quantity }) => {
  const titleArr = "";
  const titleLetters = titleArr.concat(title).split("");
  titleLetters.splice(51, titleLetters.length - 1, "...").join("");

  return (
    <div className="item-details">
      <p className="item-title">
        {titleLetters.length < 50 ? title : titleLetters}
      </p>
      <p className="item-price">
        {price}
        {currency_code}
      </p>
      <p
        className={cn("item-quantity", {
          "level-low": quantity <= 10,
          "level-medium": quantity <= 20 && quantity > 10,
          "level-high": quantity > 20,
        })}
      >
        {quantity}
      </p>
    </div>
  );
};
export default Item_details;
