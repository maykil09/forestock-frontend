"use client";

import React from "react";
import { useParams } from "next/navigation";

const UserDetails = () => {
  const { id } = useParams();

  console.log(id);
  return <div>User Details</div>;
};

export default UserDetails;
