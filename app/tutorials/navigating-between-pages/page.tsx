import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/contents";

import React from "react";

function Page() {
  const data = contents[4];
  const nextData = contents[5];
  const goals: Goal[] = [
    { type: "nextjs", content: "next/link 컴포넌트를 사용하는 방법" },
    {
      type: "path",
      content: "usePathname() 훅을 사용하여 동적인 링크를 보여주는 방법",
    },
    { type: "navigate", content: "Next.js에서 내비게이션이 어떻게 작동하는지" },
  ];
  return (
    <>
      <NavBar chapter={data.chapter} title={data.title} />
      <article className="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6 text-left">
        <ArticleTop data={data} />
        <Content>
          이전 장에서, 우리는 대시보드 레이아웃과 페이지들을 만들었습니다. 이제,
          유저들이 대시보드 경로 간에 페이지를 이동할 수 있도록 링크들을
          추가해보도록 하겠습니다.
        </Content>
        <ContentGoal goals={goals} />
      </article>
    </>
  );
}

export default Page;
