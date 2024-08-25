"use client";
import Link from "next/link";
import { SOCIAL_LINKS } from "../constants/constants";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CONTACTS } from "../constants/constants";

export const Footer = () => {
  return (
    <div className="bg-violet">
      <footer
        id="contact"
        className="lg:ml-1/6 flex h-20 px-20 bg-violet justify-between items-center text-white text-xl font-bold shadow-md group"
      >
        <h2 className="logo">Ernur</h2>
        <nav>
          <ul className="hidden md:flex gap-5 text-white">
            <li>
              <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
                <LuGithub className="" />
              </Link>
            </li>
            <li>
              <Link
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                <LuLinkedin className="" />
              </Link>
            </li>
            <li>
              <Link href={`mailto:${CONTACTS.EMAIL}`} rel="noreferrer">
                <MdOutlineEmail className="" />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
