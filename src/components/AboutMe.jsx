import ItemDescription from "./ItemDescription.jsx";
import ItemPicture from "./ItemPicture.jsx";
import ItemTitle from "./ItemTitle.jsx";
import Moi from "../assets/imgs/celine-leguelvouit.jpg";

const AboutMe = () => {
  return (
    <div className="aboutDiv">
      {<ItemTitle nameTitle="Celine Le Guelvouit" />}
      <div className="special">
        {<ItemPicture src={Moi} />}
        {<ItemDescription desc="J'aime les endives et le patchouli" />}
      </div>
    </div>
  );
};
export default AboutMe;
