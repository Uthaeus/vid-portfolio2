import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <div className="main-nav-wrapper">
      <div className="nav-title">Homer J Simpson</div>
      <div className="nav-links-wrapper">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default MainNavigation;
