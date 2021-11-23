import Tabs from "../components/Tabs";
import PropTypes from "prop-types";

function TabMenu() {
  const values = [
    {
      index: 1,
      tabName: "Elektronik",
      bubbleNumber: "",
    },
    {
      index: 2,
      tabName: "Moda",
      bubbleNumber: "",
    },
    {
      index: 3,
      tabName: "Aksesuar",
      bubbleNumber: "",
    },
    {
      index: 4,
      tabName: "Sepetim",
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
};
export default TabMenu;
