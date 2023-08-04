import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  // created handleItem void Function with index as @param 
  //whenever we click on the list item the on click event call this function and do the below operations and populate the card views by specific list items details

  const handleItemSelected = (index) => {
    const specificItem = mockData.results[index].executionDetails;
    const time = timestamps.results[index].timestamps;

    setSelectedOrderDetails({
      buySellIndicator: specificItem.buySellIndicator,
      orderStatus: specificItem.orderStatus,
      orderType: specificItem.orderType,
    });

    setSelectedOrderTimeStamps({
      orderReceived: time.orderReceived,
      orderStatusUpdated: time.orderStatusUpdated,
      orderSubmitted: time.orderSubmitted,
    });
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          // changed static orders to dynamic no.of by using String Interpolation
          secondaryTitle={`${mockData.results.length} orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          //Added a search feature in the below using in built .filter(), .toLoweCase() - for case sensitivity, .includes() functions and render the list items according to it
          rows={mockData.results.filter(value => value["&id"].toLowerCase().includes(searchText.toLowerCase()))}
          //Added to show the timeStamps when the  order submited
          time={timestamps.results}
          // Added to show currency selected by the user from the dropdown
          curr={currency}
          // Added the event whenever action performed on the list items this function calls
          handleItem={handleItemSelected}
        />
      </div>
    </div>
  );
};

export default Dashboard;
