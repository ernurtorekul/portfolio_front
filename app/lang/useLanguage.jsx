"use client";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useEffect } from "react";


export default function UseLanguage () {
    const { t, i18n } = useTranslation("common");

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("selectedLanguage", lang);
    };
  
    useEffect(() => {
      const savedLanguage = localStorage.getItem("selectedLanguage");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    }, [i18n]);
    
  return {t, changeLanguage, currentLanguage: i18n.language}
}
