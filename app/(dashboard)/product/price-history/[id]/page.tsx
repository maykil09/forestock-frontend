"use client";

import React from "react";
import { useParams } from "next/navigation";

const PriceHistoryDetails = () => {
  const { id } = useParams();

  console.log(id);
  return <div>Product Details</div>;
};

export default PriceHistoryDetails;
