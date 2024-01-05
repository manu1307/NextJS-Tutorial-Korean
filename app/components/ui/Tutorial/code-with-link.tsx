"use client";

import Link from "next/link";
import React, { useState } from "react";

type CodeWithLinkProps = {
  children: React.ReactNode;
  link: string;
  isCode?: boolean;
  blank?: boolean;
};
function CodeWithLink({
  children,
  link,
  isCode = true,
  blank = true,
}: CodeWithLinkProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link
      href={link}
      className={`inline-flex ${
        isHover ? "text-blue-400" : "text-blue-500"
      } duration-150
      ${isCode && "border-[1px] bg-vercel-200 rounded-lg"}
      leading-6`}
      target={blank ? "_blank" : ""}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <code className="px-1">{children}</code>
      {blank && (
        <svg
          width="14px"
          height="14px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )}
    </Link>
  );
}

export default CodeWithLink;
