"use client";
import React, { useState } from "react";
import Question from "../../icons/Question";
import X from "../../icons/X";
import Arrow_Left from "../../icons/Arrow_Left";
import Check from "../../icons/Check_black";
type ContentQuizProps = {
  answers: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
  question: string;
};

function ContentQuiz({
  answers,
  correctAnswer,
  explanation,
  hint,
  question,
}: ContentQuizProps) {
  const [isActive, setIsActive] = useState<number>(-Infinity);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const checkAnswer = (selectedAnswer: number) => {
    setIsSolved(true);
    if (answers[selectedAnswer] === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  const retry = () => {
    setIsCorrect(false);
    setIsSolved(false);
  };
  return (
    <div className=" bg-vercel-100 mt-12 flex flex-col justify-center rounded-[16px] px-4 py-4 md:-mx-[62px] md:px-0 md:py-14 mb-5">
      <div className="flex flex-col items-center">
        <div className="bg-blue-500 h-[56px] w-[56px] flex justify-center items-center rounded-full mb-4">
          <Question />
        </div>
        <div className="font-semibold text-2xl">잠깐, 여기서 퀴즈!</div>
        <div className="text-md text-vercel-700 pt-2">
          지금까지 배운 거를 한 번 테스트해봐요
        </div>
        <div className="bg-white mx-auto mt-8 flex w-full max-w-[640px] flex-col items-center rounded-lg p-4 shadow-md md:p-8">
          {!isSolved ? (
            <>
              <div className="flex w-full flex-1 flex-col items-center">
                {question}
              </div>
              <div className=" mt-6 flex w-full flex-1 flex-col items-center justify-center rounded-lg border p-8">
                <div className="bg-vercel-200 group mt-4 w-full rounded-lg border md:mt-6">
                  {answers.map((answer, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => setIsActive(i)}
                        className={`hover:bg-white flex w-full items-center gap-3 border-b p-3 text-left text-sm transition-colors first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-none md:p-4 md:text-base text-gray-900 ${
                          isActive === i ? "bg-white text-black" : ""
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-medium transition-colors  ${
                            isActive === i
                              ? "bg-blue-700 text-blue-200"
                              : "bg-blue-200 text-blue-700"
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                        {answer}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 flex w-full justify-end md:mt-6">
                  <button
                    className="w-full bg-black text-white h-[40px] rounded-lg hover:bg-vercel-900 duration-150"
                    onClick={() => checkAnswer(isActive)}
                  >
                    정답 확인하기
                  </button>
                </div>
              </div>
            </>
          ) : isCorrect ? (
            <ContentQuizCorrect
              answers={answers}
              question={question}
              selectedAnswer={isActive}
              explanation={explanation}
            />
          ) : (
            <ContentQuizRetry
              answers={answers}
              question={question}
              selectedAnswer={isActive}
              hint={hint}
              retry={retry}
            />
          )}
        </div>
      </div>
    </div>
  );
}

type ContentQuizRetryProps = {
  answers: string[];
  question: string;
  selectedAnswer: number;
  hint: string;
  retry: () => void;
};
const ContentQuizRetry = ({
  answers,
  question,
  selectedAnswer,
  hint,
  retry,
}: ContentQuizRetryProps) => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center">
        <p>{question}</p>
        <div className="border-gray-alpha-400 mt-6 flex w-full flex-1 flex-col items-center justify-center rounded-lg border p-8">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-vercel-400 text-gray-900 ">
            {String.fromCharCode(65 + selectedAnswer)}
          </div>
          <span className="break-keep">{answers[selectedAnswer]}</span>
          <div className="bg-amber-100 px-4 py-1 rounded-full text-amber-700 my-6">
            <span className="flex items-center gap-2 ">
              <span>
                <X />
              </span>
              오답입니다
            </span>
          </div>
          <div className="mx-auto w-full max-w-[380px] text-center text-sm break-keep text-vercel-700">
            Hint : {hint}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="h-[40px] px-4 flex gap-2 items-center border-[1px] border-vercel-300 rounded-lg hover:bg-vercel-200 duration-150 text-md"
          onClick={retry}
        >
          <span>
            <Arrow_Left />
          </span>
          다시 시도하기
        </button>
      </div>
    </>
  );
};

type ContentQuizCorrectProps = {
  answers: string[];
  question: string;
  selectedAnswer: number;
  explanation: string;
};
const ContentQuizCorrect = ({
  answers,
  question,
  selectedAnswer,
  explanation,
}: ContentQuizCorrectProps) => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center">
        <p>{question}</p>
        <div className="border-gray-alpha-400 mt-6 flex w-full flex-1 flex-col items-center justify-center rounded-lg border p-8">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-700 ">
            {String.fromCharCode(65 + selectedAnswer)}
          </div>
          <span className="break-keep">{answers[selectedAnswer]}</span>
          <div className="bg-green-100 px-4 py-1 rounded-full text-green-700 my-6">
            <span className="flex items-center gap-2 ">
              <span>
                <Check />
              </span>
              정답입니다
            </span>
          </div>
          <div className="mx-auto w-full max-w-[380px] text-center text-sm break-keep text-vercel-700">
            {explanation}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentQuiz;
