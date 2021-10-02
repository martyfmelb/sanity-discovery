import styles from "./index.module.scss";

const Typography = (props) => (
  <div className={styles.root}>{props.children}</div>
);

export default Typography;