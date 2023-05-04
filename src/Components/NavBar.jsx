import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "./AuthProviders/Providers";

const NavBar = () => {
  const { user, logOut } = useContext(Context);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
            >
              Blogs
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Sakura Kitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/checking"
              className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
            >
              Checking
            </NavLink>
          </li>
        </ul>
      </div>

      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-full rounded-full relative">
                <img src={user.photoURL} alt="User" />
                <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <span className="text-white text-xs">{user.displayName}</span>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li onClick={logOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-success text-white">Log In</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
