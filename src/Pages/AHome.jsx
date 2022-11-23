import React, { useState, useRef } from "react";
import "../Assets/Styles/AHome.Module.css";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  AdminHome,
  Dashboard,
  CategoryPage,
  Facilities,
  Bookings,
  ClientsDetails,
  AdminDetails,
  MyAccount,
} from "../Components/AdminUsers/index";

import {
  AdminPanelSettings,
  ArrowDropDown,
  Category,
  ContactEmergency,
  Home,
  LibraryBooks,
  ListAltOutlined,
  Logout,
  Settings,
  Star,
} from "@mui/icons-material";

import { userImage } from "../Assets/Icons/index";

// const referenceSet = createContext();
//  [refSet[3], refSet[4], refSet[5], refSet[6]];

const AHome = () => {
  const navigate = useNavigate();
  const name = JSON.parse(sessionStorage.getItem("token-info")).mail;
  const [isVisiable, setIsVisiable] = useState(false);
 
  const refSet = useRef([]);
  const displayRef = useRef();

  const logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  };

  const allSideButtonsClass = Array.from(
    document.getElementsByClassName("side-buttons")
  );

  const setActive = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === num) {
        arr[i].setAttribute("class", setClassName.active);
      } else {
        arr[i].setAttribute("class", setClassName.normal);
      }
    }
  };
  const [displayContent, setDisplayContent] = useState(<Dashboard />);

  const setClassName = {
    normal: "side-buttons",
    active: "side-buttons active",
  };

  // const [classname, setClassname] = useState("side-buttons");

  const HomePage = (e) => {
    setActive(allSideButtonsClass, 0);
    setDisplayContent(<AdminHome />);
  };

  const DashboardPage = (e) => {
    
    setActive(allSideButtonsClass, 1);
    setDisplayContent(<Dashboard  ref={{
      ref1: refSet[3],
      ref2: refSet[4],
      ref3: refSet[5],
      ref4: refSet[6],

    }}/>);
  };
  const CategoriesPage = (e) => {
    setActive(allSideButtonsClass, 2);
    setDisplayContent(<CategoryPage />);
  };

  const FacilitiesPage = (e) => {
    setActive(allSideButtonsClass, 3);
    setDisplayContent(<Facilities />);
  };

  const BookingsPage = (e) => {
    setActive(allSideButtonsClass, 4);
    setDisplayContent(<Bookings />);
  };
  const ClientsPage = (e) => {
    setActive(allSideButtonsClass, 5);
    setDisplayContent(<ClientsDetails />);
  };
  const AdministratorsPage = (e) => {
    setActive(allSideButtonsClass, 6);
    setDisplayContent(<AdminDetails />);
  };

  const MyAccountPage = (e) => {
    setActive(allSideButtonsClass, 7);
    setDisplayContent(<MyAccount />);
  };

  const viewSubMenu = () => {
    setIsVisiable(!isVisiable);
  };

  return (
    <div id="Home-Main">
      <header>
        <div className="Heading-1">
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
            className="side-buttons active"
            ref={refSet.current[0]}
            onClick={HomePage}
          >
            <Home fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Home</div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[1]}
            onClick={DashboardPage}
          >
            <ListAltOutlined fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Dashboard </div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[2]}
            onClick={CategoriesPage}
          >
            <Category fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Categories</div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[3]}
            onClick={FacilitiesPage}
          >
            <Star fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Facilities</div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[4]}
            onClick={BookingsPage}
          >
            <LibraryBooks fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Bookings</div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[5]}
            onClick={ClientsPage}
          >
            <ContactEmergency fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Clients</div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[6]}
            onClick={AdministratorsPage}
          >
            <AdminPanelSettings fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Admin</div>
          </div>

          <div
            className="side-buttons"
            ref={refSet.current[7]}
            onClick={MyAccountPage}
          >
            <Settings fontSize="large" className="sidebar-icons" />
            <div className="-buttons">My Account</div>
          </div>

          <div className="side-buttons" onClick={logout}>
            <Logout fontSize="large" className="sidebar-icons" />
            <div className="-buttons">Logout</div>
          </div>
        </div>

        <div className="Home-Main-Area" ref={displayRef}>
          {displayContent}
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default AHome;
