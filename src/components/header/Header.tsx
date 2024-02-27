import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <ul className="list">
        <Link to="/">
          <li>Hem</li>
        </Link>
        <Link to="/kanaler"><li>Kanaler</li></Link>
        <li>Program</li>
      </ul>
    </header>
  );
};

export default Header;
