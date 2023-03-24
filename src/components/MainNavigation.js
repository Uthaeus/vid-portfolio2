import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import { AuthContext } from "../store/auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isAuthenticated;

  const navigate = useNavigate();

  function logoutHandler() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        authCtx.logout();
        navigate('/');
      })
      .catch((error) => {
        console.log('signout error', error);
      });
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
          <Link onClick={logoutHandler} className="nav-link">
            Log Out
          </Link>
        )}
        
      </div>
    </div>
  );
}

export default MainNavigation;
