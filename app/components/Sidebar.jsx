"use client";
import Languages from "./miniComponents/Languages";
import React, { useEffect, useRef, useState } from "react";
import MeHeader from "../components/miniComponents/MeHeader";
import Location from "../components/miniComponents/Location";
import Skills from "../components/miniComponents/Skills";
import Tools from "../components/miniComponents/Tools";
import Contacts from "../components/miniComponents/Contacts";
import Download from "../components/miniComponents/Download";
import Socials from "../components/miniComponents/Socials";
import { FaDownload } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function SidebarComponent() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarVisible(false);
    }
  };
  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div className="relative">
      <div className="block lg:hidden">
        <button onClick={handleButtonClick} className="p-2 w-16 h-16 fixed">
          <RxHamburgerMenu className="w-3/4 h-3/4" />
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`h-[95vh] w-1/6 fixed bg-gray-300 rounded-3xl top-1/2 transform -translate-y-1/2 overflow-y-auto ${
          isSidebarVisible ? "block" : "hidden"
        } lg:block z-10`}
      >
        <div className="flex flex-col divide-white divide-y-4 ">
          <MeHeader />
          <Location />
          <Languages />
          <Skills />
          <Tools />
          <Contacts />
          <Download icon={FaDownload} />
          <Socials />
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          isSidebarVisible ? "blur-md lg:blur-none pointer-events-none" : ""
        }`}
      ></div>
    </div>
  );
}

export default SidebarComponent;
