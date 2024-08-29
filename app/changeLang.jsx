"use client";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function ChangeLang() {
  const {t} = useTranslation('common')

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  };
  return (
    <div className="flex gap-4">
      <p>{t("greeting")}</p>
      <button
        onClick={() => changeLanguage("rus")}
        className={i18n.language === "rus" ? "font-bold" : ""}
      >
        russ
      </button>
      <button
        onClick={() => changeLanguage("eng")}
        className={i18n.language === "eng" ? "font-bold" : ""}
      >
        eng
      </button>
    </div>
  );
}

export default ChangeLang;
