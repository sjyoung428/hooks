import { useRef } from "react";
import Title from "~/components/Title";
import { useOutsideClickEffect } from "~/hooks/useOutsideClickEffect";

const OutsideClickExamplePage = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useOutsideClickEffect([ref1, ref2], () => {
    console.log("Outside Click");
  });
  // useOutsideClickEffect(ref1, () => {
  //   console.log("Outside Click 1");
  // });

  return (
    <div className="flex flex-col gap-1">
      <Title>Out Side Click Example</Title>
      <div ref={ref1} className="bg-indigo-600 aspect-square" />
      <div ref={ref2} className="bg-red-600 aspect-square" />
    </div>
  );
};

export default OutsideClickExamplePage;
