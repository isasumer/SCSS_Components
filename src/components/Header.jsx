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
      <Link to="/drawer">
        <button className="header-btn">Drawer Page</button>
      </Link>
      <Link to="/selectbox">
        <button className="header-btn">SelectBox Page</button>
      </Link>
      <Link to="/table">
        <button className="header-btn">Table Page</button>
      </Link>
      <Link to="/itemcard">
        <button className="header-btn">Item Card Page</button>
      </Link>
      <Link to="/currentnews">
        <button className="header-btn">Current News Page</button>
      </Link>
      <Link to="/solutioncenter">
        <button className="header-btn">Solution Center Page</button>
      </Link>
    </div>
  );
};

export default Header;
