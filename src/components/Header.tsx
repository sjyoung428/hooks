import Navigation from "./Navigation";

const Header = () => {
  return (
    <nav>
      <ul>
        <Navigation to="/" name="Home" />
        <Navigation to="/debounce" name="Debounce" />
      </ul>
    </nav>
  );
};

export default Header;
