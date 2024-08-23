import React from "react";
import Link from "next/link";
import {CONTACTS} from '../../constants/constants'

const Contacts = () => {
  return (
    <div className="flex flex-col space-y-3 pt-6 p-2">
      <div className="flex flex-col">
        <span className="text-md font-bold">Email Address</span>
        <span className="text-sm text-gray-900" mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-md font-bold">Phone</span>
        <span className="text-sm text-gray-900">{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contacts;
