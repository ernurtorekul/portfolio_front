"use client";
import ChangeLang from "./changeLang";
import UseLanguage from "../lang/useLanguage";

export function Header() {
  const { t } = UseLanguage();

  return (
    <div className="bg-primary">
      <header className="lg:ml-1/6 flex h-20 px-20 justify-between items-center text-xl font-bold  group">
        <ChangeLang />
        <nav>
          <ul className="hidden lg:flex gap-5 font-normal h-[40px] items-center">
            {/* <a
              href="https://drive.google.com/file/d/1Sg7mBOZrfwLVW1ilLzpEuDrV5Piu4z-I/view?usp=sharing"
              className="underline font-bold"
            >
              akp korgau
            </a> */}
            <a href="#">{t("header.home")}</a>
            <a href="#about">{t("header.about")}</a>
            <a href="#projects">{t("header.projects")}</a>
            <a href="#contact">{t("header.contact")}</a>
          </ul>
        </nav>
      </header>
    </div>
  );
}
