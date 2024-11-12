import ItemPicture from "./ItemPicture";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="itemDiv">
      {<ItemTitle nameTitle={props.title} />}
      {<ItemSubtitle sub={props.subt} />}
      {<ItemPicture src={props.srce} />}
      {<ItemDescription desc={props.descr} />}
    </div>
  );
};

export default Item;
