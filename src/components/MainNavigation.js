import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <div className="main-nav-wrapper">
      <div className="nav-title">Homer J Simpson</div>
      <div className="nav-links-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav-link link-active' : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'nav-link link-active' : "nav-link"
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default MainNavigation;
