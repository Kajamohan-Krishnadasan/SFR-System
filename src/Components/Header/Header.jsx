import React, { useRef } from "react";
import "./Header.Module.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const HomeActive = useRef();
  const LoginActive = useRef();
  const RegisterActive = useRef();
  const AdminLoginActive = useRef();
  console.log(props.data);

  if (props.data === "Home") {
    // HomeActive.current.style.color = "red";
    HomeActive.current.style.backgroundColor = "rgb(110, 105, 105)";
    HomeActive.current.style.fontWeight = "600";
    HomeActive.current.style.borderRadius = "10px";
  } else if (props.data === "Login") {
    LoginActive.current.style.backgroundColor = "rgb(110, 105, 105)";
    LoginActive.current.style.fontWeight = "600";
    LoginActive.current.style.borderRadius = "10px";
  } else if (props.data === "Register") {
    RegisterActive.current.style.backgroundColor = "rgb(110, 105, 105)";
    RegisterActive.current.style.fontWeight = "600";
    RegisterActive.current.style.borderRadius = "10px";
  } else if (props.data === "Admin-login") {
    AdminLoginActive.current.style.backgroundColor = "rgb(110, 105, 105)";
    AdminLoginActive.current.style.fontWeight = "600";
    AdminLoginActive.current.style.borderRadius = "10px";
  }

  const navigate = useNavigate();

  const PublicPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const loginPage = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const loginAdminPage = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const RegisterPage = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  return (
    <nav className="main-nav-bar">
      <div className="header-left">
        <div className="heading">Sport Facilities Reservation System</div>
        <button
          className="Public-page-button"
          ref={HomeActive}
          onClick={PublicPage}
        >
          Home
        </button>
      </div>

      <div className="header-right">
        <button
          className="Public-page-button"
          ref={LoginActive}
          onClick={loginPage}
        >
          Login
        </button>{" "}
        |
        <button
          className="Public-page-button"
          ref={RegisterActive}
          onClick={RegisterPage}
        >
          Register
        </button>{" "}
        |
        <button
          className="Public-page-button"
          ref={AdminLoginActive}
          onClick={loginAdminPage}
        >
          Admin
        </button>
      </div>
    </nav>
  );
};

export default Header;
