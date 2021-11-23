import { useState } from "react";
import classnames from "classnames";
import data from "./Data";
import Drawer from "../../components/Drawer";
import Buttons from "../../components/Buttons";
import "../../styles/pages/drawerPage.scss";

const DrawerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("small");
  const [position, setPosition] = useState();
  const title = "This is important";
  return (
    <div className="app">
      <div className="container">
        <div className="drawer-options">
          <div className="option-size">
            <h2>Size</h2>
            <label>
              <input
                type="radio"
                value="small"
                checked={size === "small"}
                onChange={(event) => setSize(event.target.value)}
              />
              Small
            </label>
            <label>
              <input
                type="radio"
                value="default"
                checked={size === "default"}
                onChange={(event) => setSize(event.target.value)}
              />
              Default
            </label>
            <label>
              <input
                type="radio"
                value="large"
                checked={size === "large"}
                onChange={(event) => setSize(event.target.value)}
              />
              Large
            </label>
          </div>
          <div className="option-position">
            <h2>Position</h2>
            <label>
              <input
                type="radio"
                value="left"
                checked={position === "left"}
                onChange={(event) => setPosition(event.target.value)}
              />
              Left
            </label>
            <label>
              <input
                type="radio"
                value="right"
                checked={position === "right"}
                onChange={(event) => setPosition(event.target.value)}
              />
              Right
            </label>
          </div>
          <Buttons
            innerText={"button"}
            color={"success"}
            size={"large"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <p>{data}</p>
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position={position}
          size={size}
        >
          <div className="drawer-content">
            <button type="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <h2>{title}</h2>
            <p>{data}</p>
            <div className={classnames("drawer-footer", size)}>
              <Buttons
                innerText={"Primary"}
                color={"primary"}
                size={"default"}
              />
              <Buttons innerText={"Vazgeç"} color={"ghost"} size={"default"} />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default DrawerPage;
