import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-4 flex justify-center items-center w-full overflow-y-scroll ">
      {children}
    </div>
  );
};

export default Layout;
