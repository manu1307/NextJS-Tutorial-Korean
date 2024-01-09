"use client";

import { useState } from "react";
import { googlecode } from "react-code-blocks";
import { CodeBlock as CodeBlockFromLibrary } from "react-code-blocks";

import Save from "../../icons/Save";
import Check from "../../icons/Check_black";

type CodeBlockProps = {
  route?: string;
  code: string;
  language: string;
  showLineNumbers?: boolean;
};

function CodeBlock({
  route,
  code,
  language,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="relative border-[1px] border-vercel-200 rounded-lg my-4 leading-4">
      <div className="absolute top-0 text-vercel-600 z-10 bg-vercel-200 w-full py-2 pl-3 pr-5 flex justify-between items-center">
        {route ? route : <div></div>}
        <div className="relative">
          <button
            className="hover:bg-vercel-300 p-2 w-8 h-8 rounded-lg flex items-center justify-center "
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 600);
            }}
            disabled={copied}
          >
            <div className="absolute top-1.5 left-1.5">
              <span
                className={`${copied ? "opacity-0" : "opacity-100"} duration-300
              `}
              >
                <Save />
              </span>
            </div>
            <span
              className={`${
                copied ? "opacity-100" : "opacity-0"
              } duration-300 `}
            >
              <Check />
            </span>
          </button>
        </div>
      </div>
      <CodeBlockFromLibrary
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={googlecode}
        customStyle={{
          paddingTop: "4rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default CodeBlock;
