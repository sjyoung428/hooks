import type { RefObject } from "react";
import { useEffect } from "react";
import { isNotNil } from "~/utils/isNotNil";

type OneOrMore<T> = T | T[];

export const useOutsideClickEffect = (
  container: OneOrMore<RefObject<HTMLElement>>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent | TouchEvent) => {
      if (Array.isArray(container)) {
        const isOutsideClick = container.every((ref) => {
          return isNotNil(ref.current)
            ? !ref.current.contains(event.target as Node)
            : true;
        });

        if (isOutsideClick) {
          callback(event);
        }
        return;
      }
      if (
        isNotNil(container.current) &&
        !container.current.contains(event.target as Node)
      ) {
        callback(event);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("touchstart", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("touchstart", handleDocumentClick);
    };
  }, [container, callback]);
};
