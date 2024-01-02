import Link from "next/link";
import React from "react";
import Github from "../icons/Github";

function Footer() {
  return (
    <footer className="py-6 bg-gray-800 dark:bg-gray-700 text-white">
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-2  items-center">
        made by 나
        <Link href="https://github.com/manu1307" target="_blank">
          <div className="w-fit h-fit bg-white rounded-full bg-opacity-50 hover:bg-opacity-80 duration-100">
            <Github />
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
