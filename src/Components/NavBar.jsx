import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./AuthProviders/Providers";

const NavBar = () => {
  const { user } = useContext(Context);
  // if (user != null) {
  //   const name2 = user.displayName;
  //   const photo = user.photoURL;
  //   console.log(name2, photo);
  //   const userArray = Object.values(user);
  //   console.log("ryt", userArray);
  // }

  // console.log(useArray);

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Sakura Kitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>

      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
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

      {/* <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-success text-white">Log In</button>
          </Link>
        </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default NavBar;
