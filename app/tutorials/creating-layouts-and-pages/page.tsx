import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/contents";
import Image from "next/image";
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
        <ContentTitle title="중첩 라우팅" id="nested-routing" />
        <Content>
          Next.js는 중첩 루트를 위해 <b>폴더</b>를 사용하는 파일 시스템 기반
          라우팅을 사용한다. 각 폴더는 <b>URL 세그먼트</b>의 구조를 결정하는{" "}
          <b>루트 세그먼트</b>의 역할을 수행한다.
        </Content>
        <div className="relative w-full h-[360px] mb-4">
          <Image
            src="/folders-to-url-segments.png"
            alt="folders-to-url-segments"
            fill={true}
          />
        </div>
        <Content>
          <CodeWithNoLink>layout.tsx</CodeWithNoLink>와{" "}
          <CodeWithNoLink>page.tsx</CodeWithNoLink>를 사용해서 각 루트에 대해
          개별적인 UI를 만들 수 있습니다.
        </Content>
        <Content>
          <CodeWithNoLink>page.tsx</CodeWithNoLink>는 React 컴포넌트를
          export하는 특별한 Next.js 파일이고 이 파일은 루트가 접근하기 위해서는
          필수적입니다. 이미 우리의 어플리케이션에서{" "}
          <CodeWithNoLink>/app/page.tsx</CodeWithNoLink>라는 페이지 파일이
          있습니다. 이 페이지는 <CodeWithNoLink>/</CodeWithNoLink>라는 루트에
          홈페이지로서 역할을 합니다.
        </Content>
        <Content>
          중첩 루트를 만들기 위해서는, 폴더 내에 폴더를 만들고 그 안에{" "}
          <CodeWithNoLink>page.tsx</CodeWithNoLink>를 추가하면 됩니다. 예를 들어
          :
        </Content>
        <div className="relative w-full h-[260px] mb-4">
          <Image src="/dashboard-route.png" alt="dashboard-route" fill={true} />
        </div>
        <Content>
          <CodeWithNoLink>/app/dashboard/page.tsx</CodeWithNoLink>는{" "}
          <CodeWithNoLink>/dashboard</CodeWithNoLink> 경로에 속해있는
          파일입니다. 이제 이 페이지를 만들어보러 갑시다!
        </Content>
        <ContentTitle
          title="대시보드 페이지 만들기"
          id="creating-the-dashboard-page"
        />
        <Content>
          <CodeWithNoLink>/app</CodeWithNoLink> 안에{" "}
          <CodeWithNoLink>dashboard</CodeWithNoLink> 폴더를 새로 만들어봅시다.
          그 다음, <CodeWithNoLink>page.tsx</CodeWithNoLink> 파일을{" "}
          <CodeWithNoLink>dashboard</CodeWithNoLink> 폴더 안에 만들고 다음
          내용을 채워보세요.
        </Content>
        <CodeBlock
          route="/app/dashboard/page.tsx"
          code={`export default function Page() {
  return <p>Dashboard Page</p>;
}`}
          language="tsx"
        />
        <Content>
          개발 서버가 실행되고 있는지 확인해보고{" "}
          <CodeWithLink link="http://localhost:3000/dashboard" isCode={false}>
            http://localhost:3000/dashboard
          </CodeWithLink>
          로 이동해보세요. 그러면 "Dashboard Page" 글자를 볼 수 있을 겁니다.
        </Content>
        <Content>
          이것이 Next.js에서 페이지를 추가하는 방법입니다. 폴더를 이용해서
          새로운 루트 세그먼트를 만들어주고,{" "}
          <CodeWithNoLink>page</CodeWithNoLink> 파일을 그 안에 만들어주면
          됩니다.
        </Content>
        <Content>
          <CodeWithNoLink>page</CodeWithNoLink> 파일이 특정한 이름을 가짐으로써
          Next.js는 해당 경로에 UI 컴포넌트, 테스트 파일 등 관련한 코드들을{" "}
          <CodeWithLink
            link="https://nextjs.org/docs/app/building-your-application/routing#colocation"
            isCode={false}
          >
            코로케이션
          </CodeWithLink>
          할 수 있도록 해줍니다. 오직 <CodeWithNoLink>page</CodeWithNoLink> 파일
          안에 있는 컨텐츠들만 공개적으로 접근 가능합니다. 예를 들어,{" "}
          <CodeWithNoLink>/ui</CodeWithNoLink>와{" "}
          <CodeWithNoLink>/lib</CodeWithNoLink> 폴더들은{" "}
          <CodeWithNoLink>/app</CodeWithNoLink> 폴더 안에 <i>코로케이션</i> 되어
          있습니다.
        </Content>
      </article>
    </>
  );
}

export default Page;
