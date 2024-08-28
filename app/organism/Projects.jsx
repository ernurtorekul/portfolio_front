import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const portfolioList = [
    {
      id: 1,
      img: "/projects/medturist.jpg",
      title: "Medical Center Match in India ",
      link: "https://medturist.kz/",
      description:
        "Dynamic web-platform for finding the Best Medical Centers in India based on your diagnosis",
      project: {
        type1: "Web Development",
        type2: "Medicine and Health",
        type3: "Interactive Content and Dynamic Features",
      },
    },
    {
      id: 2,
      img: "/projects/sbs-consulting.jpg",
      title: "A Web Platform for Studying Abroad",
      link: "https://sbsconsulting.kz",
      description:
        "Comprehensive website for students who wants to Study Abroad",
      project: {
        type1: "Web Development",
        type2: "Education and Student Life",
        type3: "Multi-page and Dynamic Features",
      },
    },
    {
      id: 3,
      img: "/projects/contactsavvy.png",
      title: "Personalized Contact Manager",
      link: "https://github.com/ernurtorekul/ContactSavvy",
      description: "ContactSavvy: Smart Contact Organizer",
      project: {
        type1: "Web Development",
        type2: "Personalization and User Experience",
        type3: "Responsive and Secure Design",
      },
    },
  ];

  return (
    <div className="bg-secondary lg:ml-4">
      <section
        id="projects"
        className="lg:ml-1/6 flex flex-col items-center gap-5 bg-secondary py-20"
      >
        <h4 className="text-4xl font-semibold">Projects</h4>
        <p className="w-2/3 lg:w-full text-lg text-center text-secondary">
          Here are some of the best projects I&apos;ve completed for my valued
          clients.
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
                    <button className="white-btn">{item.project.type1}</button>
                    <button className="white-btn">{item.project.type2}</button>
                    <button className="white-btn">{item.project.type3}</button>
                  </div>
                </div>
                <div className="pl-2">
                  <h5 className="text-xl font-medium mb-2">{item.title}</h5>
                  <p className="text-xs text-secondary">{item.description}</p>
                </div>
                <button className=" text-white rounded-full w-40 h-10 bg-violet duration-300 hover:bg-secondary hover:text-violet">
                  Подробнее
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
