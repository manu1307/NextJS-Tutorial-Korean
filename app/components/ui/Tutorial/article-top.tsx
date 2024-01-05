import React from "react";
type ArticleTopProps = {
  data: { chapter: number; title: string; link: string };
};
function ArticleTop({ data }: ArticleTopProps) {
  return (
    <div>
      <div className="mb-4 flex flex-col items-start gap-2 md:mb-10 md:flex-row md:items-center md:gap-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 md:h-[72px] md:w-[72px]">
          <p className="text-3xl text-vercel-700">{data.chapter}</p>
        </div>
        <hgroup className="text-left">
          <p className="text-lg font-normal text-gray-800 dark:text-white leading-8">
            Chapter {data.chapter}
          </p>
          <div className="hidden md:block"></div>
          <h2 className="text-3xl font-bold text-vercel-900 dark:text-gray-200 mt-1 mb-4">
            {data.title}
          </h2>
        </hgroup>
      </div>
    </div>
  );
}

export default ArticleTop;
