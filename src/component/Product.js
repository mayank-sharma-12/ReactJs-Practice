import React from 'react'

function Product({productTitle, productPrice}) {
    return ( 
        <>
        <h1>{productTitle}</h1>
        <h5>{productPrice}</h5>
        </>
     );
}

export default Product;