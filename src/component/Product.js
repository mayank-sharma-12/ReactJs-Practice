import React from 'react'

function Product({productTitle, productPrice, feature}) {
    const options = feature.map((feature) => <li>{feature}</li>);
    return ( 
        <>
        <h1>{productTitle}</h1>
        <h5>Price : {productPrice}</h5>
        <p>Features</p>
        <p>{options}</p>
        </>
     );
}

export default Product;