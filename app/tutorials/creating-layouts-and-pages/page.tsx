import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentList from "@/app/components/ui/Tutorial/content-list-wrapper";
import ContentPractice from "@/app/components/ui/Tutorial/content-practice";
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
        <ContentTitle
          title="연습 : 대시보드 폴더 내 페이지 만들기"
          id="creating-the-dashboard-pages"
        />
        <Content>
          자 이제 더 많은 경로들에 대해서 연습해봅시다. 대시보드 안에서 2개의
          페이지를 더 만들어보세요:
        </Content>
        <ContentList>
          <li>
            <b>Customers 페이지</b> : 이 페이지는{" "}
            <CodeWithLink
              link="http://localhost:3000/dashboard/customers"
              isCode={false}
            >
              http://localhost:3000/dashboard/customers
            </CodeWithLink>{" "}
            에서 접근 가능해야 합니다. 일단 페이지를 만들고{" "}
            <CodeWithNoLink>{"<p>Customers Page</p>"}</CodeWithNoLink> 요소를
            리턴하면 됩니다.
          </li>
          <li>
            <b>Invoices 페이지</b> : 이 페이지는{" "}
            <CodeWithLink
              link="http://localhost:3000/dashboard/invoices"
              isCode={false}
            >
              http://localhost:3000/dashboard/invoices
            </CodeWithLink>{" "}
            에서 접근 가능해야 합니다. 일단 페이지를 만들고{" "}
            <CodeWithNoLink>{"<p>Invoices Page</p>"}</CodeWithNoLink> 요소를
            리턴하면 됩니다.
          </li>
        </ContentList>
        <Content>
          시간을 들여서 해당 연습을 한 번 해보세요! 준비됐다면, 아래의 버튼을
          눌러 솔루션을 확인해보세요:
        </Content>
        <ContentPractice>
          <Content>
            다음과 같은 폴더 구조를 가지게 될 것입니다.
            <div className="relative w-full h-[500px] my-4 ">
              <Image
                src="/routing-solution.png"
                alt="routing-solution"
                fill={true}
              />
            </div>
          </Content>
          <Content>Customers 페이지 :</Content>
          <CodeBlock
            route="/app/dashboard/customers/page.tsx"
            code={`export default function Page() {
  return <p>Customers Page</p>;
}`}
            language="tsx"
          />
          <Content>Invoices 페이지 :</Content>
          <CodeBlock
            route="/app/dashboard/invoices/page.tsx"
            code={`export default function Page() {
  return <p>Invoices Page</p>;
}`}
            language="tsx"
          />
        </ContentPractice>
        <ContentTitle
          title="대시보드 레이아웃 만들기"
          id="creating-the-dashboard-layout"
        />
        <Content>
          대시보드들은 다양한 페이지들 사이에서 공유되는 페이지들이 있습니다.
          Next.js에서는 <CodeWithNoLink>layout.tsx</CodeWithNoLink> 라는 특별한
          파일 이름으로 다양한 페이지들 사이에서 공유되는 UI를 만들 수 있습니다.
          이제 대시보드 페이지를 위한 레이아웃을 만들어보죠!
        </Content>
        <Content>
          <CodeWithNoLink>/dashboard</CodeWithNoLink> 폴더 안에서,{" "}
          <CodeWithNoLink>layout.tsx</CodeWithNoLink> 파일을 만들고 아래의
          코드를 붙여넣어보세요. :
        </Content>
        <CodeBlock
          route="/app/dashboard/layout.tsx"
          code={`import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}`}
          language="tsx"
        />
        <Content>이 코드 안에서 일어나는 일들을 같이 한 번 살펴보죠.</Content>
        <Content>
          첫번째로, 우리는 레이아웃에{" "}
          <CodeWithNoLink>{"<SideNav/>"}</CodeWithNoLink> 컴포넌트를 추가하고
          있습니다. 이 파일에 추가하는 모든 컴포넌트는 레이아웃의 일부분이 될 것
          입니다.
        </Content>
        <Content>
          <CodeWithNoLink>{"<Layout/>"}</CodeWithNoLink> 컴포넌트는{" "}
          <CodeWithNoLink>children</CodeWithNoLink> prop을 받습니다. 이 children
          prop은 페이지가 될 수도 있고 다른 레이아웃이 될 수도 있습니다. 이
          상황에서는 <CodeWithNoLink>/dashboard</CodeWithNoLink> 폴더 안에 있는
          페이지들은 자동적으로 <CodeWithNoLink>{"<Layout/>"}</CodeWithNoLink>{" "}
          안에 다음과 같이 중첩될 것입니다. :
        </Content>
        <div className="relative w-full h-[400px] mb-4">
          <Image src="/shared-layout.png" alt="dashboard-route" fill={true} />
        </div>
        <Content>
          입력한 값들을 모두 저장하고 localhost에서 잘 동작하는지 한 번
          확인해보세요. 다음과 같은 화면이 나오면 됩니다. :
        </Content>
        <div className="relative w-full h-[560px] mb-4">
          <Image
            src="/shared-layout-page.png"
            alt="dashboard-route"
            fill={true}
          />
        </div>
        <Content>
          Next.js에서 레이아웃을 사용하면 좋은 점이 있습니다. 페이지
          컴포넌트들이 업데이트 되어도 레이아웃은 다시 렌더링되지 않습니다. 이를{" "}
          <CodeWithLink
            link="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering"
            isCode={false}
          >
            부분 렌더링
          </CodeWithLink>{" "}
          이라고 부릅니다.
        </Content>
        <div className="relative w-full h-[600px] mb-4">
          <Image
            src="/partial-rendering-dashboard.png"
            alt="dashboard-route"
            fill={true}
          />
        </div>
      </article>
    </>
  );
}

export default Page;
