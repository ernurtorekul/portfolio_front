'use client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "eng",
  fallbackLng: "en",
  interpolation: {
    excapeValue: false,
  },
  resources:{
    en:{
        common: require('./locales/eng/common.json')
    },
    rus:{
        common: require('./locales/rus/common.json')
    }
  }
})

export default i18n;
