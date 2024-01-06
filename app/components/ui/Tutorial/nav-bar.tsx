"use client";
import React, { useCallback, useState, useEffect } from "react";
import Hamburger_Menu from "../../icons/Hamburger_Menu";
import Arrow_Top from "../../icons/Arrow_Top";
import Next_Logo from "../../icons/Next_Logo";
import { Tooltip } from "flowbite-react";
import ProgressBarCircle from "./circle-progress";

type NavBarProps = {
  chapter: number;
  title: string;
};
function NavBar({ chapter, title }: NavBarProps) {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  const [scroll, setScroll] = useState("");
  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY >= 84) {
      setScroll("header-fixed");
    } else setScroll("");
  }, []);
  return (
    <div className="relative z-50 mb-4 h-[67px] w-full max-w-[944px] lg:-mx-12 lg:mb-8">
      <aside
        className={`bg-vercel-200 z-10 flex h-[52px] max-w-[944px] items-center rounded-full py-3 px-3 lg:h-[auto] lg:w-full ${
          scroll === "header-fixed" &&
          "fixed top-6 left-4 right-3.5  lg:left-1/2 lg:right-[unset] lg:-translate-x-1/2 shadow-lg"
        }  `}
      >
        <div className="hidden md:block">
          <button className="hover:bg-vercel-300 p-2 rounded-full">
            <span>
              <Hamburger_Menu />
            </span>
          </button>
        </div>
        <div className="w-[1px] h-8 bg-vercel-400 rounded-full mr-3 ml-4"></div>
        <div className="flex flex-1 ">
          <div className="flex gap-3 items-center">
            <Next_Logo />
            <div className="text-sm text-left">
              <div className="text-black font-medium leading-5">
                Chapter {chapter}
              </div>
              <div className="text-vercel-700 leading-5">{title}</div>
            </div>
          </div>
          <div className="ml-auto lg:flex flex-col text-right ">
            <p className="text-vercel-700">
              {Math.round((chapter / 16) * 100)}%
            </p>
            <p className="text-vercel-500">{chapter}/16 chapters</p>
          </div>
          <div className="hidden lg:block ml-4 ">
            <div className="flex items-center h-full">
              <ProgressBarCircle chapter={chapter} />
            </div>
          </div>
        </div>

        <div className="w-[1px] h-8 bg-vercel-400 rounded-full mr-3 ml-4"></div>
        <div className="hidden md:block">
          <Tooltip content="맨 위로" placement="bottom" className="w-20">
            <button
              className="hover:bg-vercel-300 p-2 rounded-full"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>
                <Arrow_Top />
              </span>
            </button>
          </Tooltip>
        </div>
      </aside>
    </div>
  );
}

export default NavBar;
