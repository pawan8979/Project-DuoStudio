import "./Card.css";

const Card = ({ title, desc, src, type }) => {
  return (
    <div className="card">
      {type === "image" ? (
        <img src={src} />
      ) : (
        <video src={src} autoPlay muted loop />
      )}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
