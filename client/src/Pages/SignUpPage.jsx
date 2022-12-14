import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../Assets/Styles/Header.Module.css";
import "../Assets/Styles/SignUpPage.Module.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  checkName,
  checkCreatePassword,
  checkUniMail,
} from "../Assets/js/Functions";

import Footer from "../Components/Footer/Footer";
import { mainLogo } from "../Assets/Icons/index";

import Axios from "axios";

const Loginpage = () => {
  const [userNameValid, setUserNameValid] = useState(false);
  const [userMailValid, setUserMailValid] = useState(false);
  const [userPasswordValid, setUserPasswordValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState(
    "Use Your University email for Registration"
  );
  const [loginMessage, setLoginMessage] = useState("");

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

  const signInPage = (e) => {
    navigate("/login");
  };

  const handleSubmit = (event) => {
    // alert(data);
    // Prevent page reload
    event.preventDefault();
    const data = {
      userName: nameRef.current.value,
      userEmail: emailRef.current.value,
      userPassword: passwordRef.current.value,
    };

    if (!userNameValid && !userNameValid && !userPasswordValid) {
      messageRef.current.innerText = "Enter your details correctly!!";
      messageRef.current.style.color = "Red";
      messageRef.current.style.fontSize = "20px";
      NameAlertRef.current.style.color = "red";
      nameRef.current.style.color = "red";
      nameRef.current.style.border = "3px solid red";
    } else if (!userNameValid) {
      messageRef.current.innerText = "Enter your Name!!";
      messageRef.current.style.color = "Red";
      messageRef.current.style.fontSize = "20px";
      NameAlertRef.current.style.color = "red";
      nameRef.current.style.color = "red";
      nameRef.current.style.border = "3px solid red";
    } else if (!userMailValid) {
      messageRef.current.innerText = "Enter your University Email correctly!!";
      messageRef.current.style.color = "Red";
      messageRef.current.style.fontSize = "20px";
      emailAlertRef.current.style.color = "red";
      emailRef.current.style.color = "red";
      emailRef.current.style.border = "3px solid red";
    } else if (!userPasswordValid) {
      messageRef.current.innerText = "Enter your Password correctly!!";
      messageRef.current.style.color = "Red";
      messageRef.current.style.fontSize = "20px";
      pwdAlertRef.current.style.color = "red";
      passwordRef.current.style.color = "red";
      passwordRef.current.style.border = "3px solid red";
    } else {
      Axios.post("http://localhost:3001/newuserinsert", data)
        .then((res) => {
          if (res.data.success) {
            setErrorMessage(res.data.success);
            setLoginMessage("Login your Account");

            nameRef.current.value = "";
            nameRef.current.style.border = "none";
            nameRef.current.backgroundColor = "white";

            emailRef.current.value = "";
            emailRef.current.style.border = "none";
            emailRef.current.style.backgroundColor = "white";

            passwordRef.current.value = "";
            passwordRef.current.style.border = "none";
            passwordRef.current.style.backgroundColor = "white";

            messageRef.current.style.color = "green";
            messageRef.current.style.fontSize = "22px";
            // navigate('/login');
          } else {
            setErrorMessage(res.data.message);
            setLoginMessage("");
            messageRef.current.style.color = "Red";
            messageRef.current.style.fontSize = "20px";
            emailAlertRef.current.style.color = "red";
            emailRef.current.style.color = "red";
            emailRef.current.style.border = "3px solid red";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChangeName = (props) => {
    const name = props.target.value;
    NameAlertRef.current.style.visibility = "visible";
    if (checkName(name)) {
      NameAlertRef.current.style.color = "green";
      nameRef.current.style.border = "3px solid green";
      nameRef.current.style.color = "green";
      setUserNameValid(true);
    } else {
      NameAlertRef.current.style.color = "red";
      nameRef.current.style.color = "red";
      nameRef.current.style.border = "3px solid red";
      setUserNameValid(false);
    }
  };

  const onChangeEmail = (props) => {
    const email = props.target.value;
    emailAlertRef.current.style.visibility = "visible";
    if (checkUniMail(email)) {
      emailAlertRef.current.style.color = "green";
      emailRef.current.style.color = "green";
      emailRef.current.style.border = "3px solid green";
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

  const changeTxtToPwd = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const messageRef = useRef();

  const nameRef = useRef();
  const NameAlertRef = useRef();

  const emailRef = useRef();
  const emailAlertRef = useRef();

  const passwordRef = useRef();
  const pwdAlertRef = useRef();

  return (
    <div id="Login-Main">
      <NavBar
        mainLogo={mainLogo}
        PublicPage={PublicPage}
        loginPage={loginPage}
        RegisterPage={RegisterPage}
        loginAdminPage={loginAdminPage}
      />

      <div className="body">
        <div className="left">
          <h2 className="main-headding1">Welcome</h2>
          <div className="messages1">
            if you already register login with your personal info
          </div>
          <button
            onClick={signInPage}
            className="sign-in-button"
            title="Sign in"
          >
            SIGN IN
          </button>
        </div>

        <div className="right">
          <h2 className="main-headding2">Create Account</h2>
          <i className="messages2" ref={messageRef}>
            {errorMessage} <br />
            {loginMessage}
          </i>
          <form>
            <div className="input-field-sets">
              <label htmlFor="Name">
                <PersonPinIcon
                  className="input-field-icon icon"
                  color="primary"
                  fontSize="large"
                />{" "}
              </label>
              <input
                type="text"
                placeholder="Name"
                title="Name"
                required
                className="input-field"
                onChange={onChangeName}
                ref={nameRef}
              />
              <span>
                <InfoOutlinedIcon
                  titleAccess="Enter your Name"
                  className="input-field-icon"
                  ref={NameAlertRef}
                />
              </span>
            </div>

            <div className="input-field-sets">
              <label htmlFor="Email">
                <ContactMailIcon
                  className="input-field-icon icon"
                  color="primary"
                  fontSize="large"
                />
              </label>
              <input
                type="text"
                title="Email"
                placeholder="20xxexx@eng.jfn.ac.lk"
                required
                className="input-field"
                onChange={onChangeEmail}
                ref={emailRef}
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
              <label htmlFor="Password">
                <LockOutlinedIcon
                  className="input-field-icon icon"
                  color="primary"
                  fontSize="large"
                />
              </label>
              <input
                type="password"
                placeholder="Password"
                title="Password"
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
              className="sign-up-button"
              onClick={handleSubmit}
              title="Sign up"
            >
              SIGN UP
            </button>
            <div className="extra">
              Already have an account ?
              <i className="href-link" onClick={signInPage}>
                Login Here
              </i>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Loginpage;

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
        <button className="Public-page-button" onClick={loginPage}>
          Login
        </button>
        |
        <button className="Public-page-button Active" onClick={RegisterPage}>
          Register
        </button>
        |
        <button className="Public-page-button" onClick={loginAdminPage}>
          Admin
        </button>
      </div>
    </nav>
  );
}
