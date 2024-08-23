"use client";
import {DETAILS} from "../../constants/constants";
import {getObjectKeys} from "../../utils/utils";
import React from "react";

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  return (
    <div className="flex flex-col space-y-1 pt-6 p-2">
      {keys.map((key, index) => {
        return (
          <div key={index} className="flex justify-between text-md">
            <span className=" font-bold">{key}</span>
            <span>{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
