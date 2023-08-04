import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, time, curr, handleItem}) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {curr}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <ListRow key={index} item = {handleItem} index = {index}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            
            {/* new rows add to the  order submitted*/}
            <ListRowCell>{time[index].timestamps.orderSubmitted}</ListRowCell>
            {/* changed according to user currency selected */}
            <ListRowCell>{row.bestExecutionData.orderVolume[curr]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
