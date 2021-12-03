import "./button.scoped.css";

const Button = (props) => {
  if (props.rounded) {
    return (
      <button className="rounded" onClick={props.click}>
        {props.text}
      </button>
    );
  }
  return <button onClick={props.click}>{props.text}</button>;
};

export default Button;
