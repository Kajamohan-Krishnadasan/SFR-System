import React, { useRef, useState } from "react";
import "../Assets/Styles/Header.Module.css";
import {  useNavigate } from "react-router-dom";

import "../Assets/Styles/SignUpPage.Module.css";
import "../Assets/Styles/LoginPage.Module.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { setYear, checkUniMail } from "../Assets/js/Functions";
import { ErrorStyle } from "../Assets/js/Alerts";

const AdminLoginPage = () => {
  const [userMailValid, setUserMailValid] = useState(false);
  const [userPasswordValid, setUserPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const [mail, setMail] = useState("");
  
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
    navigate("/admin-login");
  };

  const RegisterPage = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const Login = (event) => {
    // Prevent page reload
    event.preventDefault();

    if (userMailValid && userPasswordValid) {
      console.log("user input is valid");

      const userDetails = {
        mail
      }
      navigate("/admin");
      sessionStorage.setItem('token-info',JSON.stringify(userDetails));

    } else {
      console.log("Email or Password is incorrect");
      setErrorMessage("Email or Password is incorrect!!!");
    }
  };
  const emailRef = useRef();
  const emailAlertRef = useRef();

  const passwordRef = useRef();
  const pwdAlertRef = useRef();

  const changeTxtToPwd = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const onChangeEmail = (props) => {
    const email = props.target.value;
    emailAlertRef.current.style.visibility = "visible";
    if (checkUniMail(email)) {
      emailAlertRef.current.style.color = "green";
      emailRef.current.style.color = "green";
      emailRef.current.style.border = "3px solid green";
      setMail(email);
      setUserMailValid(true);
    } else {
      emailAlertRef.current.style.color = "red";
      emailRef.current.style.color = "red";
      emailRef.current.style.border = "3px solid red";
      setUserMailValid(false);
    }
  };

  const onChangePWD = (props) => {
    const pwd = props.target.value;
    pwdAlertRef.current.style.visibility = "visible";
    pwdAlertRef.current.style.content = "visible";

    if (pwd.length >= 8) {
      pwdAlertRef.current.style.color = "green";
      passwordRef.current.style.color = "green";
      passwordRef.current.style.border = "3px solid green";
      setUserPasswordValid(true);
    } else {
      pwdAlertRef.current.style.color = "red";
      passwordRef.current.style.color = "red";
      passwordRef.current.style.border = "3px solid red";
      setUserPasswordValid(false);
    }
  };

  return (
    <div id="Login-Main">
      <nav className="main-nav-bar">
        <div className="header-left">
          <div className="heading" onClick={PublicPage}>
            Sport Facilities Reservation System
          </div>
          <button className="Public-page-button-home" onClick={PublicPage}>
            Home
          </button>
        </div>

        <div className="header-right">
          <button className="Public-page-button" onClick={loginPage}>
            Login
          </button>{" "}
          |
          <button className="Public-page-button" onClick={RegisterPage}>
            Register
          </button>{" "}
          |
          <button
            className="Public-page-button Active"
            onClick={loginAdminPage}
          >
            Admin
          </button>
        </div>
      </nav>

      <div className="Main-Area">
        <form className="form">
          {" "}
          <h1 className="main-headding">Login as Admin</h1>
          <div style={ErrorStyle}>{errorMessage}</div>
          <div className="input-field-sets">
            <label>
              <ContactMailIcon
                className="input-field-icon icon"
                color="primary"
                fontSize="large"
              />{" "}
            </label>
            <input
              type="text"
              placeholder="20xxexx@eng.jfn.ac.lk"
              required
              ref={emailRef}
              onChange={onChangeEmail}
              className="input-field"
            />
            <span>
              <InfoOutlinedIcon
                titleAccess="Enter your university Email Address ( Eg:2018E055@eng.jfn.ac.lk )"
                className="input-field-icon"
                ref={emailAlertRef}
              />
            </span>
          </div>
          <div className="input-field-sets">
            <label>
              <LockOutlinedIcon
                className="input-field-icon icon"
                color="primary"
                fontSize="large"
              />{" "}
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="input-field"
              onChange={onChangePWD}
              ref={passwordRef}
            />
            <span>
              <InfoOutlinedIcon
                titleAccess="Enter Password. Password Length must minimum 8."
                className="input-field-icon"
                id="Password-Alert"
                ref={pwdAlertRef}
              />
            </span>
          </div>
          <div className="input-field-sets checkbox">
            <input
              type="checkbox"
              placeholder="Password"
              className="checkbox"
              onClick={changeTxtToPwd}
              title="Show Password"
            />{" "}
            <span className="checkbox-text"> Show Password</span>
          </div>
          <button type="submit" className="login-button" onClick={Login}>
            LOGIN
          </button>
        </form>
      </div>
      <div className="Footer-All-Page">
        <span>&copy; Copyright {setYear()} University of Jaffna.</span>
      </div>
    </div>
  );
};

export default AdminLoginPage;
