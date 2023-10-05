import { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/authSlice";
import Modal from "react-modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    dispatch(logout());
    handleClick();
  }
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
            <i className="fa fa-home" aria-hidden="true"></i>
            Home
          </a>
          {auth.isLoggedIn ? (
            <>
              <a
                id="profile"
                className="menu-item profile-image-container"
                href="/profile"
                style={{ textTransform: "capitalize" }}
              >
                {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i> */}
                <img
                  src={auth.profileImg}
                  alt="oopsie!"
                  className="navbar-profile-image"
                ></img>
                {auth.fullName}
              </a>
              <a id="gatherings" className="menu-item" href="/gatherings">
                <i className="fa fa-users" aria-hidden="true"></i>
                Gatherings
              </a>
              <a id="prizes" className="menu-item" href="/prizes">
                <i className="fa fa-gift" aria-hidden="true"></i>
                Prizes
              </a>
              <div
                id="logout"
                className="menu-item"
                style={{ cursor: "pointer" }}
                onClick={handleClick}
              >
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </div>
            </>
          ) : (
            <>
              <a id="login" className="menu-item" href="/login">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                Login
              </a>
              <a id="register" className="menu-item" href="/register">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
                Register
              </a>
            </>
          )}
          <a id="contact" className="menu-item" href="/contact">
            <i className="fa fa-heart" aria-hidden="true"></i>
            Contact
          </a>
          <a id="about" className="menu-item" href="/about">
            <i className="fa fa-info" aria-hidden="true"></i>
            About
          </a>
        </div>

        <Modal isOpen={isOpen} className="modal">
          <h2>Are you sure you want to logout?</h2>
          <div className="buttons-container">
            <div onClick={handleClick} className="button">
              No
            </div>
            <div className="button" onClick={handleLogout}>
              Yes
            </div>
          </div>
        </Modal>
      </Menu>
    </>
  );
}
