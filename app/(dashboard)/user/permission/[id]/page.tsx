"use client";

import React from "react";
import { useParams } from "next/navigation";

const PermissionDetails = () => {
  const { id } = useParams();

  console.log(id);
  return <div>Permission Details</div>;
};

export default PermissionDetails;
