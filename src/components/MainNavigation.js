import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../store/auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isAuthenticated;

  const navigate = useNavigate();

  function logoutHandler() {
    authCtx.logout();
    navigate('/');
  }

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
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Contact
        </NavLink>

        {!isLoggedIn && (
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? "nav-link link-active" : "nav-link"
            }
          >
            Log In
          </NavLink>
        )}
        {isLoggedIn && (
          <button onClick={logoutHandler} className='nav-link'>Log Out</button>
        )}
      </div>
    </div>
  );
}

export default MainNavigation;
