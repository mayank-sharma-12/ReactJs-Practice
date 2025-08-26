import React from "react";
import Product from "./Product";

function ProductTab() {
  return (
    <>
      <Product productTitle='Laptop' productPrice={30000} />
      <Product productTitle='Mobile' productPrice={15000} />
      <Product productTitle='Tablet' productPrice={45000} />
    </>
  );
}

export default ProductTab;
