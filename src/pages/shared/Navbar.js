import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        localStorage.removeItem("access-token");
      })
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <NavLink className="rounded" to="/">
          Home
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink className="rounded" to="/about">
          About
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink className="rounded" to="/categories">
          Categories
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink className="rounded" to="/blog">
          Blog
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink className="rounded" to="/contact">
          Contact
        </NavLink>
      </li>
      {user && user.uid ? (
        <>
          <li className="font-semibold">
            <NavLink className="rounded" to="/dashboard">
              Dashboard
            </NavLink>
          </li>

          <li className="font-semibold">
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <NavLink className="rounded" to="/login">
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="Brand Logo" className="w-10 h-10" />
            Doya Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={1}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
