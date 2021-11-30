import logo from "../../assets/logos/color-keep-logo-2.png";
import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="nav">
        <Link to="/home">
          <img className="nav__logo" src={logo} alt="color keep logo" />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
