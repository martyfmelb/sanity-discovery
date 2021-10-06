import classNames from "classnames";

const RichText = (props) => (
  <div className={classNames("s-rich-text", {
    "-keep-margin-top": props.keepMarginTop,
    "-keep-margin-bottom": props.keepMarginBottom
  })}>{props.children}</div>
);

export default RichText;
