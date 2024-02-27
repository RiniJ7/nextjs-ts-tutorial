import React from 'react'
//every page in the app router receives product id as its prop
//we can destructure it using params. the params object contain route parameter as key value pairs
function ProductDetails({ params,
}: {
  params: { productId: string; };
}) {
  return (
    <h1>Details about product {params.productId}</h1>
  );
}

export default ProductDetails