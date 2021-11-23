import React, { useState } from "react";
import Toast from "../../components/Toast";
import data from "./Data";
import "../../styles/pages/toastPage.scss";
import "../../styles/components/Toast.scss";

const ToastPage = () => {
  const [list, setList] = useState([]);

  const showToast = (item) => {
    setList([...list, { ...item, id: Date.now() }]);
  };
  return (
    <div className="toastPage">
      {data.map((item, id) => (
        <button
          style={{
            borderRight: "none",
            borderTop: "none",
            borderBottom: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={id}
          className={`toast toast-${item.type} toast-${item.lineType}`}
          onClick={() => showToast(item)}
        >
          <span>
            {item.type}-{item.lineType}
          </span>
        </button>
      ))}
      <Toast list={list} setList={setList} />
    </div>
  );
};

export default ToastPage;
