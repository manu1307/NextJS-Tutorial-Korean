import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/contents";
import React from "react";

function Page() {
  const data = contents[4];
  const nextData = contents[5];
  return (
    <>
      <NavBar chapter={data.chapter} title={data.title} />
    </>
  );
}

export default Page;
