import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";
import "./../styles/components/Drawer.scss";

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");

  return drawerRoot;
}

const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position = "left",
  size = "small",
}) => {
  const [focus, setFocus] = useState(false);

  const bodyRef = useRef(document.querySelector("body"));
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot()
  );

  const useMountTransition = (isMounted, unmountDelay) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      let timeoutId;

      if (isMounted && !isTransitioning) {
        setIsTransitioning(true);
      } else if (!isMounted && isTransitioning) {
        timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
      }
      return () => {
        clearTimeout(timeoutId);
      };
    }, [unmountDelay, isMounted, isTransitioning]);

    return isTransitioning;
  };
  const isTransitioning = useMountTransition(isOpen, 800);

  // Append portal root on mount
  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;

    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
      // Ensure scroll overflow is removed
      bodyEl.style.overflow = "";
    };
  }, []);

  //Prevent page scrolling when the drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = "hidden";
      } else {
        bodyRef.current.style.overflow = "";
      }
    };

    updatePageScroll();
  }, [isOpen]);

  if (!isTransitioning && !isOpen) {
    return null;
  }

  const handleOnFocus = (props) => {
    console.log("handleOnFocus");
    setFocus(props);
  };

  const handleOnBlur = (props) => {
    console.log("handleOnBlur");
    setFocus(props);
  };
  return createPortal(
    <div
      onBlur={() => handleOnBlur(false)}
      onFocus={() => handleOnFocus(true)}
      aria-hidden={isOpen ? "false" : "true"}
      className={classnames("drawer-container", {
        open: isOpen,
        in: isTransitioning,
        className,
      })}
    >
      <div className={classnames("drawer", position, size)} role="dialog">
        {children}
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>,
    portalRootRef.current
  );
};

export default Drawer;
