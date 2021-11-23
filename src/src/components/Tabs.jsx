import { useState } from "react";
import "../styles/components/Tabs.scss";
const Tabs = ({ values }) => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (value) => {
    setToggle(value);
  };
  // console.log(toggle);
  return (
    <div className="tab-container">
      <ul className="tab-lists">
        {values.map((item) => (
          <li
            className={toggle === item.index ? "tabs active-tabs" : "tabs"}
            key={item.index}
            onClick={() => toggleTab(item.index)}
          >
            {item.tabName}
            {item.bubbleNumber && <span>{item.bubbleNumber}</span>}
          </li>
        ))}
      </ul>
      {/* <div className="tab-contents">
        {values.map((item) => (
          <p
            className={
              toggle === item.index ? "content active-content" : "content"
            }
            key={item.index}
          >
            {item.tabContent}
          </p>
        ))}
      </div> */}
      <div className="content"></div>
    </div>
  );
};

export default Tabs;
