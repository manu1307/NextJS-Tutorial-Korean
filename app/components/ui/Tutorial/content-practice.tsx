"use client";
import React, { useState } from "react";
import Eye from "../../icons/Eye";
import Eye_Hidden from "../../icons/Eye_Hidden";

function ContentPractice({ children }: { children: React.ReactNode }) {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <div className="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:py-12 md:px-[62px]">
      <button
        className="bg-black text-white hover:bg-vercel-900 duration-150 p-3 rounded-lg"
        onClick={() => setIsHidden((prev) => !prev)}
      >
        {isHidden ? (
          <span className="flex items-center gap-2 h-5">
            <Eye />
            솔루션 보기
          </span>
        ) : (
          <span className="flex items-center gap-2 h-5">
            <Eye_Hidden />
            솔루션 가리기
          </span>
        )}
      </button>
      {!isHidden && <div>{children}</div>}
    </div>
  );
}

export default ContentPractice;
