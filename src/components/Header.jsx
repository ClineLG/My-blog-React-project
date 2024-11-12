import Title from "./Title.jsx";
import Baseline from "./Baseline.jsx";
const Header = () => {
  return (
    <header className="container">
      {<Title name="My Blog" />}
      {<Baseline text="An awesome baseline" />}
    </header>
  );
};

export default Header;

//
