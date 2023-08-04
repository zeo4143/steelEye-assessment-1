import styles from "./ListRow.module.css";
//props(item, index) from its grand parent Dashboard 
const ListCell = ({ children, item, index }) => {
  return <tr className={styles.cell} onClick={() => item(index)}>{children}</tr>;
};

export default ListCell;
