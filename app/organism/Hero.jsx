"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { CONTACTS } from "../constants/constants";
import { SOCIAL_LINKS } from "../constants/constants";
import UseLanguage from "../lang/useLanguage";

export default function Hero() {
  const stackList = [
    "html_css.svg",
    "js_ts.svg",
    "react_nextjs.svg",
    "tailwind_sass.svg",
    "ant_material.svg",
  ];
  const { t } = UseLanguage();
  return (
    <div className="bg-secondary">
      <section className="lg:ml-[16.666%] px-20 pb-20 bg-secondary lg:justify-center lg:p-20 ">
        <MaxWidthWrapper className="pt-10">
          <div className="flex flex-col-reverse  gap-15 lg:flex lg:flex-row items-center">
            <div className="flex flex-col gap-10 lg:items-start items-center text-center lg:text-start	">
              <h1 className="text-5xl sm:text-6xl font-bold mt-10 lg:mt-0">
                {t("hero.h1")}
              </h1>
              <p className="text-xl w-full lg:w-2/3">{t("hero.p")}</p>
              <div className="flex gap-5">
                <button>
                  <Link
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-7 h-7 hover:text-secondary transition-all duration-200" />
                  </Link>
                </button>
                <button>
                  <Link
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-7 h-7 hover:text-secondary transition-all duration-200" />
                  </Link>
                </button>
                <button>
                  <Link href={`mailto:${CONTACTS.EMAIL}`} rel="noreferrer">
                    <Mail className="w-7 h-7 hover:text-secondary transition-all duration-200" />
                  </Link>
                </button>
              </div>
            </div>
            <Image
              src="/ernur.jpg"
              className="hero-animate float-right brightness-150"
              width={400}
              height={400}
              alt="heroBg"
            />
          </div>
          <div className="stack flex flex-col lg:flex-row lg:flex gap-3 lg:gap-10 mt-20 items-center">
            <p>{t("hero.p2")}</p>
            <p className="text-2xl rotate-90 lg:rotate-0 ">|</p>
            <ul className="flex gap-1 sm:gap-10 w-full">
              {stackList.map((item) => (
                <li key={item}>
                  <Image
                    src={item}
                    alt="stack"
                    width={100}
                    height={100}
                    className=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

// project card
// import React from "react";

// function Hero() {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
//       <h2 className="text-4xl font-bold mb-12 mt-4 flex justify-center tracking-wider">{"ContactSavvy"}</h2>
//       <p className="text-gray-700 mb-12 tracking-tight text-lg ">The <span className="font-semibold text-black tracking-wider">'ContactSavvy'</span> web application is designed to offer users a refreshing alternative to conventional contact management systems.</p>
//       <div className="flex items-center justify-center">
//         <img
//           src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
//           alt="GitHub Icon"
//           className="w-64 h-64 mb-12"
//         />
//       </div>
//     </div>
//   );
// }

// export default Hero;
