import React from "react";

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
      {title}
    </h1>
  );
};

export default HeaderTitle;
