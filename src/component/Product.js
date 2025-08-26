import React from 'react'
import "./Product.css";
function Product({productTitle, productPrice, feature}) {
    const isDiscount = productPrice > 30000;
    const styles = {backgroundColor : isDiscount ? 'yellow' : ""}
    return ( 
        <div className='Product' style={styles}>
        <h1>{productTitle}</h1>
        <h5>Price : {productPrice}</h5>
        {productPrice > 15000 ? <p>Discount of 10%</p> : null}
        {productPrice > 35000 && <p>Discount of 15%</p>}
        </div>
     );
}

export default Product;