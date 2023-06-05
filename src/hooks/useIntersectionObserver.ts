import { useRef } from "react";

interface UseIntersectionObserverProps {
  callback: () => void;
  threshold?: number;
}

export const useIntersectionObserver = ({
  callback,
  threshold = 1,
}: UseIntersectionObserverProps) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold }
    )
  );

  const observe = (element: Element) => {
    observer.current.observe(element);
  };

  const unobserve = (element: Element) => {
    observer.current.unobserve(element);
  };

  const disconnect = () => {
    observer.current.disconnect();
  };

  return { observe, unobserve, disconnect };
};
