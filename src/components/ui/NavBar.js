import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {

    dispatch({ type: types.logout });
    
    navigate('/login', {
      replace: true
    })
  };

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="collapse navbar-collapse flex flex-row items-center w-full">
          <Link className="text-xl text-white pr-2 font-semibold" to="/">
            Asociaciones
          </Link>
          <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto w-full">
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) =>
                  "nav-item " +
                  (isActive
                    ? "active"
                    : "opacity-60 hover:opacity-90 focus:opacity-80 p-0")
                }
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) =>
                  "nav-item " +
                  (isActive
                    ? "active"
                    : "opacity-60 hover:opacity-90 focus:opacity-80 p-0")
                }
                to="/dc"
              >
                Dc
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                className={({ isActive }) =>
                  "nav-item " +
                  (isActive
                    ? "active"
                    : "opacity-60 hover:opacity-90 focus:opacity-80 p-0")
                }
                to="/search"
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item p-2 absolute right-0 mx-5">
              <span className="text-sky-600 mx-3 text-info">{ user.name }</span>
              <button
                className="nav-item opacity-60 hover:opacity-90 focus:opacity-80 p-0"
                onClick={ handleLogout }
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
