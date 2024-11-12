import MainContent from "./MainContent";
import SideContent from "./SideContent";

const Content = () => {
  return (
    <main className="container">
      {<MainContent />}
      {<SideContent />}
    </main>
  );
};

export default Content;
