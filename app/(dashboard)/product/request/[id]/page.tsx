"use client";

import React from "react";
import { useParams } from "next/navigation";

const RequestDetails = () => {
  const { id } = useParams();

  console.log(id);
  return <div>Request Details</div>;
};

export default RequestDetails;
