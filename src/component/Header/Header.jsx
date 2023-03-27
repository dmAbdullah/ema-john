import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <>
      <nav className="header">
        <img src={logo} alt="" srcset="" />
        {/* a*4[href=$]{$} */}
        <div>
            <a href="/shop">Shop</a>
            <a href="/order">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
