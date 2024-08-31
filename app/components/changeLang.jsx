"use client";
import UseLanguage from "../lang/useLanguage";

function ChangeLang() {
  const { changeLanguage, currentLanguage } = UseLanguage();

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => changeLanguage("rus")}
        className={`relative pb-1 ${
          currentLanguage === "rus" ? "text-violet font-bold" : "text-gray-600"
        }`}
      >
        рус
        {currentLanguage === "rus" && (
          <span className="absolute left-0 bottom-0 w-full h-1 bg-violet rounded-full"></span>
        )}
      </button>
      <button
        onClick={() => changeLanguage("eng")}
        className={`relative pb-1 ${
          currentLanguage === "eng" ? "text-violet font-bold" : "text-gray-600"
        }`}
      >
        eng
        {currentLanguage === "eng" && (
          <span className="absolute left-0 bottom-0 w-full h-1 bg-violet rounded-full"></span>
        )}
      </button>
    </div>
  );
}

export default ChangeLang;
