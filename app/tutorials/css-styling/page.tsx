import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Complete from "@/app/components/ui/Tutorial/complete";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/data";
import Image from "next/image";

function Page() {
  const data = contents[1];
  const nextData = contents[2];
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
            <ContentTitle title="Tailwind" id="tailwind" />
            <Content>
              <CodeWithLink link="https://tailwindcss.com/" isCode={false}>
                Tailwind
              </CodeWithLink>
              는 TSX 파일에서{" "}
              <CodeWithLink
                link="https://tailwindcss.com/docs/utility-first"
                isCode={false}
              >
                유틸리티 클래스
              </CodeWithLink>
              를 사용하여 개발 속도를 높여주는 CSS 프레임워크입니다.
            </Content>
            <Content>
              Tailwind에서는 클래스 이름을 추가함으로서 스타일을 추가합니다.
              예를 들어 <CodeWithNoLink>"text-blue-500"</CodeWithNoLink>을
              추가하면 <CodeWithNoLink>h1</CodeWithNoLink>의 글자가 파란색으로
              바뀝니다.
            </Content>
            <CodeBlock
              code={`<h1 className="text-blue-500">I'm blue!</h1>`}
              language="html"
            />
            <Content>
              CSS 스타일들이 글로벌하게 공유되고 있음에도 불구하고, 각각의
              클래스는 각각의 요소에 개별적으로 적용됩니다. 즉, 요소를
              추가하거나 삭제할 때, 개별적인 스타일시트, 스타일 충돌 등을
              신경쓰지 않아도 됩니다.
            </Content>
            <Content>
              <CodeWithNoLink>create-next-app</CodeWithNoLink>을 통해 새로운
              프로젝트를 시작했다면, Next.js는 Tailwind를 쓸지 안 쓸지 물어볼
              것입니다. 만약 <CodeWithNoLink>yes</CodeWithNoLink>를 선택했다면,
              Next.js는 Tailwind를 어플리케이션에서 사용하기 위한 필요한 설정과
              패키지를 설치할 것입니다.
            </Content>
            <Content>
              <CodeWithNoLink>/app/page.tsx</CodeWithNoLink>를 보면, Tailwind
              클래스를 사용한 예시를 볼 수 있습니다.
            </Content>
            <CodeBlock
              route="/app/page.tsx"
              code={`import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
 
export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}`}
              language="tsx"
            />
            <Content>
              Tailwind를 처음 써봐도 전혀 걱정하지 않아도 됩니다. 시간을 아끼기
              위해서, 앞으로 사용할 컴포넌트들의 스타일을 이미 작성했습니다.
            </Content>
            <Content>
              이제 Tailwind를 가지고 놀아보죠. 아래의 코드를 복사한 후
              <CodeWithNoLink>/app/page.tsx</CodeWithNoLink>에서
              <CodeWithNoLink>{"<p>"}</CodeWithNoLink> 요소 위에 붙여넣어보세요.
            </Content>
            <CodeBlock
              route="/app/page.tsx"
              code={`<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>`}
              language="tsx"
            />
            <Content>
              만약 전통적인 CSS나 JSX와 스타일을 구별해서 사용하고 싶다면 - CSS
              모듈은 아주 좋은 대안이 될 것입니다.
            </Content>

            {/* 퀴즈 들어가야됨 */}

            <ContentTitle title="CSS 모듈" id="CSS-modules" />
            <Content>
              <CodeWithLink
                link="https://nextjs.org/docs/pages/building-your-application/styling"
                isCode={false}
              >
                CSS Modules
              </CodeWithLink>
              은 고유의 클래스명을 통해서 CSS 파일을 컴포넌트와 연결시켜줍니다.
              따라서 스타일 충돌에 대해서 걱정할 필요가 없죠.
            </Content>
            <Content>
              우리는 이 코스에서 Tailwind를 계속 사용할 것입니다. 하지만, CSS
              모듈을 사용해서 위의 퀴즈에서 얻은 결과와 똑같은 결과를
              만들어봅시다.
            </Content>
            <Content>
              <CodeWithNoLink>/app/ui</CodeWithNoLink> 안에서,{" "}
              <CodeWithNoLink>home.module.css</CodeWithNoLink>라는 파일을 만들고
              아래의 CSS 규칙들을 추가해보세요.
            </Content>
            <CodeBlock
              route="/app/ui/home.module.css"
              code={`.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}`}
              language="css"
            />
            <Content>
              이제 <CodeWithNoLink>/app/page.tsx</CodeWithNoLink>에서 파일을
              불러와서 Tailwind 클래스 명 대신에{" "}
              <CodeWithNoLink>styles.shape</CodeWithNoLink>를{" "}
              <CodeWithNoLink>{"<div>"}</CodeWithNoLink>에 추가해보세요.
            </Content>
            <CodeBlock
              route="/app/page.tsx"
              code={`import styles from '@/app/ui/home.module.css';

<div className={styles.shape}>`}
              language="tsx"
            />
            <Content>
              이제 저장한 후에 브라우저에서 결과를 확인해볼까요? 퀴즈에서 생겼던
              모양과 똑같은 모양을 볼 수 있습니다.
            </Content>
            <Content>
              Tailwind와 CSS 모듈은 Next.js 어플리케이션에서 스타일을 추가하는
              가장 흔한 방법들입니다. 둘 중에 어떤 것을 사용할 지는 개인의
              선호도에 따라 결정하면 될 것 같습니다. 하나의 어플리케이션에서 두
              가지 방법을 모두 사용할 수도 있습니다!
            </Content>

            {/* 퀴즈 들어가야됨 */}

            <ContentTitle
              title="Using the clsx library to toggle class names"
              id="using-the-clsx-library-to-toggle-class-names"
            />
            <Content>
              개발을 하다보면 상태나 다른 특정 조건에 따라서 조건부 스타일링을
              적용시켜야할 수도 있습니다.
            </Content>
            <Content>
              <CodeWithLink link="https://www.npmjs.com/package/clsx">
                clsx
              </CodeWithLink>
              는 클래스명을 쉽게 토글할 수 있도록 도와주는 라이브러리입니다. 더
              자세한 내용들에 대해서는{" "}
              <CodeWithLink
                link="https://github.com/lukeed/clsx"
                isCode={false}
              >
                공식 문서
              </CodeWithLink>
              를 보는 것을 추천드리지만, 기본적인 사용법은 다음과 같습니다.
            </Content>
            <ul className="list-disc pl-8 flex flex-col gap-4 my-5">
              <li>
                <CodeWithNoLink>status</CodeWithNoLink>를 받는{" "}
                <CodeWithNoLink>InvoiceStatus</CodeWithNoLink> 컴포넌트를 만들고
                싶다고 가정해보죠. 상태는{" "}
                <CodeWithNoLink>'pending'</CodeWithNoLink>이나{" "}
                <CodeWithNoLink>'paid'</CodeWithNoLink>입니다.
              </li>
              <li>
                만약 <CodeWithNoLink>'paid'</CodeWithNoLink>라면, 색깔을
                초록색으로 바꾸고 싶습니다. 만약{" "}
                <CodeWithNoLink>'pending'</CodeWithNoLink>라면, 색깔을 회색으로
                바꾸고 싶습니다.
              </li>
            </ul>
            <Content>
              이러한 경우에는 <CodeWithNoLink>clsx</CodeWithNoLink>를 사용해서
              조건부 클래스를 적용시킬 수 있습니다.
            </Content>
            <CodeBlock
              route="/app/ui/invoices/status.tsx"
              code={`import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}`}
              language="tsx"
            />

            {/* 퀴즈 들어가야됨 */}

            <ContentTitle
              title="다른 스타일링 방법들"
              id="other-styling-solutions"
            />
            <Content>
              우리가 지금까지 살펴본 접근법 외에도 다양한 스타일링 방법들을
              Next.js 어플리케이션에 적용시킬 수 있습니다.
            </Content>
            <ul className="list-disc pl-8 flex flex-col gap-4 my-5">
              <li>
                <CodeWithNoLink>.css</CodeWithNoLink>나{" "}
                <CodeWithNoLink>.scss</CodeWithNoLink> 파일을 import하여
                사용하는 Sass
              </li>
              <li>
                CSS-in-JS 라이브러리 -{" "}
                <CodeWithLink
                  link="https://github.com/vercel/styled-jsx"
                  isCode={false}
                >
                  styled-jsx
                </CodeWithLink>
                ,
                <CodeWithLink
                  link="https://github.com/vercel/next.js/tree/canary/examples/with-styled-components"
                  isCode={false}
                >
                  styled-components
                </CodeWithLink>
                ,
                <CodeWithLink
                  link="https://github.com/vercel/next.js/tree/canary/examples/with-emotion"
                  isCode={false}
                >
                  emotion
                </CodeWithLink>
              </li>
            </ul>
            <Content>
              더 많은 정보들을 원한다면,{" "}
              <CodeWithLink
                link="https://nextjs.org/docs/app/building-your-application/styling"
                isCode={false}
              >
                CSS 관련 문서
              </CodeWithLink>
              를 한 번 살펴보세요.
            </Content>
            <Complete
              completeChapter={data.chapter}
              nextChapter={nextData.chapter}
              nextChapterTitle={nextData.title}
              nextChapterDescription="이제 우리는 홈페이지에 hero 이미지와 커스텀 폰트를 추가해볼 것입니다."
              nextChapterLink={nextData.link}
            >
              축하드립니다! Next.js 어플리케이션에서 스타일을 추가하는 다양한
              방법을 살펴보았습니다.
            </Complete>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Page;
