import styles from "./index.module.scss";

const ColorSwatchIcon = (props) => (
  <span className={styles.root}>
    <span className={styles.icon} style={{background: props.color}} />
    <span className={styles.label}>{props.name}</span>
  </span>
);

export default ColorSwatchIcon;