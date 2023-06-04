import { Link, useLocation } from "react-router-dom";
import { cls } from "~/utils/cls";

interface NavigationProps {
  to: string;
  name: string;
}

const Navigation = ({ to, name }: NavigationProps) => {
  const { pathname } = useLocation();

  return (
    <>
      <li
        className={cls(
          name.toLocaleLowerCase() === pathname.substring(1) ||
            (name === "Home" && pathname === "/")
            ? "underline underline-offset-4 decoration-amber-800"
            : "underline decoration-transparent transition-colors hover:underline underline-offset-4 hover:decoration-amber-800 "
        )}
      >
        <Link to={to}>{name}</Link>
      </li>
    </>
  );
};

export default Navigation;
