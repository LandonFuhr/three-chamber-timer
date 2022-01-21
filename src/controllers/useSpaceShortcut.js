import { useEffect } from "react";

export function useSpaceShortcut(onSpaceClick) {
  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.code !== "Space") return;
      e.preventDefault();
      e.stopImmediatePropagation();
      onSpaceClick();
    };

    document.addEventListener("keydown", handleKeypress);
    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [onSpaceClick]);
}
