import React from "react";
import { TECH_STACK } from "../../constants/constants";
import Badge from "../Badge";
import UseLanguage from "../../lang/useLanguage";

const Tools = () => {
  const {t} = UseLanguage()
  return (
    <div className="flex flex-col space-y-1 pt-6 p-2">
      <div className="flex flex-col gap-y-4">
        <span className="text-md font-bold">{t("sidebar.tools.h1")}</span>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((item, index) => (
            <Badge key={index} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
