"use client";
import UseLanguage from "../lang/useLanguage";

function ChangeLang() {

  const { changeLanguage, currentLanguage } = UseLanguage();
  
  return (
    <div className="flex gap-4">
      <button
        onClick={() => changeLanguage("rus")}
        className={currentLanguage === "rus" ? "font-bold" : ""}
      >
        рус
      </button>
      <button
        onClick={() => changeLanguage("eng")}
        className={currentLanguage === "eng" ? "font-bold" : ""}
      >
        eng
      </button>
    </div>
  );
}

export default ChangeLang;
