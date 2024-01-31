import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Complete from "@/app/components/ui/Tutorial/complete";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentSubtitle from "@/app/components/ui/Tutorial/content-subtitle";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import ContentQuiz from "@/app/components/ui/Tutorial/quiz";
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
        <ContentTitle
          title="왜 내비게이션을 최적화해야하는가"
          id="why-optimize-navigation"
        />
        <Content>
          페이지들 간에 링크를 설정할 때, 전통적으로{" "}
          <CodeWithNoLink>{"<a>"}</CodeWithNoLink> HTML 태그를 사용해왔습니다.
          현재는 사이드바 링크들은 <CodeWithNoLink>{"<a>"}</CodeWithNoLink>{" "}
          태그를 사용하고 있는데, home, invoices, customers 페이지를 이동하면서
          무슨 일이 일어나는지 잘 살펴보세요.
        </Content>
        <Content>보셨나요?</Content>
        <Content>
          각 페이지를 이동할 때마다 모든 페이지가 새로고침되고 있습니다!
        </Content>
        <ContentTitle title="<Link> 컴포넌트" id="the-link-component" />
        <Content>
          Next.js 어플리케이션에서 <CodeWithNoLink>{"<Link/>"}</CodeWithNoLink>{" "}
          컴포넌트를 사용하여 페이지들 간의 링크를 설정할 수 있습니다.{" "}
          <CodeWithNoLink>{"<Link>"}</CodeWithNoLink>는 자바스크립트로
          <CodeWithLink
            link="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works"
            isCode={false}
          >
            클라이언트 사이드 렌더링
          </CodeWithLink>
          을 가능하게 해줍니다.
        </Content>
        <Content>
          <CodeWithNoLink>{"<Link />"}</CodeWithNoLink> 컴포넌트를 사용하기
          위해서는,{" "}
          <CodeWithNoLink>/app/ui/dashboard/nav-links.tsx</CodeWithNoLink>{" "}
          파일을 열고, <CodeWithNoLink>Link</CodeWithNoLink> 컴포넌트를{" "}
          <CodeWithLink
            link="https://nextjs.org/docs/app/api-reference/components/link"
            isCode={false}
          >
            next/link
          </CodeWithLink>
          로부터 불러오면 됩니다. 그리고 나서,{" "}
          <CodeWithNoLink>{"<a>"}</CodeWithNoLink> 대신{" "}
          <CodeWithNoLink>{"<Link>"}</CodeWithNoLink>를 채워넣어보세요.
        </Content>
        <CodeBlock
          route="/app/ui/dashboard/nav-links.tsx"
          code={`import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
 
// ...
 
export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}`}
          language="tsx"
        />
        <Content>
          보시다시피, <CodeWithNoLink>Link</CodeWithNoLink>는{" "}
          <CodeWithNoLink>{"<a>"}</CodeWithNoLink> 태그와 비슷하게 작성됩니다.
          하지만 <CodeWithNoLink>{`<a href="…">`}</CodeWithNoLink> 대신에{" "}
          <CodeWithNoLink>{`<Link href="…">`}</CodeWithNoLink>를 사용합니다.
        </Content>
        <Content>
          변경사항들을 저장하고 localhost에서 동작하는 확인해보세요. 이제 전체
          새로고침을 하지 않고 페이지들간의 이동하는 것을 볼 수 있을 겁니다.
          서버로부터 데이터를 가져와서 렌더링하는 부분들이 있음에도 불구하고,
          마치 웹앱처럼 전체 새로고침이 없습니다. 왜 그럴까요?
        </Content>
        <ContentSubtitle
          title="자동적인 코드 쪼개기와 데이터 미리 가져오기"
          id="automatic-code-splitting-and-prefetching"
        />
        <Content>
          내비게이션 경험을 향상시키기 위해서, Next.js는 어플리케이션의 코드를
          루트에 따라 코드를 쪼갭니다. 이는 첫 로딩에 모든 어플리케이션 코드를
          가져오는 전통적인 리액트{" "}
          <CodeWithLink link="https://developer.mozilla.org/en-US/docs/Glossary/SPA">
            SPA
          </CodeWithLink>{" "}
          방식과는 다릅니다.
        </Content>
        <Content>
          루트에 따른 코드 쪼개기는 페이지들이 각각 분리된다는 것을 의미합니다.
          만약 특정 페이지가 에러를 발생시킨다면, 어플리케이션의 다른 부분들은
          여전히 동작합니다.
        </Content>
        <Content>
          더 나아가서, 프로덕션 환경에서,{" "}
          <CodeWithLink
            link="https://nextjs.org/docs/pages/api-reference/components/link"
            isCode={false}
          >
            {"<Link>"}
          </CodeWithLink>{" "}
          컴포넌트가 브라으저의 뷰포트에 보이면, Next.js는 자동으로
          백그라운드에서 연결된 링크에 있는 코드를 미리 가져옵니다. 유저가
          링크를 클릭하자마자, 해당하는 페이지의 코드는 이미 백그라운드에서
          로딩이 되었기 때문에, 페이지 변화가 매우 빠르게 일어납니다!
        </Content>
        <Content>
          <CodeWithLink
            link="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works"
            isCode={false}
          >
            내비게이션의 동작원리
          </CodeWithLink>
          를 더 알고 싶다면 해당 링크를 참조하세요.
        </Content>
        <ContentQuiz
          answers={[
            "추가적인 CSS를 다운로드합니다.",
            "이미지를 미리 가져옵니다.",
            "연결된 루트의 코드를 미리 가져옵니다.",
            "연결된 루트의 게으른 로딩을 가능하게 합니다.",
          ]}
          correctAnswer="연결된 루트의 코드를 미리 가져옵니다."
          explanation="Next.js는 자동적으로 백그라운드에서 연결된 루트의 코드를 미리 가져옵니다. 유저가 링크를 클릭하자마자, 해당하는 페이지의 코드는 이미 백그라운드에서 로딩이 되었기 때문에, 페이지 변화가 매우 빠르게 일어납니다!"
          hint="미리 가져오기!"
          question="프로덕션 환경에서 <Link> 컴포넌트가 브라우저의 뷰포트에 보이면 Next.js는 무엇을 할까요?"
        />
        <ContentSubtitle
          title="패턴 : 동적 링크 보여주기"
          id="pattern-showing-active-links"
        />
        <Content>
          가장 보편적인 UI 패턴 중 유저가 현재 있는 페이지가 어디인지 알 수
          있도록 동적 링크를 보여주는 것입니다. 이 패턴을 구현하기 위해서는,
          URL로부터 현재 경로를 알아야 합니다. Next.js는 이를 위해{" "}
          <CodeWithLink
            link="https://nextjs.org/docs/app/api-reference/functions/use-pathname"
            isCode={false}
          >
            usePathname()
          </CodeWithLink>
          훅을 제공합니다. 이 훅은 현재 경로와 해당 패턴을 사용할 수 있도록
          체크할 수 있습니다.
        </Content>
        <Content>
          <CodeWithLink
            link="https://nextjs.org/docs/app/api-reference/functions/use-pathname"
            isCode={false}
          >
            usePathname()
          </CodeWithLink>
          이 훅이기 때문에, 우리는{" "}
          <CodeWithNoLink>nav-links.tsx</CodeWithNoLink>를 클라이언트 컴포넌트로
          변경해야 합니다. 파일의 최상단에 리액트의{" "}
          <CodeWithNoLink>"use client"</CodeWithNoLink>를 추가하고{" "}
          <CodeWithNoLink>usePathname()</CodeWithNoLink>을{" "}
          <CodeWithNoLink>next/navigation</CodeWithNoLink>으로부터 가져옵니다.
        </Content>
        <CodeBlock
          route="/app/ui/dashboard/nav-links.tsx"
          code={`'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 
// ...`}
          language="tsx"
        />
        <Content>
          그 다음, <CodeWithNoLink>{"<NavLinks/>"}</CodeWithNoLink> 컴포넌트에서
          경로를 <CodeWithNoLink>pathname</CodeWithNoLink> 변수에 할당해주세요.
        </Content>
        <CodeBlock
          route="/app/ui/dashboard/nav-links.tsx"
          code={`export default function NavLinks() {
  const pathname = usePathname();
  // ...
}`}
          language="tsx"
        />
        <Content>
          또한,우리는 이전에
          <CodeWithLink link="/tutorials/css-styling" isCode={false}>
            CSS 스타일링
          </CodeWithLink>{" "}
          에서 다루었던
          <CodeWithNoLink>clsx</CodeWithNoLink> 라이브러리를 사용하여 조건부
          클래스명을 적용할 수도 있습니다.{" "}
          <CodeWithNoLink>link.href</CodeWithNoLink>가{" "}
          <CodeWithNoLink>pathname</CodeWithNoLink>과 일치할 때, 링크가 파란색
          글자와 하늘색 배경화면으로 보여지게 할 수도 있습니다.
        </Content>
        <Content>
          <CodeWithNoLink>nav-links.tsx</CodeWithNoLink>의 최종 코드는 아래와
          같습니다.
        </Content>
        <CodeBlock
          route="/app/ui/dashboard/nav-links.tsx"
          code={`'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}`}
          language="tsx"
        />
        <Content>
          코드를 저장한 후에 로컬호스트에서 확인해보세요. 활성화된 링크가
          파란색으로 하이라이트된 걸 볼 수 있을 겁니다.
        </Content>
        <Complete
          completeChapter={data.chapter}
          nextChapter={nextData.chapter}
          nextChapterTitle={nextData.title}
          nextChapterDescription="이제 실제 데이터를 가져오기 위한 데이터베이스를 만들어보죠!"
          nextChapterLink={nextData.link}
        >
          축하드립니다! 우리는 페이지 간의 이동과 Next.js에서 클라이언트 사이드
          내비게이션을 하는 방법을 배웠습니다.
        </Complete>
      </article>
    </>
  );
}

export default Page;
