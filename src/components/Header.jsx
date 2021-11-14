import "../styles/layout/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/buttons">
        <button className="header-btn">Buttons</button>
      </Link>
      <Link to="/tab-menu">
        <button className="header-btn">Tab Menu</button>
      </Link>
      <Link to="/segments">
        <button className="header-btn">Segment Page</button>
      </Link>
      <Link to="/toasts">
        <button className="header-btn">Toast Page</button>
      </Link>
      <Link to="/inputs">
        <button className="header-btn">Input Page</button>
      </Link>
    </div>
  );
};

export default Header;
