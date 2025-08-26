import React from "react";
import Product from "./Product";

function ProductTab() {
    const options = ["HiTech", "Tech"];
  return (
    <>
      <Product productTitle='Laptop' productPrice={30000} feature={options} />
      <Product productTitle='Mobile' productPrice={15000} feature={options} />
      <Product productTitle='Tablet' productPrice={45000} feature={options} />
    </>
  );
}

export default ProductTab;
