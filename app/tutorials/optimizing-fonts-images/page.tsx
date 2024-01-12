import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import ContentQuiz from "@/app/components/ui/Tutorial/quiz";
import { contents } from "@/app/lib/contents";
import Image from "next/image";

function Page() {
  const data = contents[2];
  const goals: Goal[] = [
    {
      type: "text",
      content: "next/fonts 를 활용하여 커스텀 폰트를 추가하는 방법",
    },
    { type: "image", content: "next/image 를 활용해서 이미지를 추가하는 방법" },
    {
      type: "check",
      content: "Next.js에서 폰트와 이미지가 어떻게 최적화되는지",
    },
  ];
  return (
    <>
      <NavBar chapter={data.chapter} title={data.title} />
      <article className="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6 text-left">
        <ArticleTop data={data} />
        <Content>
          지난 장에서, 우리는 Next.js 어플리케이션에서 어떻게 스타일을 입히는 지
          배웠습니다. 홈페이지에 커스텀 폰트와 hero 이미지를 추가해보면서 계속
          작업을 이어나가봅시다.
        </Content>
        <ContentGoal goals={goals} />
        <ContentTitle
          title="왜 폰트 최적화를 해야 하는가?"
          id="why-optimize-fonts"
        />
        <Content>
          폰트는 웹사이트의 디자인에 큰 영향을 미칩니다. 하지만 커스텀 폰트
          파일을 새로 가져와야하거나 로딩해야하는 상황이라면 웹사이트의 성능에
          영향을 미칠 수 있습니다.
        </Content>
        <Content>
          <CodeWithLink link="https://web.dev/articles/cls?hl=ko">
            Cumulative Layout shift
          </CodeWithLink>
          은 웹사이트의 성능과 사용자 경험을 측정하는 Google의 방법론입니다.
          폰트들에 대해서 보면, 레이아웃 변경은 브라우저가 초기에 대체 폰트나
          시스템 폰트로 텍스트를 렌더링한 다음 로드된 후 사용자 정의 폰트로
          교체할 때 발생합니다. 이러한 변화는 글자 크기의, 여백, 레이아웃 등의
          변화를 일으킬 수 있습니다.
        </Content>
        <div className="relative w-full h-[300px] mb-4">
          <Image
            src="/font-layout-shift.png"
            alt="font-layout-shift"
            fill={true}
          />
        </div>
        <Content>
          Next.js는 <CodeWithNoLink>next/font</CodeWithNoLink> 모듈을 사용하면
          자동적으로 폰트를 최적화합니다. 폰트 파일들을 빌드 시점에 다운로드하고
          다른 정적 자원들과 함께 호스팅합니다. 이것은 유저가 당신의
          어플리케이션을 방문할 때, 성능에 영향을 끼칠 수 있는 폰트의 추가적인
          네트워크 요청이 없다는 것입니다.
        </Content>
        <ContentQuiz
          answers={[
            "성능을 향상시키기 위해 추가적인 네트워크 요청을 발생시킵니다.",
            "모든 커스텀 폰트를 사용 불가하게 합니다.",
            "런타임에 모든 폰트를 미리 로드합니다.",
            "폰트 파일을 다른 정적 자원들과 함께 호스팅하여 추가적인 네트워크 요청이 없도록 합니다.",
          ]}
          correctAnswer="폰트 파일을 다른 정적 자원들과 함께 호스팅하여 추가적인 네트워크 요청이 없도록 합니다."
          explanation="Next.js는 폰트 파일들을 빌드 시점에 다운로드하고
          다른 정적 자원들과 함께 호스팅합니다. 이것은 유저가 당신의
          어플리케이션을 방문할 때, 성능에 영향을 끼칠 수 있는 폰트의 추가적인
          네트워크 요청이 없다는 것입니다."
          hint="추가적인 요청은 성능에 영향을 끼칠 수 있습니다."
          question="Next.js는 어떻게 폰트를 최적화하나요?"
        />
        <ContentTitle title="메인 폰트 추가하기" id="adding-a-primary-font" />
        <Content>
          이제 커스텀 구글 폰트를 추가해보면서 어떻게 작동하는지 살펴보죠!
        </Content>
        <Content>
          <CodeWithNoLink>/app/ui</CodeWithNoLink> 폴더에서{" "}
          <CodeWithNoLink>fonts.ts</CodeWithNoLink>라는 파일을 새로
          만들어봅시다. 이 파일은 어플리케이션에서 전체적으로 다 쓰이는 폰트를
          저장할 곳입니다.
        </Content>
        <Content>
          <CodeWithNoLink>Inter</CodeWithNoLink>를{" "}
          <CodeWithNoLink>next/font/google</CodeWithNoLink> 모듈로부터
          import해봅시다. 이게 메인 폰트가 될 것입니다. 그리고{" "}
          <CodeWithLink
            link="https://fonts.google.com/knowledge/glossary/subsetting"
            isCode={false}
          >
            하위 폰트
          </CodeWithLink>
          도 설정해주세요. 여기서는 <CodeWithNoLink>{"latin"}</CodeWithNoLink>을
          사용할 것입니다.
        </Content>
        <CodeBlock
          route="/app/ui/fonts.ts"
          code={`import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });`}
          language="typescript"
        />
        <Content>
          마지막으로 폰트를 <CodeWithNoLink>/app/layout.tsx</CodeWithNoLink>의{" "}
          <CodeWithNoLink>{"<body>"}</CodeWithNoLink>에 추가해주세요.
        </Content>
        <CodeBlock
          route="/app/layout.tsx"
          code={`import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={\`\${inter.className} antialiased\`}>{children}</body>
    </html>
  );
}`}
          language="tsx"
        />
        <Content>
          <CodeWithNoLink>Inter</CodeWithNoLink>을{" "}
          <CodeWithNoLink>{"<body>"}</CodeWithNoLink>에 추가함으로써, 폰트는
          어플리케이션 전체에 적용될 것입니다. 또한 우리는 텍스트를 부드럽게
          만들어주기 위해서 Tailwind{" "}
          <CodeWithLink
            link="https://tailwindcss.com/docs/font-smoothing"
            isCode={false}
          >
            antialiased
          </CodeWithLink>
          를 사용합니다. 필수는 아니지만, 부드럽게 만들어줍니다.
        </Content>
        <Content>
          브라우저로 이동한 다음, 개발자 도구를 열어서{" "}
          <CodeWithNoLink>{"body"}</CodeWithNoLink> 요소를 선택해보세요. 그러면
          아래 스타일을 보면 <CodeWithNoLink>Inter</CodeWithNoLink>과{" "}
          <CodeWithNoLink>Inter_Fallback</CodeWithNoLink>이 적용된 것을 볼 수
          있습니다.
        </Content>
      </article>
    </>
  );
}

export default Page;
