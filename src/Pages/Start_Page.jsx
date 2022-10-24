import React, { useRef } from "react";
import "../Assets/Styles/Start_Page.Module.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import {
  setYear,
  checkName,
  checkCreatePassword,
  checkUniMail,
} from "../Assets/js/Functions";

const Loginpage = () => {
  const navigate = useNavigate();
  const signInPage = (e) => {
    // e.preventDefault();
    // if(checkUniMail(emailRef.current.value))

    navigate("sign-in");
  };

  const handleSubmit = () => {
    if (
      checkUniMail(emailRef.current.value) &&
      checkName(nameRef.current.value) &&
      checkCreatePassword(passwordRef.current.value)
    ) {
      navigate("/Home");
    } else {
      messageRef.current.innerText = "Invalid Email or Password!!";
      messageRef.current.style.color = "Red";
      messageRef.current.style.fontSize = "20px";
    }
  };

  const onChangeName = (props) => {
    const name = props.target.value;
    NameAlertRef.current.style.visibility = "visible";
    if (checkName(name)) {
      NameAlertRef.current.style.color = "green";
      nameRef.current.style.border = "3px solid green";
      nameRef.current.style.color = "green";
    } else {
      NameAlertRef.current.style.color = "red";
      nameRef.current.style.color = "red";
      nameRef.current.style.border = "3px solid red";
    }
  };

  const onChangeEmail = (props) => {
    const email = props.target.value;
    emailAlertRef.current.style.visibility = "visible";
    if (checkUniMail(email)) {
      emailAlertRef.current.style.color = "green";
      emailRef.current.style.border = "3px solid green";
      emailRef.current.style.color = "green";
    } else {
      emailAlertRef.current.style.color = "red";
      emailRef.current.style.color = "red";
      emailRef.current.style.border = "3px solid red";
    }
  };

  const onChangePWD = (props) => {
    const pwd = props.target.value;
    pwdAlertRef.current.style.visibility = "visible";
    pwdAlertRef.current.style.content = "visible";

    if (checkCreatePassword(pwd)) {
      pwdAlertRef.current.style.color = "green";
      passwordRef.current.style.border = "3px solid green";
      passwordRef.current.style.color = "green";
    } else {
      pwdAlertRef.current.style.color = "red";
      passwordRef.current.style.color = "red";
      passwordRef.current.style.border = "3px solid red";
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
      <div id="header">
        <span spellCheck="true">
          SPORT FACILITIES RESEVATION SYSTEM <br />
          <i> University of Jaffna, </i>
          Kilinochi Premises
        </span>
      </div>

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
            Use Your University email for Registration
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
                />{" "}
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
                />{" "}
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

            <button
              type="submit"
              className="sign-up-button"
              onClick={handleSubmit}
              title="Sign up"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <div className="Footer-All-Page">
        <span>&copy; Copyright {setYear()} University of Jaffna.</span>
      </div>
    </div>
  );
};

export default Loginpage;

/**
 * Eye Icon
 *
 * <VisibilityOutlinedIcon className="input-field-icon" color="disabled" />
 * <VisibilityOffOutlinedIcon className="input-field-icon" color="disabled" />
 *
 * import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
 * import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
 *
 *
 */
