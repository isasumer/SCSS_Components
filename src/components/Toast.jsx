import React, { useCallback, useEffect, useState } from "react";
import close_icon from "../assets/ToastIcons/icon-solid-close.png";
import "../styles/components/Toast.scss";

const Toast = ({ list, setList }) => {
  const [timer, setTimerr] = useState(true);

  const deleteToast = useCallback(
    (item) => {
      const toastListItem = list.filter((e) => e.id !== item.id);
      setList(toastListItem);
    },
    [list, setList]
  );
  const pauseTimer = (prop) => {
    setTimerr(prop);
  };
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (list.length && timer) {
          deleteToast(list[0]);
        }
      },
      list[0]?.lineType === "singleline" ? 1000 : 3000
    );

    return () => {
      clearInterval(interval);
    };
  }, [list, deleteToast, timer]);

  return (
    <div className="toast-container position">
      {list?.map((toast, i) => (
        <div
          onMouseEnter={() => pauseTimer(false)}
          onMouseLeave={() => pauseTimer(true)}
          key={i}
          className={`toast toast-${toast.type} toast-${toast.lineType} position `}
        >
          <div className="content-container">
            <img className="icon-toast" src={toast.icon} alt={toast.title} />
            <p className={`title position ${toast.title}`}>{toast.title}</p>
            <img
              className="icon-close"
              src={close_icon}
              alt={toast.title}
              onClick={() => deleteToast(toast)}
            />
          </div>
          <div className="description">{toast.description}</div>
          <p className="link">{toast.link}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;
