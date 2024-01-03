import Link from "next/link";
import React from "react";
type CardProps = {
  chapter: number;
  title: string;
  link: string;
};

function Card({ chapter, title, link }: CardProps) {
  return (
    <div className="w-full bg-white shadow-sm rounded-md">
      <p className="p-6">
        <h1 className="font-bold text-3xl mb-2">Chapter {chapter}</h1>
        <p className="text-gray-800 dark:text-white text-2xl font-medium">
          {title}
        </p>
      </p>
      <div className="p-6">
        <button className="w-full bg-vercel-900 font-medium text-white px-4 py-2 inline-flex items-center justify-center rounded-md duration-150 hover:bg-vercel-800">
          <Link href={link}>바로 가기</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
