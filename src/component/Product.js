import React from "react";
import "./Product.css";
import Price from "./Price";
function Product({ productTitle, idx }) {
  const oldPrices = ["₹ 12,000", "₹ 15,999", "₹ 10,990", "₹ 8,450"];
  const newPrices = ["₹ 9,000", "₹ 11,999", "₹ 7,990", "₹ 5,000"];
  const productDescription = [
    ["Easy to use", "5G Phone"],
    ["Very impressive in speed", "Fast Charging"],
    ["Good camera quality", "Gaming Phone"],
    ["Fine and slim to use", "Best price deal"],
  ];
  return (
    <div className="Product">
      <h4>{productTitle}</h4>
      <p>{productDescription[idx][0]}</p>
      <p>{productDescription[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
