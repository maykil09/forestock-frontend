"use client";

import React from "react";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();

  console.log(id);
  return <div>Product Details</div>;
};

export default ProductDetails;
