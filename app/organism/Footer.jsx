"use client";
import Link from "next/link";
import { SOCIAL_LINKS } from "../constants/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACTS } from "../constants/constants";

export const Footer = () => {
  return (
    <div className="bg-violet p-4">
      <footer
        id="contact"
        className="lg:ml-1/6 h-20 px-20 grid place-items-center bg-violet text-white text-xl font-bold shadow-md group"
      >
        <div >
          <nav>
            <ul className="flex gap-5 text-white">
              <li>
                <Link
                  href={SOCIAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="" />
                </Link>
              </li>
              <li>
                <Link
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="" />
                </Link>
              </li>
              <li>
                <Link href={`mailto:${CONTACTS.EMAIL}`} rel="noreferrer">
                  <Mail className="" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col text-white text-sm justify-center items-center mt-4">
          <p>© 2024 All rights reserved</p>
          <p>Made with ❤️ by Ernur</p>
        </div>
      </footer>
    </div>
  );
};
