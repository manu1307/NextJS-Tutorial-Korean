import React from "react";

function ContentList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-8 flex flex-col gap-4 my-5">{children}</ul>
  );
}

export default ContentList;
