"use client";
import { useState, useEffect } from 'react';

type Props = {
    text: string,
    delay: number,
    infinite: boolean
}

export default function TextTyper({text, delay, infinite}:Props) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return (
    <>{currentText}</>
  )
};
