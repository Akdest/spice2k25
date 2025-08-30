"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function ConfettiBlast() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // set initial size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false} // play once and stop
      numberOfPieces={500} // pieces of confetti
      gravity={0.2} // falling speed
    />
  );
}
