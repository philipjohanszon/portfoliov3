import "./learnedBox.scoped.css";

const LearnedBox = (props) => {
  return (
    <div className="container">
      <img src={props.img} alt={props.alt} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default LearnedBox;
