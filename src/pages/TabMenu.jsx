import Tabs from "../components/Tabs";
import PropTypes from "prop-types";

function TabMenu() {
  const values = [
    {
      index: 1,
      tabName: "Elektronik",
      tabContent: "Elektroniğe Dair Her Şey",
      bubbleNumber: "",
    },
    {
      index: 2,
      tabName: "Moda",
      tabContent: "Modaya Dair Her Şey",
      bubbleNumber: "",
    },
    {
      index: 3,
      tabName: "Aksesuar",
      tabContent: "Aksesuara Dair Her Şey",
      bubbleNumber: "",
    },
    {
      index: 4,
      tabName: "Sepetim",
      tabContent: "Aldığım ürünler",
      bubbleNumber: 2,
    },
  ];
  return (
    <div>
      <Tabs values={values} />
    </div>
  );
}

TabMenu.propTypes = {
  index: PropTypes.number,
  tabName: PropTypes.string,
  tabContent: PropTypes.string,
};
export default TabMenu;
