"use client";
import { Header } from "./components/Header.jsx";
import About from "./organism/About.jsx";
import Contact from "./organism/Contact.jsx";
import { Footer } from "./organism/Footer.jsx";
import Hero from "./organism/Hero.jsx";
import Exams from "./organism/Exams.jsx";
import Projects from "./organism/Projects.jsx";
import SidebarComponent from "./components/Sidebar.jsx";
import { useState } from "react";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
      <div className="pr-4 pl-4 ">
        <div>
          <SidebarComponent
            isSidebarVisible={isSidebarVisible}
            setIsSidebarVisible={setIsSidebarVisible}
          />
        </div>
        <div className="mt-2">
          <Header />
        </div>
        <div className="">
          <div
            className={`transition-all duration-300  ${
              isSidebarVisible ? "blur-sm lg:blur-none pointer-events-none" : ""
            }`}
          >
            <div className="flex flex-col gap-10 ">
              {/* <Exams/> */}
              <Hero />
              <About />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
}
