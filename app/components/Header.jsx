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
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/netbeans_t.zip"; // path in public folder
                link.download = "testextension"; // suggested file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              2025 tests
            </button>
            <a
              href="https://drive.google.com/file/d/16jDvmaTMiBFkPPAOgfYwBqrXBxELDBRO/view?usp=sharing"
              className="underline font-bold"
            >
              reestr
            </a>
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
