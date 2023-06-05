import Navigation from "./Navigation";

const Header = () => {
  return (
    <nav className="border p-2 fixed w-full top-0 backdrop-blur-sm">
      <ul className="flex gap-5">
        <Navigation to="/" name="Home" />
        <Navigation to="/debounce" name="Debounce" />
        <Navigation to="/throttle" name="Throttle" />
        <Navigation to="/observer" name="Observer" />
        <Navigation to="/out-side-click" name="OutSideClick" />
        <Navigation to="/network" name="Network" />
      </ul>
    </nav>
  );
};

export default Header;
