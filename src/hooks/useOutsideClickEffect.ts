import { useCallback, useEffect, useRef } from "react";
import { isNotNil } from "~/utils/isNotNil";

type OnOrMore<T> = T | T[];

interface useOutsideClickEffectProps {
  container: OnOrMore<HTMLElement | null>;
  callback: () => void;
}

export const useOutsideClickEffect = ({
  container,
  callback,
}: useOutsideClickEffectProps) => {
  const containers = useRef<HTMLElement[]>([]);

  useEffect(() => {
    containers.current = (
      Array.isArray(container) ? container : [container]
    ).filter(isNotNil);
  }, [container]);

  const handleDocumentClick = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (target === null) {
        return;
      }

      if (containers.current.length === 0) {
        return;
      }

      if (
        containers.current.some((container) =>
          container.contains(target as Node)
        )
      ) {
        return;
      }

      callback();
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("touchstart", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("touchstart", handleDocumentClick);
    };
  });
};
