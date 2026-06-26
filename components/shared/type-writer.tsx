"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
};
export function TypeWriter({ text }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (!isMounted) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i++));
      if (i > text.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [isMounted]);
  return <span>{displayed}</span>;
}
