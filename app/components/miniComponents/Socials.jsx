import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../constants/constants";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CONTACTS } from "../../constants/constants";
// import

const Socials = () => {
  return (
    <div className="footer rounded-b-3xl bg-gray-900 flex justify-center space-x-6 py-4 text-xl items-center w-full">
      <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
        <LuGithub className="text-gray-300" />
      </Link>
      <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
        <LuLinkedin className="text-gray-300" />
      </Link>
      <Link href={`mailto:${CONTACTS.EMAIL}`} rel="noreferrer">
        <MdOutlineEmail className="text-gray-300" />
      </Link>
    </div>
  );
};

export default Socials;
