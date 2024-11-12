import Item from "./Item";
import Pinguoins from "../assets/imgs/Pingouins.webp";

const MainContent = () => {
  return (
    <div className="main">
      {
        <Item
          title="Les Pinguoins"
          subt="Les pingouins sont des oiseaux marins fascinants qui habitent principalement les eaux froides de l’Atlantique Nord"
          srce={Pinguoins}
          descr="Les pingouins se trouvent exclusivement dans l’hémisphère nord. 
        Contrairement aux manchots, qui vivent dans l’hémisphère sud, les pingouins 
        peuvent voler et passent une partie de leur vie sur la mer. Ils sont parfaitement 
        adaptés aux environnements froids et marins, se nourrissant principalement 
        de poissons et de crustacés.Les deux principales espèces de pingouins sont le petit pingouin (Alca torda) et le grand pingouin (Pinguinus impennis), ce dernier étant malheureusement éteint depuis le milieu du XIXe siècle.
Le petit pingouin est reconnaissable par son plumage noir et blanc, et sa capacité à plonger profondément pour attraper sa nourriture."
        />
      }
      {
        <Item
          title="Les Pinguoins"
          subt="Les pingouins sont des oiseaux marins fascinants qui habitent principalement les eaux froides de l’Atlantique Nord"
          srce={Pinguoins}
          descr="Les pingouins se trouvent exclusivement dans l’hémisphère nord. 
        Contrairement aux manchots, qui vivent dans l’hémisphère sud, les pingouins 
        peuvent voler et passent une partie de leur vie sur la mer. Ils sont parfaitement 
        adaptés aux environnements froids et marins, se nourrissant principalement 
        de poissons et de crustacés.Les deux principales espèces de pingouins sont le petit pingouin (Alca torda) et le grand pingouin (Pinguinus impennis), ce dernier étant malheureusement éteint depuis le milieu du XIXe siècle.
Le petit pingouin est reconnaissable par son plumage noir et blanc, et sa capacité à plonger profondément pour attraper sa nourriture."
        />
      }
    </div>
  );
};
export default MainContent;

// nameTitle = "Les pinguoins";
// sub = "les mielleurs oiseaux";
// src = ".assets/imgs/pinguoins.jpg";
// desc = "lolalalallalalla";
