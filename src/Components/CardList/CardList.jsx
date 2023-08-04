import CardInfo from "../../Components/CardList/CardInfo";
import Card from "./Card/Card";
import "./CardList.css";

const CardList = () => {
  return (
    <div className="Card-Container">
      {CardInfo.map((info) => {
        return (
          <Card
            title={info.title}
            desc={info.desc}
            src={info.src}
            type={info.type}
            key={info.src}
          />
        );
      })}
    </div>
  );
};
export default CardList;
