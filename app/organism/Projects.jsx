import Image from "next/image";
import Link from "next/link";
import React from "react";
import UseLanguage from "../lang/useLanguage";
const Projects = () => {
  const { t } = UseLanguage();

  const portfolioList = [
    {
      id: 1,
      img: "/projects/medturist.jpg",
      titleKey: "projects.list.medturist.title",
      link: "https://medturist.kz/",
      descriptionKey:"projects.list.medturist.description",
      project: {
        type1: "projects.list.medturist.type1",
        type2: "projects.list.medturist.type2",
        type3: "projects.list.medturist.type3",
      },
    },
    {
      id: 2,
      img: "/projects/sbs-consulting.jpg",
      titleKey: "projects.list.sbs-consulting.title",
      link: "https://sbsconsulting.kz",
      descriptionKey:"projects.list.sbs-consulting.description",
      project: {
        type1: "projects.list.sbs-consulting.type1",
        type2: "projects.list.sbs-consulting.type2",
        type3: "projects.list.sbs-consulting.type3",
      },
    },
    {
      id: 3,
      img: "/projects/contactsavvy.png",
      titleKey: "projects.list.contactSavvy.title",
      link: "https://github.com/ernurtorekul/ContactSavvy",
      descriptionKey:"projects.list.contactSavvy.description",
      project: {
        type1: "projects.list.contactSavvy.type1",
        type2: "projects.list.contactSavvy.type3",
        type3: "projects.list.contactSavvy.type2",
      },
    },
  ];

  return (
    <div className="bg-secondary lg:ml-4">
      <section
        id="projects"
        className="lg:ml-1/6 flex flex-col items-center gap-5 bg-secondary py-20"
      >
        <h4 className="text-4xl font-semibold">{t("projects.h1")}</h4>
        <p className="w-2/3 lg:w-full text-lg text-center text-secondary">
          {t("projects.p")}
        </p>
        <div className="flex gap-10 w-[100%] overflow-x-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-300 justify-start px-5 lg:px-20 pb-10">
          {portfolioList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col gap-5 max-w-[350px] min-w-[350px] flex-shrink-0 items-center lg:items-start cursor-pointer duration-300 hover:scale-105">
                <div className="flex relative">
                  <Image
                    width={350}
                    height={300}
                    src={item.img}
                    alt="website example"
                    className="rounded-[40px] blur-sm hover:blur-none"
                  />
                  <div className="z-10 absolute bottom-0 flex flex-col items-start text-violet border-violet p-5 gap-2 text-sm">
                    <button className="white-btn text-left">{t(item.project.type1)}</button>
                    <button className="white-btn text-left">{t(item.project.type2)}</button>
                    <button className="white-btn text-left">{t(item.project.type3)}</button>
                  </div>
                </div>
                <div className="pl-2">
                  <h5 className="text-xl font-medium mb-2">{t(item.titleKey)}</h5>
                  <p className="text-xs text-secondary">{t(item.descriptionKey)}</p>
                </div>
                <button className=" text-white rounded-full w-40 h-10 bg-violet duration-300 hover:bg-secondary hover:text-violet">
                  {t("projects.button")}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
