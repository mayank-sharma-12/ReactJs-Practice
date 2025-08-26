import React from "react";
import Product from "./Product";

function ProductTab() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", margin:"auto",}}>
      <Product productTitle="Samsung Galaxy" idx={0} />
      <Product productTitle="Apple iphon 14" idx={1} />
      <Product productTitle="Redmi Note 7" idx={2} />
      <Product productTitle="Moto Fusion 64" idx={3} />
    </div>
  );
}

export default ProductTab;
