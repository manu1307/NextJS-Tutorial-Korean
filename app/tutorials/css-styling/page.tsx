import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/data";
import Image from "next/image";

function Page() {
  const data = contents[1];
  const goals: Goal[] = [
    {
      type: "docs",
      content: "어플리케이션에 글로벌 CSS 파일을 어떻게 적용할 것인지",
    },
    { type: "write", content: "스타일링의 2가지 방법 : Tailwind와 CSS 모듈" },
    {
      type: "utils",
      content:
        "clsx 유틸리티 패키지를 사용하여 조건부로 클래스 이름을 추가하는 방법",
    },
  ];
  return (
    <div>
      <section className="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <NavBar chapter={data.chapter} title={data.title} />
          <article className="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6 text-left">
            <ArticleTop data={data} />

            <Content>
              지금 우리의 페이지에는 아무런 스타일이 없습니다. 이제부터 Next.js
              어플리케이션을 스타일할 수 있는 다양한 방법을 살펴보죠.
            </Content>
            <ContentGoal goals={goals} />
            <ContentTitle title="글로벌 스타일" id="global-styles" />
            <Content>
              <CodeWithNoLink>/app/ui</CodeWithNoLink>폴더를 살펴보면,{" "}
              <CodeWithNoLink>global.css</CodeWithNoLink>라는 파일을 볼 수 있을
              겁니다. 당신은 이 파일을 통해 어플리케이션의 모든 페이지에 CSS를
              추가할 수 있습니다. - CSS 리셋 규칙, 링크 스타일, 폰트 설정 등
            </Content>
            <Content>
              당신은 <CodeWithNoLink>global.css</CodeWithNoLink>를
              어플리케이션의 어떠한 곳에서 import 할 수 있지만, 가장 상위
              컴포넌트에 추가하는 것이 더 좋은 연습이 될 것입니다. Next.js에서
              이를{" "}
              <CodeWithLink
                link="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required"
                isCode={false}
              >
                root Layout
              </CodeWithLink>
              이라고 부릅니다.
            </Content>
            <Content>
              이제 <CodeWithNoLink>/app/layout.tsx</CodeWithNoLink>에서{" "}
              <CodeWithNoLink>global.css</CodeWithNoLink>를 import하여 글로벌
              스타일을 추가해봅시다.
            </Content>
            <CodeBlock
              route={"/app/layout.tsx"}
              code={`import '@/app/ui/global.css';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
              language="tsx"
            ></CodeBlock>
            <Content>
              개발 서버가 계속 실행 중에 두고, 변경된 코드를 저장한 후
              브라우저로 접속해보세요. 그렇다면 아래와 같은 홈페이지가 뜨게 될
              겁니다.
            </Content>
            <div className="relative w-full h-[560px]">
              <Image
                src="/home-page-with-tailwind.png"
                alt="home-page-with-tailwind"
                fill={true}
              />
            </div>
            <Content>
              잠시만요! 아무런 CSS 규칙을 추가하지 않았는데 이 스타일들은 다
              어디서 온 걸까요?
            </Content>
            <Content>
              <CodeWithNoLink>global.css</CodeWithNoLink>의 상단을 살펴보면,{" "}
              <CodeWithNoLink>@tailwind</CodeWithNoLink>로 시작하는 코드를 볼 수
              있습니다.
            </Content>
            <CodeBlock
              route="/app/ui/global.css"
              code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
              language="css"
            />
          </article>
        </div>
      </section>
    </div>
  );
}

export default Page;
