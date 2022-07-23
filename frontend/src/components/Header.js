import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="flex font-semibold px-60 bg-slate-500 text-white items-center flex-wrap gap-3 py-5">
        <div className="text-5xl">
          <NavLink to="/">INDIJOYOGA</NavLink>
        </div>

        <div className="flex-grow">
          <NavLink to="/cart">
            <img
              className="h-24 w-24 mx-auto"
              src="/Images/Logo/logo.png"
              alt="Logo"
              to="/"
            ></img>
          </NavLink>
        </div>
        <div className=" text-3xl mr-5">
          <NavLink to="/cart">
            <i className="fas fa-shopping-cart"></i> CART
          </NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/login">
            <i className="fas fa-user"></i> SIGN IN
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
