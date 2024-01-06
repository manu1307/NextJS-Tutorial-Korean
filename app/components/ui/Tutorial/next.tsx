import React from "react";
import Arrow_Top_Right from "../../icons/Arrow_Top_Right";
import Arrow_Right_white from "../../icons/Arrow_Right_white";
import Link from "next/link";
type NextProps = {
  nextChapter: number;
  nextChapterTitle: string;
  nextChapterDescription: string;
  nextChapterLink: string;
};
function Next({
  nextChapter,
  nextChapterTitle,
  nextChapterDescription,
  nextChapterLink,
}: NextProps) {
  return (
    <div className="w-full border-gray-alpha-400 mt-8 flex flex-col items-center justify-center gap-1 rounded-lg px-4 py-8 shadow-md md:mt-12">
      <p className="text-vercel-700">다음 장은</p>
      <p className="font-semibold text-xl">
        {nextChapter} : {nextChapterTitle}
      </p>
      <p className="max-w-[540px] pt-3 pb-4 md:pb-6 text-center break-keep text-vercel-700">
        {nextChapterDescription}
      </p>
      <Link href={nextChapterLink}>
        <button className="bg-[#171717] text-white flex items-center px-3 h-12 rounded-xl hover:bg-vercel-900 duration-150">
          <span className="px-4">Chapter {nextChapter} 시작하기</span>
          <span>
            <Arrow_Right_white />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Next;
