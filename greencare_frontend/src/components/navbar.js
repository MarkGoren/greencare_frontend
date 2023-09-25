import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GreencareData } from "../App";
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  const data = useContext(GreencareData);

  return (
    <>
      <div className="navbar">
        <Link className="link" to={"/"}>
          <div className="navbar-logo">GreenCare</div>
        </Link>
      </div>
      <Menu right width={"18rem"}>
        <div className="menu-item-container">
          <a id="home" className="menu-item" href="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            Home
          </a>
          {data.isLogged ? (
            <>
              <a id="about" className="menu-item" href="/profile">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                Profile
              </a>
              <a id="contact" className="menu-item" href="/gatherings">
                <i class="fa fa-users" aria-hidden="true"></i>
                Gatherings
              </a>
              <a id="contact" className="menu-item" href="/prizes">
                <i class="fa fa-gift" aria-hidden="true"></i>
                Prizes
              </a>
            </>
          ) : (
            <>
              <a id="about" className="menu-item" href="/login">
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                Login
              </a>
              <a id="about" className="menu-item" href="/register">
                <i class="fa fa-user-plus" aria-hidden="true"></i>
                Register
              </a>
            </>
          )}
          <a id="contact" className="menu-item" href="/contact">
            <i class="fa fa-heart" aria-hidden="true"></i>
            Contact
          </a>
          <a id="about" className="menu-item" href="/about">
            <i class="fa fa-info" aria-hidden="true"></i>
            About
          </a>
        </div>
      </Menu>
    </>
  );
}
