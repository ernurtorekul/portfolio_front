import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="py-2 px-3 text-xs bg-white rounded-full">
      {title}
    </span>
  );
};

export default Badge;
