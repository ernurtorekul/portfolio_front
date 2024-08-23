"use client";
import React from "react";
import Link from "next/link";

const Download = ({ icon: Icon }) => {
  return (
    <Link
      href="/ernur_cv_main.pdf"
      target="_blank"
      className="flex flex-row items-center gap-x-4 pt-4 p-2"
    >
      <span className="">Download Resume</span>
      <span>
        <Icon />
      </span>
    </Link>
  );
};

export default Download;
