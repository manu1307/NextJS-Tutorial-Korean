import ArticleTop from "@/app/components/ui/Tutorial/article-top";
import CodeWithLink from "@/app/components/ui/Tutorial/code-with-link";
import CodeWithNoLink from "@/app/components/ui/Tutorial/code-with-no-link";
import CodeBlock from "@/app/components/ui/Tutorial/codeblock";
import Complete from "@/app/components/ui/Tutorial/complete";
import Content from "@/app/components/ui/Tutorial/content";
import ContentSubtitle from "@/app/components/ui/Tutorial/content-subtitle";
import ContentTitle from "@/app/components/ui/Tutorial/content-title";
import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/data";
import Image from "next/image";

import React from "react";

function Page() {
  const data = contents[0];
  const nextData = contents[1];
  return (
    <div>
      <section className="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <NavBar chapter={data.chapter} title={data.title} />
          <article className="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6 text-left">
            <ArticleTop data={data} />
            <ContentTitle
              title={"새로운 프로젝트 생성하기"}
              id="creating-a-new-project"
            />
            <Content>
              Next,js 어플리케이션을 만들기 위해, 터미널을 연 후,
              <CodeWithLink link="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#basic_built-in_terminal_commands">
                cd
              </CodeWithLink>
              를 통해 프로젝트 생성을 원하는 디렉토리로 이동합니다. 이동한 후
              아래와 같이 입력합니다.
            </Content>
            <CodeBlock
              route={">_ Terminal"}
              code={`npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"`}
              language="powershell"
              showLineNumbers={false}
            />
            <Content>
              위 명령어는 Next.js 어플리케이션을 생성하는 명령어인
              <CodeWithLink
                link="https://nextjs.org/docs/app/api-reference/create-next-app"
                blank={false}
              >
                create-next-app
              </CodeWithLink>
              를 사용합니다. 위의 명령어에서{" "}
              <CodeWithNoLink>--example</CodeWithNoLink> 플래그는 해당 코스를
              위한 소스 코드를
              <CodeWithLink
                isCode={false}
                link="https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
              >
                starter example
              </CodeWithLink>
              에서 가져오기 위해 사용되어집니다.
            </Content>
            <ContentTitle
              title="프로젝트 살펴보기"
              id="exploring-the-project"
            />
            <Content>
              코드를 처음부터 작성해야하는 다른 튜토리얼과는 다르게, 대부분의
              코드는 이미 당신을 위해 작성되어 있습니다. 이것은 이미 코드
              베이스가 있는 곳에서 일하게 될 실제 개발 환경을 잘 반영하고
              있습니다.
            </Content>
            <Content>
              우리의 목표는 Next.js의 핵심 기능을 배우는 것이기 때문에, 모든
              코드를 다 작성할 필요는 없습니다.
            </Content>
            <Content>
              설치가 완료되었다면, 당신의 코드 에디터에서 프로젝트를 열고{" "}
              <CodeWithNoLink>nextjs-dashboard</CodeWithNoLink>로 이동합니다.
            </Content>
            <CodeBlock
              route=">_ Terminal"
              code="cd nextjs-dashboard"
              language="powershell"
              showLineNumbers={false}
            />
            <Content>프로젝트를 조금만 살펴보죠.</Content>

            <ContentSubtitle title="폴더 구조" id="folder-structure" />
            <Content>폴더 구조가 아래와 같은 것을 확인할 수 있습니다.</Content>
            <div className="relative w-full h-[400px]">
              <Image
                src="/learn-folder-structure.png"
                alt="learn-folder-structure"
                fill={true}
              />
            </div>

            <ul className="list-disc pl-8 flex flex-col gap-4 my-5">
              <li>
                <CodeWithNoLink>/app</CodeWithNoLink> : 어플리케이션의 모든
                루트, 컴포넌트, 로직들이 담겨져있는 폴더이고, 대부분의 작업은
                여기서 이루어집니다.
              </li>
              <li>
                <CodeWithNoLink>/app/lib</CodeWithNoLink> : 어플리케이션에서
                사용될 함수들이 담겨져있습니다. 예를들어 재사용 가능한 함수나
                데이터를 가져오는 함수들이 들어있습니다.
              </li>
              <li>
                <CodeWithNoLink>/app/ui</CodeWithNoLink> : 어플리케이션의 UI
                컴포넌트들이 담겨져있습니다. 카드, 테이블, 폼 등의 컴포넌트들이
                들어있습니다. 시간을 아끼기 위해, 이러한 컴포넌트들은 이미
                스타일까지 작성이 완료되어있습니다.
              </li>
              <li>
                <CodeWithNoLink>/public</CodeWithNoLink> : 이미지와 같이 정적인
                파일들이 들어있습니다.
              </li>
              <li>
                <CodeWithNoLink>/scripts</CodeWithNoLink> : 이후 다른 챕터에서
                데이터베이스를 채우는 데 사용될 시드 스크립트가 포함되어
                있습니다.
              </li>
              <li>
                <b>Config Files</b>: 아마{" "}
                <CodeWithNoLink>next.config.js</CodeWithNoLink>와 같은 설정
                파일들이 어플리케이션의 루트에 있음을 알 수 있습니다. 대부분의
                파일들은 <CodeWithNoLink>create-next-app</CodeWithNoLink>을
                사용하면서 미리 설정되어있거나 생성된 것이므로 해당 코스를
                수행하는데 이를 수정할 필요는 없습니다.
              </li>
            </ul>
            <Content>
              프로젝트를 자유롭게 둘러보시길 바랍니다. 코드가 무엇을 의미하는지
              전부 다 이해하지 못하더라도 전혀 걱정할 필요 없습니다.
            </Content>
            <ContentSubtitle title="Placeholder 데이터" id="placeholder-data" />
            <Content>
              유저 인터페이스를 만들 때, 몇 개의 placeholder 데이터를 가지는
              것을 매우 도움이 됩니다. 만약 데이터베이스나 API가 아직 준비되지
              않았다면, 당신은
            </Content>
            <ul className="list-disc pl-8 flex flex-col gap-4 my-5">
              <li>
                Placeholder 데이터를 JSON 포맷이나 Javascript 객체로 사용하거나
              </li>
              <li>
                <CodeWithLink link="https://mockapi.io/" isCode={false}>
                  mockAPI
                </CodeWithLink>
                와 같은 서드 파티 라이브러리
              </li>
            </ul>
            <Content>
              이번 프로젝트에서는,{" "}
              <CodeWithNoLink>app/lib/placeholder-data.js</CodeWithNoLink>에
              임의의 placeholder 데이터를 제공하고 있습니다. 각각의 Javascript
              객체는 당신의 데이터베이스의 테이블을 의미합니다. 예를 들어
              invoices 테이블에서
            </Content>
            <CodeBlock
              route="/app/lib/placeholder-data.js"
              code={`const invoices = [
      {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];`}
              language="jsx"
              showLineNumbers={true}
            />
            <Content>
              6장의 <span className="text-blue-500">데이터베이스 설정하기</span>
              에서, 이 데이터들이 데이터베이스에 저장되는 방법을 배울 것입니다.
            </Content>
            <ContentSubtitle title="타입스크립트" id="typescript" />
            <Content>
              이 프로젝트는 Typescript로 작성되었기 때문에 대부분의 파일들이{" "}
              <CodeWithNoLink>.ts</CodeWithNoLink>나{" "}
              <CodeWithNoLink>.tsx</CodeWithNoLink>로 끝나는 것을 볼 수
              있습니다. 우리는 이 코스가 최근 웹 생태계를 반영할 수 있기를
              원했습니다.
            </Content>
            <Content>
              Typescript에 대해서 몰라도 괜찮습니다. - 저희가 Typescript가
              필요한 부분의 코드는 제공할 것입니다.
            </Content>
            <Content>
              이제 <CodeWithNoLink>/app/lib/definitions.ts</CodeWithNoLink>{" "}
              파일을 한 번 보시길 바랍니다. 여기서 우리는 데이터베이스에서 받을
              Typescript의 타입들을 정의하고 있습니다. 예를 들어 invoices
              테이블은 아래와 같은 타입을 가집니다.
            </Content>
            <CodeBlock
              route="/app/lib/definitions.ts"
              code={`export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};`}
              language="typescript"
            />
            <Content>
              Typescript를 사용함으로써, 우리는 컴포넌트나 데이터베이스에 잘못된
              포맷의 데이터를 전달하는 것을 방지할 수 있습니다. 예를 들어
              amount에 number가 아닌 string을 전달하려고 하면, Typescript는
              에러를 발생시킵니다.
            </Content>
            <ContentTitle
              title="개발 서버 실행시키기"
              id="running-the-development-server"
            />
            <Content>
              <CodeWithNoLink>npm i</CodeWithNoLink>를 실행시켜서 프로젝트의
              패키지를 설치해줍니다.
            </Content>
            <CodeBlock
              route=">_ Terminal"
              code={`npm i`}
              language="powershell"
              showLineNumbers={false}
            />
            <Content>
              <CodeWithNoLink>npm run dev</CodeWithNoLink>를 실행시켜서 개발
              서버를 실행시켜줍니다.
            </Content>
            <CodeBlock
              route=">_ Terminal"
              code={`npm run dev`}
              language="powershell"
              showLineNumbers={false}
            />
            <Content>
              <CodeWithNoLink>npm run dev</CodeWithNoLink>는 Next.js 개발 서버를
              포트번호 <CodeWithNoLink>3000</CodeWithNoLink>에서 실행시킵니다.
              작동되는지 확인해볼까요?
              <CodeWithLink link="http://localhost:3000">
                http://localhost:3000
              </CodeWithLink>
              로 접속해보세요. 그러면 아래와 같이 페이지가 나오게 됩니다.
            </Content>
            <div className="relative w-full h-[150px] p-4 bg-vercel-200 rounded-xl">
              <Image
                src={"/acme-unstyled.png"}
                alt="acme-unstyled"
                fill={true}
              />
            </div>
            <Complete
              completeChapter={data.chapter}
              nextChapter={nextData.chapter}
              nextChapterTitle={nextData.title}
              nextChapterDescription="이제 어플리케이션에 스타일을 적용시키는 다양한 방법을 살펴보고 홈페이지에 적용해봅시다."
              nextChapterLink={nextData.link}
            >
              축하드립니다! 스타터 예제를 통해서 Next.js 어플리케이션을 만들고
              개발 서버에 실행까지 완료했습니다.
            </Complete>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Page;
