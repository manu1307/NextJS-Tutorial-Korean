import React from "react";
import Hamburger_Menu from "../../icons/Hamburger_Menu";
import Arrow_Top from "../../icons/Arrow_Top";
import Next_Logo from "../../icons/Next_Logo";
import { Tooltip } from "flowbite-react";

type NavBarProps = {
  chapter: number;
  title: string;
};
function NavBar({ chapter, title }: NavBarProps) {
  return (
    <div className="w-full bg-vercel-100 z-10 h-[52px] max-w-[1072px] items-center rounded-full py-3 px-3 lg:h-[auto] lg:w-full flex justify-between">
      <div className="hidden md:block">
        <button className="hover:bg-vercel-300 p-2 rounded-full">
          <span>
            <Hamburger_Menu />
          </span>
        </button>
      </div>
      <div className="w-[1px] h-8 bg-vercel-400 rounded-full mr-3 ml-4"></div>
      <div className="flex justify-start flex-1 gap-3 items-center">
        <Next_Logo />
        <div className="text-sm text-left">
          <div className="text-black font-medium leading-5">
            Chapter {chapter}
          </div>
          <div className="text-vercel-700 leading-5">{title}</div>
        </div>
      </div>
      <div className="w-[1px] h-8 bg-vercel-400 rounded-full mr-3 ml-4"></div>
      <div className="hidden md:block">
        <Tooltip content="맨 위로">
          <button className="hover:bg-vercel-300 p-2 rounded-full">
            <span>
              <Arrow_Top />
            </span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default NavBar;
