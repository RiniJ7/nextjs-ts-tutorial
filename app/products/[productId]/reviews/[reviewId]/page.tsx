import React from 'react'
// imported notFound function from nextjs

import { notFound } from 'next/navigation';

//implementation of nested dynamic routes

export default function ReviewDetail({ 
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
//restricting the number of reviews to 1000
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
  return (

    <h1>
        Review {params.reviewId} for product {params.productId}</h1>
  );
}
