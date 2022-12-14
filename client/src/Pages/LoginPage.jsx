import React, { useRef, useState } from "react";
import "../Assets/Styles/Header.Module.css";
import { useLocation, useNavigate } from "react-router-dom";

import "../Assets/Styles/SignUpPage.Module.css";
import "../Assets/Styles/LoginPage.Module.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  checkUniMail,
  checkCreatePassword,
} from "../Assets/js/Functions";
import { ErrorStyle } from "../Assets/js/Alerts";
import { mainLogo } from "../Assets/Icons/index";
import Footer from "../Components/Footer/Footer";
import Axios from "axios";

const LoginPage = () => {
  const location = useLocation();

  const [userMailValid, setUserMailValid] = useState(false);
  const [userPasswordValid, setUserPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(location.state);

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

  const Login = (e) => {
    // Prevent page reload
    e.preventDefault();
    if (userMailValid && userPasswordValid) {
      Axios.post("http://localhost:3001/userlogin", {
        userEmail: emailRef.current.value,
        userPassword: passwordRef.current.value,
      })
        .then((res) => {
          if (!res.data.message) {
            sessionStorage.setItem("userDetails", JSON.stringify(res.data[0]));
            navigate("/home");
          } else {
            setErrorMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // navigate("/home");
      // sessionStorage.setItem("token-info", JSON.stringify(data));
      // localStorage.setItem('token', res.data.token);
    } else {
      console.log("user input is invalid");
      setErrorMessage("Email or Password is incorrect!!!");
    }
  };
  const emailRef = useRef();
  const emailAlertRef = useRef();

  const passwordRef = useRef();
  const pwdAlertRef = useRef();
  const loginBtnRef = useRef();

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
      // setMail(email);
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

    if (checkCreatePassword(pwd)) {
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
      <NavBar
        mainLogo={mainLogo}
        PublicPage={PublicPage}
        loginPage={loginPage}
        RegisterPage={RegisterPage}
        loginAdminPage={loginAdminPage}
      />

      <div className="Main-Area">
        <form className="form">
          <h1 className="main-headding">Login</h1>
          <div style={ErrorStyle}>{errorMessage}</div>
          <div className="input-field-sets">
            <label>
              <ContactMailIcon
                className="input-field-icon icon"
                color="primary"
                fontSize="large"
              />
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
                titleAccess="Enter your university Email Address ( Eg:2018e055@eng.jfn.ac.lk )"
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
          <div className="input-field-sets checkbox" onClick={changeTxtToPwd}>
            <input
              type="checkbox"
              placeholder="Password"
              className="checkbox"
              title="Show Password"
            />
            <span className="checkbox-text"> Show Password</span>
          </div>
          <button
            type="submit"
            ref={loginBtnRef}
            className="login-button"
            onClick={Login}
          >
            LOGIN
          </button>
          <div className="extra">
            Don't have an account?
            <i className="href-link" onClick={RegisterPage}>
              Register Here
            </i>
          </div>
        </form>
      </div>
      <Footer />
      
    </div>
  );
};

export default LoginPage;

function NavBar({
  mainLogo,
  PublicPage,
  loginPage,
  RegisterPage,
  loginAdminPage,
}) {
  return (
    <nav className="main-nav-bar">
      <div className="header-left">
        <img src={mainLogo} alt="" className="main-logo" onClick={PublicPage} />
        <div className="heading" onClick={PublicPage}>
          Sport Facilities Reservation System
        </div>
      </div>

      <div className="header-right">
        <button className="Public-page-button Active" onClick={loginPage}>
          Login
        </button>{" "}
        |
        <button className="Public-page-button" onClick={RegisterPage}>
          Register
        </button>{" "}
        |
        <button className="Public-page-button" onClick={loginAdminPage}>
          Admin
        </button>
      </div>
    </nav>
  );
}
