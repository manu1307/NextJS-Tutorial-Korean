// import Image from "next/image";
// import Header from "./ui/Header";

// export default function Home() {
//   return (
//     // <main className="flex min-h-screen flex-col items-center justify-between">

//     //   <Header/>
//     // </main>

//   );
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2mNN9fmlcTj
 */
import Card from "./components/ui/Card";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Typing from "./components/ui/Typing";

import Link from "next/link";
import { contents } from "./lib/data";

export default function Page() {
  return (
    <>
      <Header />
      <section className="py-20 my-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white ">
            Welcome to <Typing word={"Next.js"} interval={200} />
          </h2>
          <h3 className="text-2xl mb-8 text-gray-500 dark:text-gray-200">
            본 튜토리얼은 NextJS의 공식 홈페이지를 참고하여 만들었습니다.
          </h3>

          <Link href="/tutorials/getting-started">
            <button className="bg-gray-800 text-white font-bold rounded-full mt-4 py-4 px-8 shadow-lg uppercase tracking-wider">
              시작하기
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            튜토리얼 목차
          </h2>
          <div className="items-center flex-wrap mb-20 grid md:grid-cols-4 md:grid-rows-4 gap-x-8 gap-y-16">
            {contents.map((content) => {
              return (
                <Card
                  chapter={content.chapter}
                  title={content.title}
                  link={content.link}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
