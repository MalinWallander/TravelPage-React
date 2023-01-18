import { Link } from "react-router-dom";
import "./NavMenu.css";
const navItems = ["Home", "Destinations", "Hotels", "Advice", "About Us"];

export default function NavMenu() {

  return (
    <ul className="nav-menu">
      {navItems.map((navItem) => (
        <li key={navItem} className="nav-item">
          <Link to="/">{navItem}</Link>
        </li>
      ))}
    </ul>
  );
}
