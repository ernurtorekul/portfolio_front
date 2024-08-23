import React from "react";

const LineBar = ({title, percent, bgColor}) => {
  return (
    <div className="">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-900">{title}</span>
        <span className="text-sm text-gray-900">{percent}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className={`${bgColor} h-2 rounded-full w-16 `}
          style={{ width: `${percent}` }}
        ></div>
      </div>
    </div>
  );
};

export default LineBar;
