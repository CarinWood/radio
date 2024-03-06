import { Link } from "react-router-dom";
import "./header.css";
import snail from "../../assets/images/NicePng_snail-png_1031942.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
            <p className="logo-text">Snigelradio</p>
            <img src={snail} alt="snail" className="snail-img" />
        </div>
      </Link>
      <ul className="list">
        <Link to="/">
          <li>Hem</li>
        </Link>
        <Link to="/kanaler">
          <li>Kanaler</li>
        </Link>
        <Link to="/program">
          <li>Program</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
