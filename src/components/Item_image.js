import React from "react";
import "css/main.css";

const Item_image = ({ url, MainImage }) => {
  const img = MainImage?.url_570xN;
  console.log(img);
  return (
    <div className="item-image">
      <a href={url}>
        <img alt="photo" src={img} />
      </a>
    </div>
  );
};
Item_image.defaultProps = {
  img: "https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg",
};
export default Item_image;
