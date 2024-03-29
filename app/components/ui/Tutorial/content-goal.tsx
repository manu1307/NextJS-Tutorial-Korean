import React from "react";
import Docs from "../../icons/goals/Docs";
import Write from "../../icons/goals/Write";
import Utils from "../../icons/goals/Utils";
import Text from "../../icons/goals/Text";
import Check from "../../icons/Check_black";
import Image from "../../icons/goals/Image";
import Route from "../../icons/goals/Route";
import Folder from "../../icons/goals/Folder";
import Layout from "../../icons/goals/Layout";
import Colocation from "../../icons/goals/Colocation";
import Nextjs from "../../icons/goals/Nextjs";
import Path from "../../icons/goals/Path";
import Navigate from "../../icons/goals/Navigate";

export type Goal = {
  type: string;
  content: string;
};
type ContentGoalProps = {
  goals: Goal[];
};

const Icons = (type: string) => {
  switch (type) {
    case "docs":
      return <Docs />;
    case "write":
      return <Write />;
    case "utils":
      return <Utils />;
    case "text":
      return <Text />;
    case "check":
      return <Check />;
    case "image":
      return <Image />;
    case "route":
      return <Route />;
    case "folder":
      return <Folder />;
    case "layout":
      return <Layout />;
    case "colocation":
      return <Colocation />;
    case "nextjs":
      return <Nextjs />;
    case "path":
      return <Path />;
    case "navigate":
      return <Navigate />;
  }
};
function ContentGoal({ goals }: ContentGoalProps) {
  return (
    <div className="md:bg-vercel-200 mb-4 rounded-[12px] md:my-12 md:mx-[-64px] md:p-4 md:px-[64px] md:py-12">
      <h1 className="text-2xl font-bold text-black pb-1">이번 장에서는...</h1>
      <p className="text-sm text-vercel-700">다뤄볼 주제들</p>

      <div className="bg-vercel-100 mx-auto mt-4 flex w-full max-w-[960px] flex-col rounded-md px-4 py-2 shadow-md md:mt-8">
        {goals.map((goal, i) => (
          <div
            key={i}
            className="border-vercel-300 flex gap-4 border-b py-3 px-4 last-of-type:border-0 text-vercel-800 items-center"
          >
            {Icons(goal.type)}
            {goal.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentGoal;
