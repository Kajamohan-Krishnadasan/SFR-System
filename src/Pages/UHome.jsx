import React, { useState, useRef } from "react";
import "../Assets/Styles/UHome.Module.css";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import {
  UserHome,
  Facilities,
  Bookings,
  MyAccount,
} from "../Components/GeneralUsers/index";

import {
  ArrowDropDown,
  Home,
  LibraryBooks,
  Logout,
  Settings,
  Star,
} from "@mui/icons-material";

import { userImage, mainLogo } from "../Assets/Icons/index";

const UHome = () => {
  const name = JSON.parse(sessionStorage.getItem("token-info")).mail;

  const setClassName = {
    normal: "side-buttons",
    active: "side-buttons active",
  };

  const allSideButtonsClass = document.getElementsByClassName("side-buttons");

  const setActive = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === num) {
        allSideButtonsClass[i].setAttribute("class", setClassName.active);
      } else {
        allSideButtonsClass[i].setAttribute("class", setClassName.normal);
      }
    }
  };

  const refSet = useRef([]);

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    console.log("Logout Successfully");
    navigate("/");
  };

  const [isVisiable, setIsVisiable] = useState(false);

  const [displayContent, setDisplayContent] = useState(<Bookings />);

  const HomePage = (e) => {
    setActive(allSideButtonsClass, 0);
    setDisplayContent(<UserHome />);
  };

  const FacilitiesPage = (e) => {
    setActive(allSideButtonsClass, 1);
    setDisplayContent(<Facilities />);
  };

  const BookingsPage = (e) => {
    setActive(allSideButtonsClass, 2);
    setDisplayContent(<Bookings />);
  };

  const MyAccountPage = (e) => {
    setActive(allSideButtonsClass, 3);
    setDisplayContent(<MyAccount />);
  };

  const viewSubMenu = () => {
    setIsVisiable(!isVisiable);
  };

  return (
    <div id="Home-Main">
      <header>
        <div className="Heading-1">
          <img src={mainLogo} alt="" className="main-logo" />
          Sport Facilities Reservation System - University of Jaffna, Kilinochi
          Premises
        </div>

        <div className="header-main-submenu" onClick={viewSubMenu}>
          <div className="header-submenu">
            <img src={userImage} alt="Profile_Image" className="user-Image" />

            <span className="Heading"> {name} </span>
            <ArrowDropDown fontSize="large" className="dropdown-icons" />
          </div>
          {isVisiable ? (
            <div className="sub-menu">
              <div className="sub-item" onClick={MyAccountPage}>
                <Settings /> My Account
              </div>
              <div className="sub-item" onClick={logout}>
                <Logout fontSize="medium" />
                Logout
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </header>

      <div className="Dashboard-Area">
        <div className="side-nav-bar">
          <div
            className={setClassName.active}
            ref={refSet.current[0]}
            onClick={HomePage}
          >
            <Home fontSize="medium" className="sidebar-icons" />
            <div className="-buttons">Home</div>
          </div>

          <div
            className={setClassName.normal}
            ref={refSet.current[1]}
            onClick={FacilitiesPage}
          >
            <Star fontSize="medium" className="sidebar-icons" />
            <div className="-buttons">Facilities</div>
          </div>

          <div
            className={setClassName.normal}
            ref={refSet.current[2]}
            onClick={BookingsPage}
          >
            <LibraryBooks fontSize="medium" className="sidebar-icons" />
            <div className="-buttons">Bookings</div>
          </div>

          <div
            className={setClassName.normal}
            ref={refSet.current[3]}
            onClick={MyAccountPage}
          >
            <Settings fontSize="medium" className="sidebar-icons" />
            <div className="-buttons">My Account</div>
          </div>

          <div className={setClassName.normal} onClick={logout}>
            <Logout fontSize="medium" className="sidebar-icons" />
            <div className="-buttons">Logout</div>
          </div>
        </div>

        <div className="Home-Main-Area">{displayContent}</div>
      </div>

      <Footer />
    </div>
  );
};

export default UHome;
