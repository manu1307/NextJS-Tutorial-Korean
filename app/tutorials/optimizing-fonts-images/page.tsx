import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Complete from "@/app/components/ui/Tutorial/complete";
import Content from "@/app/components/ui/Tutorial/content";
import ContentGoal, { Goal } from "@/app/components/ui/Tutorial/content-goal";
import ContentList from "@/app/components/ui/Tutorial/content-list-wrapper";
import ContentPractice from "@/app/components/ui/Tutorial/content-practice";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import ContentQuiz from "@/app/components/ui/Tutorial/quiz";
import { contents } from "@/app/lib/contents";
import Image from "next/image";

function Page() {
  const data = contents[2];
  const nextData = contents[3];
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
        <ContentTitle
          title="연습 : 2차적인 폰트 추가하기"
          id="adding-a-secondary-font"
        />
        <Content>
          우리는 추가적인 폰트를 특정 요소에 추가할 수도 있습니다.
        </Content>
        <Content>
          이제 당신의 차례입니다! <CodeWithNoLink>fonts.ts</CodeWithNoLink> 에서{" "}
          <CodeWithNoLink>Lusitana</CodeWithNoLink> 2차 폰트를 추가하고{" "}
          <CodeWithNoLink>/app/page.tsx</CodeWithNoLink>파일에 있는{" "}
          <CodeWithNoLink>{`<p/>`}</CodeWithNoLink> 요소에 적용시켜보세요.
          이전에 폰트를 적용시킨 것과 달리 추가적으로 <b>font weight</b>를
          설정해야합니다.
        </Content>
        <Content>
          준비가 되었다면, 아래의 코드를 펼쳐서 솔루션을 확인해보세요.
        </Content>
        <ContentPractice>
          <CodeBlock
            route="/app/ui/fonts.ts"
            code={`import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});`}
            language="typescript"
          />
          <CodeBlock
            route="/app/page.tsx"
            code={`import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
 
export default function Page() {
  return (
    // ...
    <p
      className={\`\${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal\`\}
    >
      <strong>Welcome to Acme.</strong> This is the example for the{' '}
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        Next.js Learn Course
      </a>
      , brought to you by Vercel.
    </p>
    // ...
  );
}`}
            language="tsx"
          />
        </ContentPractice>
        <Content>
          마지막으로 <CodeWithNoLink>{"<AcmeLogo/>"}</CodeWithNoLink>도
          Lusitana를 사용하고 있습니다. 에러를 방지하기 위해서 주석 처리가
          되어있는데, 주석을 해제해도 됩니다.
        </Content>
        <CodeBlock
          route="/app/page.tsx"
          code={`// ...
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* ... */}
      </div>
    </main>
  );
}`}
          language="tsx"
        />
        <Content>
          좋습니다! 당신은 어플레케이션에 2개의 커스텀 폰트를 추가했습니다!
          다음으로 홈페이지에 hero 이미지를 추가해봅시다.
        </Content>
        <ContentTitle
          title="왜 이미지를 최적화하는가?"
          id="why-optimize-images"
        />
        <Content>
          Next.js 는 이미지와 같은<b>정적 자원</b>을{" "}
          <CodeWithNoLink>/public</CodeWithNoLink> 폴더를 통해 제공합니다.{" "}
          <CodeWithNoLink>/public</CodeWithNoLink> 안에 있는 파일들은
          어플리케이션에서 참조가 가능합니다.
        </Content>
        <Content>
          일반 HTML에서는 아래와 같이 이미지를 추가할 수 있습니다.
        </Content>
        <CodeBlock
          code={`<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>`}
          language="html"
        />
        <Content>이것이 의미하는 것은 당신이 수동으로 :</Content>
        <ContentList>
          <li>
            이미지가 다른 화면 크기에 따라 반응형으로 동작으로 있도록 해주어야
            합니다.
          </li>
          <li>기기들에 따라 이미지 크기를 지정해주어야 합니다.</li>
          <li>이미지들이 로딩될 때 화면의 변화를 방지해야 합니다. </li>
          <li>
            유저 뷰포트 바깥에 있는 이미지들의 게으른 로딩을 설정해주어야
            합니다.
          </li>
        </ContentList>
        <Content>
          이미지 최적화는 그 자체로도 웹 개발에서 거대한 주제입니다. 이러한
          최적화를 일일이 설정해주는 대신,{" "}
          <CodeWithNoLink>next/image</CodeWithNoLink> 컴포넌트를 활용함으로써
          이미지를 자동으로 최적화할 수 있습니다.
        </Content>
        <ContentTitle title={`<Image/> 컴포넌트`} id="the-image-component" />
        <Content>
          <CodeWithNoLink>{`<Image>`}</CodeWithNoLink> 컴포넌트는 HTML{" "}
          <CodeWithNoLink>{`<img>`}</CodeWithNoLink> 태그에 자동적인 이미지
          최적화를 더한 확장판이다. 또한
        </Content>
        <ContentList>
          <li>이미지들이 로딩중일 때의 레이아웃 변화를 막하줍니다.</li>
          <li>
            큰 크기의 이미지를 작은 뷰포트를 가진 기기에 출력할 때 크기를
            조절해줍니다.
          </li>
          <li>
            이미지들의 게으른 로딩을 지원합니다. (뷰포트에 진입할 때 이미지를
            로드합니다.)
          </li>
          <li>
            이미지들을{" "}
            <CodeWithLink
              link="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp"
              isCode={false}
            >
              WebP
            </CodeWithLink>
            나
            <CodeWithLink
              link="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp"
              isCode={false}
            >
              AVIF
            </CodeWithLink>
            와 같은 최신 포맷으로 이미지를 제공합니다. (단, 브라우저가
            지원해야합니다.)
          </li>
        </ContentList>
        <ContentTitle
          title="데스크탑 hero 이미 추가하기"
          id="adding-the-desktop-hero-image"
        />
        <Content>
          이제 <CodeWithNoLink>{`<Image>`}</CodeWithNoLink> 컴포넌트를 사용해
          봅시다. <CodeWithNoLink>/public</CodeWithNoLink> 폴더를 살펴보면, 두
          개의 이미지를 확인할 수 있습니다. 하나는{" "}
          <CodeWithNoLink>hero-desktop.png</CodeWithNoLink> 이고, 다른 하나는{" "}
          <CodeWithNoLink>hero-mobile.png</CodeWithNoLink>. 이 두 개의 이미지는
          완전히 다른 이미지입니다. 사용자의 디바이스가 데스크탑인지
          모바일인지에 따라 다른 이미지를 보여줄 것입니다.
        </Content>
        <Content>
          <CodeWithNoLink>/app/page.tsx</CodeWithNoLink>에서{" "}
          <CodeWithLink link="https://nextjs.org/docs/pages/api-reference/components/image">
            next/image
          </CodeWithLink>
          로부터 컴포넌트를 import해주세요. 그리고 주석 아래에 이미지를
          추가해주세요.
        </Content>
        <CodeBlock
          route="/app/page.tsx"
          code={`import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //...
  );
}`}
          language="tsx"
        />
        <Content>
          여기서 <CodeWithNoLink>width</CodeWithNoLink>를{" "}
          <CodeWithNoLink>1000</CodeWithNoLink>으로,
          <CodeWithNoLink>height</CodeWithNoLink>를{" "}
          <CodeWithNoLink>760</CodeWithNoLink> 픽셀로 설정을 했습니다.
          <CodeWithNoLink>width</CodeWithNoLink>와
          <CodeWithNoLink>height</CodeWithNoLink>를 정해주는 것은 레아이웃
          변화를 방지할 수 있고, 이는 원본 이미지의 크기 비율과 일치해야 합니다.
        </Content>
        <Content>
          또한 <CodeWithNoLink>hidden</CodeWithNoLink> 클래스를 통해 모바일
          화면의 DOM에서 이미지를 안 보이게 하였고,{" "}
          <CodeWithNoLink>md:block</CodeWithNoLink>을 통해 데스크탑 화면에서는
          이미지를 보이게 했습니다.
        </Content>
        <Content>홈페이지는 아래와 같은 화면을 나타내게 될 것입니다.</Content>
        <Image
          className="bg-vercel-200 rounded-xl"
          src={"/home-page-with-hero.png"}
          alt="home-page-with-hero"
          width={960}
          height={566}
        />
        <ContentTitle
          title="연습 : 모바일 hero 이미지 추가하기"
          id="adding-the-mobile-hero-image"
        />
        <Content>
          자 이제 당신의 차례입니다! 당신이 추가한 이미지 코드 아래에,{" "}
          <CodeWithNoLink>hero-mobile.png</CodeWithNoLink>를 위한 또 다른{" "}
          <CodeWithNoLink>{`<Image>`}</CodeWithNoLink> 컴포넌트를 추가해보세요.
        </Content>
        <ContentList>
          <li>
            이미지는
            <CodeWithNoLink>width</CodeWithNoLink>를
            <CodeWithNoLink>500</CodeWithNoLink>,
            <CodeWithNoLink>height</CodeWithNoLink>는
            <CodeWithNoLink>620</CodeWithNoLink> 픽셀로 설정해주세요.
          </li>
          <li>
            이미지는 모바일 스크린에서는 보여야 하고, 데스크탑에서는 안 보여야
            합니다. - 개발자 도구를 통해서 데스크탑, 모바일 화면을 확인할 수
            있습니다.
          </li>
        </ContentList>
        <Content>
          준비가 되었다면, 아래의 코드를 펼쳐서 솔루션을 확인해보세요.
        </Content>
        <ContentPractice>
          <CodeBlock
            route="/app/page.tsx"
            code={`import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
    </div>
    //...
  );
}`}
            language="tsx"
          />
        </ContentPractice>
        <Content>
          좋습니다! 홈페이지에 이제 커스텀 폰트와 hero 이미지가 추가되었습니다.
        </Content>
        <ContentQuiz
          answers={["참", "거짓"]}
          question="참 또는 거짓: 차수와 웹 폰트가 없는 이미지는 레이아웃 변화의 일반적인 원인입니다."
          hint="맞는 말이잖아!"
          correctAnswer="참"
          explanation=" 차수와 웹 폰트가 없는 이미지는 레이아웃 변화의 일반적인 원인입니다. 왜냐하면 브라우저가 추가적인 리소스들을 다운로드해야하기 때문이죠."
        />
        <ContentTitle
          title="추가적으로 읽으면 좋을 문서"
          id="recommended-reading"
        />
        <Content>
          이 주제들에 대해서는 배울 것이 더 많습니다. 폰드와 이미지에 대해 더
          깊게 배워보고 싶다면, 아래 문서들을 읽어보세요.
        </Content>
        <ContentList>
          <li>
            <CodeWithLink
              link="https://nextjs.org/docs/app/building-your-application/optimizing/images"
              isCode={false}
            >
              이미지 최적화 관련
            </CodeWithLink>
          </li>
          <li>
            <CodeWithLink
              link="https://nextjs.org/docs/app/building-your-application/optimizing/fonts"
              isCode={false}
            >
              폰트 최적화 관련
            </CodeWithLink>
          </li>
          <li>
            <CodeWithLink
              link="https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia"
              isCode={false}
            >
              이미지들이 있을 때 웹 성능 개선 (MDN)
            </CodeWithLink>
          </li>
          <li>
            <CodeWithLink
              link="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts"
              isCode={false}
            >
              웹 폰트 (MDN)
            </CodeWithLink>
          </li>
        </ContentList>
        <Complete
          completeChapter={data.chapter}
          nextChapter={nextData.chapter}
          nextChapterTitle={nextData.title}
          nextChapterDescription="이제 중첩된 레이아웃과 페이지를 사용하여 대시보드 경로를 만들어 봅시다!"
          nextChapterLink={nextData.link}
        >
          축하드립니다! Next.js를 활용해서 폰트와 이미지를 최적화하는 방법을
          배웠습니다.
        </Complete>
      </article>
    </>
  );
}

export default Page;
