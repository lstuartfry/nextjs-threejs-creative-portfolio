"use client";

import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
