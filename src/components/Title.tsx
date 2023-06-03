import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="font-bold text-center text-3xl mb-3 ">{children}</h1>;
};

export default Title;
