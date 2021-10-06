import classNames from "classnames";

const Multiline = (props) => (
  props.text.split("\n\n").map((text) => (
  <p>
    {text.split("\n").map((text, index) => (
      <>{ index > 0 && <br />}{text}</>
    ))}
  </p>
  ))
);

export default Multiline;
