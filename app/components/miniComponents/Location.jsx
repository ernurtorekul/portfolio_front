"use client";
import { DETAILS } from "../../constants/constants";
import { getObjectKeys } from "../../utils/utils";
import React from "react";
import UseLanguage from "../../lang/useLanguage";

const Location = () => {
  const { t } = UseLanguage();
  return (
    <div className="flex flex-col space-y-1 pt-6 p-2">
      <div className="flex justify-between text-md">
        <div className="flex flex-col">
          <span className="font-bold">{t("sidebar.residence")}</span>
          <span className="font-bold">{t("sidebar.age")}</span>
        </div>
        <div className="flex flex-col text-right">
          <span>{t("sidebar.kazakhstan")}</span>
          <span>{t("sidebar.20")}</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
