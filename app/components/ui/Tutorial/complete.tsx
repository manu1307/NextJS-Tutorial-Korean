import React from "react";
import Check_white from "../../icons/Check_white";
import Next from "./next";
type CompleteProps = {
  children?: React.ReactNode;
  completeChapter: number;
  nextChapter: number;
  nextChapterTitle: string;
  nextChapterDescription: string;
  nextChapterLink: string;
};
function Complete({
  children,
  completeChapter,
  nextChapter,
  nextChapterTitle,
  nextChapterDescription,
  nextChapterLink,
}: CompleteProps) {
  return (
    <div className="flex flex-col items-center mt-4 mb-8 max-w-[640px] mx-auto">
      <div className="mx-auto h-32 w-[1px] bg-gradient-to-t from-blue-300 md:h-48"></div>
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-[48px] font-semibold text-blue-600  md:h-32 md:w-32 md:text-[72px]">
        {completeChapter}
        <div className="text-vercel-100 border-vercel-100 absolute bottom-0 right-0 flex h-8 w-8 translate-x-[6px] translate-y-[6px] items-center justify-center rounded-full border-[3px] bg-blue-600 md:h-10 md:w-10">
          <Check_white />
        </div>
      </div>
      <h2 className="pt-8 pb-2 text-4xl font-semibold ">
        Chapter {completeChapter} 끝!
      </h2>
      <div className="text-center text-lg break-keep text-4 text-vercel-700">
        {children}
      </div>
      <Next
        nextChapter={nextChapter}
        nextChapterTitle={nextChapterTitle}
        nextChapterDescription={nextChapterDescription}
        nextChapterLink={nextChapterLink}
      />
    </div>
  );
}

export default Complete;
