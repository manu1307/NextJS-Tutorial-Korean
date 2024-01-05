import React from "react";

type ProgressBarCircleProps = {
  chapter: number;
};
function ProgressBarCircle({ chapter }: ProgressBarCircleProps) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - (chapter - 1) / 16);
  return (
    <svg className="w-[40px] h-[40px] transform -rotate-90">
      <circle
        cx={20}
        cy={20}
        r={radius}
        stroke="currentColor"
        strokeWidth="5"
        fill="transparent"
        className="text-vercel-300"
      />

      <circle
        cx={20}
        cy={20}
        r={radius}
        stroke="currentColor"
        strokeWidth="5"
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        className="text-blue-500"
      />
    </svg>
  );
}

export default ProgressBarCircle;
