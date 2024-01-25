import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/contents";
import React from "react";

function Page() {
  const data = contents[4];
  const nextData = contents[5];
  return (
    <>
      <NavBar chapter={data.chapter} title={data.title} />
      <article className="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6 text-left">
        <ArticleTop data={data} />
      </article>
    </>
  );
}

export default Page;
