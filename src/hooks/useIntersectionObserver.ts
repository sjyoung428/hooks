import { useRef } from "react";

interface useIntersectionObserverProps {
  callback: () => void;
  threshold?: number;
}

export const useIntersectionObserver = ({
  callback,
  threshold = 1,
}: useIntersectionObserverProps) => {
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
