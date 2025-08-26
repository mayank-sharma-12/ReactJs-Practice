import React from 'react'

function Product({productTitle, productPrice, feature}) {
    return ( 
        <>
        <h1>{productTitle}</h1>
        <h5>Price : {productPrice}</h5>
        {productPrice > 15000 ? <p>Discount of 10%</p> : null}
        {productPrice > 35000 && <p>Discount of 15%</p>}
        </>
     );
}

export default Product;