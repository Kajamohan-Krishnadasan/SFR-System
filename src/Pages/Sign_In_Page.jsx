import React, { useRef } from "react";
import "../Assets/Styles/Start_Page.Module.css";
import "../Assets/Styles/Sign_In_Page.Module.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { setYear, checkUniMail } from "../Assets/js/Functions";

const Signinpage = () => {
  const navigate = useNavigate();

  const Login = (event) => {
    // Prevent page reload
    event.preventDefault();
    navigate("/Home");
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

    if (pwd.length >= 8) {
      pwdAlertRef.current.style.color = "green";
      passwordRef.current.style.border = "3px solid green";
      passwordRef.current.style.color = "green";
    } else {
      pwdAlertRef.current.style.color = "red";
      passwordRef.current.style.color = "red";
      passwordRef.current.style.border = "3px solid red";
    }
  };

  return (
    <div id="Login-Main">
      <div id="header">
        <span spellCheck="true">
          SPORT FACILITIES RESEVATION SYSTEM <br />
          <i> University of Jaffna, </i>
          Kilinochi Premises
        </span>
      </div>

      <div className="Main-Area">
        <form> <h1 className="main-headding">Login</h1>
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
              placeholder="20xxExx@eng.jfn.ac.lk"
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

export default Signinpage;
