import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/data";
import React from "react";

function Page() {
  const data = contents[0];
  return (
    <div>
      <section className="py-20 ">
        <div className="container mx-auto px-6 text-center">
          <NavBar chapter={data.chapter} title={data.title} />
          <h3 className="text-2xl mb-8 text-gray-500 dark:text-gray-200">
            본 튜토리얼은 NextJS의 공식 홈페이지를 참고하여 만들었습니다.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Page;
