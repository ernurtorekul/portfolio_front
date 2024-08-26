import ernur_sidebar from "../../../public/ernur_sidebar.jpg";
import { NAME, DESIGNATION } from "../../constants/constants";
import Image from "next/image";
import React from "react";

function MeHeader() {
  return (
    <div>
      <div className=" h-48 bg-gray-900 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="w-20 h-20 rounded-full"
          src={ernur_sidebar}
          alt="profile picture"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-base font-bold break-normal">
            {NAME}
          </span>
          <span className="text-sm text-gray-300 text-center mt-2">
            {DESIGNATION}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MeHeader;