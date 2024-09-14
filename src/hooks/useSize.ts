import { useEffect } from "react";
import { useState } from "react";

const useSize = (): number => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);
    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);
  return windowSize;
};

export default useSize;
