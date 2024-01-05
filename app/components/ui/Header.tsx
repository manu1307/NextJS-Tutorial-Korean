import Link from "next/link";
import React from "react";

type HeaderProps = {
  fixed?: boolean;
};
function Header({ fixed }: HeaderProps = { fixed: true }) {
  return (
    <div className="w-full">
      <header
        className={`${
          fixed && "fixed top-0"
        } w-full bg-white dark:bg-gray-800 shadow-md z-50`}
      >
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <Link href="/">
            <div className="flex justify-between items-center">
              Next JS Tutorial
            </div>
          </Link>
          <nav className="hidden md:flex space-x-10">
            <Link
              className="text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200"
              href="#"
            >
              nav1
            </Link>
            <Link
              className="text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200"
              href="#"
            >
              nav2
            </Link>
            <Link
              className="text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-200"
              href="#"
            >
              nav3
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
