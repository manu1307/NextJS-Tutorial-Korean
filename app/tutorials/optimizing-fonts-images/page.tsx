import NavBar from "@/app/components/ui/Tutorial/nav-bar";
import { contents } from "@/app/lib/contents";

function Page() {
  const data = contents[2];
  return (
    <>
      <NavBar chapter={data.chapter} title={data.title} />
    </>
  );
}

export default Page;
