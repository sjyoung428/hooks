import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}
const Text = ({ children }: TextProps) => {
  return (
    <span className="border rounded-md p-2 shadow-sm my-5">{children}</span>
  );
};

export default Text;
