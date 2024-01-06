"use client";
import React, { useState } from "react";
type ContentTitleProps = {
  title: string;
  id: string;
};
function ContentSubtitle({ title, id }: ContentTitleProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <h2
      id={id}
      className="text-2xl font-semibold mt-8 mb-4 "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a
        href={`#${id}`}
        className={` flex items-center gap-2 mt-[-120px] pt-[120px] ${
          isHover && "block text-blue-400 duration-200"
        }`}
      >
        {title}
        <span
          className={`${
            isHover ? "block text-blue-400 duration-200" : "invisible"
          }`}
        >
          <svg viewBox="0 0 16 16" height="0.7em" width="0.7em">
            <g strokeWidth="1.2" fill="none" stroke="currentColor">
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
              ></path>
            </g>
          </svg>
        </span>
      </a>
    </h2>
  );
}

export default ContentSubtitle;
