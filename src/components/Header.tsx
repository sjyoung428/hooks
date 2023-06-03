import Navigation from "./Navigation";

const Header = () => {
  return (
    <nav className="border p-2">
      <ul className="flex gap-5">
        <Navigation to="/" name="Home" />
        <Navigation to="/debounce" name="Debounce" />
        <Navigation to="/throttle" name="Throttle" />
      </ul>
    </nav>
  );
};

export default Header;
