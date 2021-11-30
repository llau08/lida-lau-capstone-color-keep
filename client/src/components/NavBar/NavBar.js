import logo from "../../assets/logos/color-keep-logo.png";
import "../NavBar/NavBar.scss";

function NavBar() {
  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={logo} alt="color keep logo" />
      </nav>
    </header>
  );
}

export default NavBar;
