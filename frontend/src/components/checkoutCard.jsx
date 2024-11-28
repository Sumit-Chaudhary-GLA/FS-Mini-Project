import React from "react";
import "./styles/checkoutCard.css";


const CheckoutCard = ({
  serviceName,
  description,
  image,
}
  ) => {
  return (
    <div className="checkoutCard">
      <div className="product-image">
        <img
          src={image}
          alt="Product"
          className="image"
        />
      </div>
      <div className="product-details">
        <h2>{serviceName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CheckoutCard;
