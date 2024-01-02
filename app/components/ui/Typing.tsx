"use client";
import React, { useEffect, useState } from "react";
import styles from "./Typing.module.css";

type TypingProps = {
  word: string;
  interval: number;
};

function Typing({ word, interval }: TypingProps) {
  const [count, setCount] = useState(0);
  const [typingWord, setTypingWord] = useState("");
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypingWord((prevTypingWord) => {
        let result = prevTypingWord ? prevTypingWord + word[count] : word[0];
        setCount(count + 1);

        if (count >= word.length) {
          return word;
        }

        return result;
      });
    }, interval);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return <span className={styles.typing}>{typingWord}</span>;
}

export default Typing;
