import { createContext, useState, useEffect } from "react";

export const WindowSizeContext = createContext();

export const WindowSizeContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function updateWindowSize() {
    return window.addEventListener("resize", () =>
      setWindowSize(window.innerWidth)
    );
  }

  useEffect(() => {
    updateWindowSize();
  }, [updateWindowSize]);

  return (
    <WindowSizeContext.Provider value={{ windowSize }}>
      {children}
    </WindowSizeContext.Provider>
  );
};
