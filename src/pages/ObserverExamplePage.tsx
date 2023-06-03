import { useRef, useEffect } from "react";
import Title from "~/components/Title";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";

const ObserverExamplePage = () => {
  const targetRef = useRef(null);

  const callback = () => {
    alert("요소가 화면에 보임.");
  };

  const { observe, unobserve, disconnect } = useIntersectionObserver({
    callback,
    threshold: 0.5,
  });

  useEffect(() => {
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        unobserve(currentTarget);
      }
      disconnect();
    };
  }, [observe, unobserve, disconnect]);

  return (
    <div>
      <Title>아래로 스크롤</Title>
      <div className="h-[100vh]"></div>
      <div ref={targetRef} className="h-[50px] bg-red-500">
        Target Element
      </div>
    </div>
  );
};

export default ObserverExamplePage;
