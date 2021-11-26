import Buttons from "../components/Buttons";
import "../styles/components/ItemCard.scss";

const ItemCard = ({
  id,
  description,
  image,
  title,
  date,
  url,
  author,
  btn_inner_text,
}) => {
  return (
    <div className="item-wrapper">
      <div className="item-img">
        <img src={image} alt={title} />
      </div>
      <div className="item-top">
        <h3 className="title">{title}</h3>
        <div className="item-developer">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <div className="item-description">{description}</div>
      </div>
      <div className="item-button">
        <Buttons
          onClick={() => window.open(url)}
          innerText={btn_inner_text}
          color={"primary"}
          size={"default"}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default ItemCard;
