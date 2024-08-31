"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import UseLanguage from "../../lang/useLanguage";

const Download = ({ icon: Icon }) => {
  const {t} = UseLanguage()
  return (
    <Link
      href="/ernur_cv_main.pdf"
      target="_blank"
      className="flex flex-row items-center gap-x-4 pt-4 p-2"
    >
      <span className="">{t("sidebar.download.h1")}</span>
      <span>
        <Icon />
      </span>
    </Link>
  );
};

export default Download;
