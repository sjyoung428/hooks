import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  to: string;
  name: string;
}

const Navigation = ({ to, name }: NavigationProps) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <li className="">
        <Link to={to}>{name}</Link>
      </li>
    </>
  );
};

export default Navigation;
