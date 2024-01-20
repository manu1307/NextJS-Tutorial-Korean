import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/contents";
import React from "react";

function Page() {
  const data = contents[3];
  const nextData = contents[4];
  const goals: Goal[] = [
    {
      type: "route",
      content: "파일 기반 라우팅을 이용한 대시보드 페이지를 만들어봅니다.",
    },
    {
      type: "folder",
      content:
        "새로운 경로 세그먼트를 생성할 때 폴더와 파일의 역할에 대해 이해합니다. ",
    },
    {
      type: "layout",
      content:
        "여러 개의 대시보드 페이지 사이에서 공유되는 중첩 레이아웃을 만들어봅니다.",
    },
    {
      type: "colocation",
      content: "코로케이션, 부분 렌러딩, 루트 레이아웃에 대해 이해합니다.",
    },
  ];
  return (
    <>
      <NavBar chapter={data.chapter} title={data.title} />
      <article className="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6 text-left">
        <ArticleTop data={data} />
        <Content>
          지금까지, 우리의 어플리케이션은 홈페이지만 가지고 있습니다. 이제 더
          많은 <b>페이지들</b>과 <b>레이아웃</b>에 대한 경로를 어떻게 만들 수
          있을지 알아보겠습니다.
        </Content>
        <ContentGoal goals={goals} />
      </article>
    </>
  );
}

export default Page;
