import styles from "./ListRow.module.css";

const ListCell = ({ children, item, index }) => {
  return <tr className={styles.cell} onClick={() => item(index)}>{children}</tr>;
};

export default ListCell;
