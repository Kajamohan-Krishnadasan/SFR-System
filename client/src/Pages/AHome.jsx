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
import { mainLogo } from "../Assets/Icons/index";
import Axios from "axios";
import { useEffect } from "react";
import { userImage } from "../Assets/Icons/index";

const AHome = () => {
  const navigate = useNavigate();
  // const name = JSON.parse(sessionStorage.getItem("userDetails")).mail;

  const [userLogo, setUserLog] = useState("");
  // if (!userDetails) {
  //   window.location.href = "/";
  // }

  useEffect(() => {
    if (!sessionStorage.getItem("userDetails")) {
      window.location.href = "/";
    }
  }, [sessionStorage.getItem("userDetails")]);


  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  const name = userDetails.name;
  const email = userDetails.email;

  const [isVisiable, setIsVisiable] = useState(false);

  useEffect(() => {
    const setUserImage = async () => {
      const formData = new FormData();
      formData.append("email", email);
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      try {
        const res = await Axios.get("http://localhost:3001/getAdminImage", formData);
        if (res.data.length > 0) {
          console.log(res.data[0]);
          // console.log(`/uploads/Admin_Info/User_Images${res.data[0].img_path}`);
          setUserLog(res.data[0].img_path);
        } 
      } catch (err) {
        console.log(err);
      }
    };
    setUserImage();
  }, []);

  // const refSet = useRef([]);

  const displayRef = useRef();
  const subMenuRef = useRef();

  const logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  };

  const allSideButtonsClass = document.getElementsByClassName("side-buttons");

  const setActive = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === num) {
        arr[i].setAttribute("class", setClassName.active);
      } else {
        arr[i].setAttribute("class", setClassName.normal);
      }
    }
  };
  const [displayContent, setDisplayContent] = useState(<AdminHome />);

  const setClassName = {
    normal: "side-buttons",
    active: "side-buttons active",
  };

  const HomePage = (e) => {
    setActive(allSideButtonsClass, 0);
    setDisplayContent(<AdminHome />);
  };

  const DashboardPage = (e) => {
    setActive(allSideButtonsClass, 1);
    setDisplayContent(
      <Dashboard
        handleClick_Facility={FacilitiesPage}
        handleClick_Bookings={BookingsPage}
        handleClick_Clients={ClientsPage}
        handleClick_Admins={AdministratorsPage}
      />
    );
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
    setDisplayContent(<MyAccount setUserLog={setUserLog} />);
  };

  const viewSubMenu = () => {
    setIsVisiable(!isVisiable);
  };

  return (
    <div id="Admin-Home-Main">
      <AdminHeader
        mainLogo={mainLogo}
        viewSubMenu={viewSubMenu}
        userImage={userLogo}
        defaultImage={userImage}
        name={name}
        isVisiable={isVisiable}
        subMenuRef={subMenuRef}
        MyAccountPage={MyAccountPage}
        logout={logout}
      />

      <div className="Dashboard-Area">
        <SideNavBarAdmin
          HomePage={HomePage}
          DashboardPage={DashboardPage}
          CategoriesPage={CategoriesPage}
          FacilitiesPage={FacilitiesPage}
          BookingsPage={BookingsPage}
          ClientsPage={ClientsPage}
          AdministratorsPage={AdministratorsPage}
          MyAccountPage={MyAccountPage}
          logout={logout}
        />

        <div className="Home-Main-Area" ref={displayRef}>
          {displayContent}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AHome;

function AdminHeader({
  mainLogo,
  viewSubMenu,
  userImage,
  defaultImage,
  name,
  isVisiable,
  subMenuRef,
  MyAccountPage,
  logout,
}) {
  return (
    <header>
      <div className="Heading-1">
        <img src={mainLogo} alt="" className="main-logo" />
        Sport Facilities Reservation System - University of Jaffna, Kilinochi
        Premises
      </div>

      <div className="header-main-submenu">
        <div className="header-submenu" onMouseOver={viewSubMenu}>
          {console.log(userImage)}
          <img src={userImage} alt="Profile_Image" className="user-Image" />
          <span className="Heading"> {name} </span>
          <ArrowDropDown fontSize="large" className="dropdown-icons" />
        </div>
        {isVisiable ? (
          <div className="sub-menu" ref={subMenuRef}>
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
  );
}

function SideNavBarAdmin({
  HomePage,
  DashboardPage,
  CategoriesPage,
  FacilitiesPage,
  BookingsPage,
  ClientsPage,
  AdministratorsPage,
  MyAccountPage,
  logout,
}) {
  const refSet = useRef([]);
  const setClassName = {
    normal: "side-buttons",
    active: "side-buttons active",
  };

  return (
    <div className="side-nav-bar">
      <div
        className={setClassName.active}
        ref={refSet.current[0]}
        onClick={HomePage}
      >
        <Home fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Home</div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[1]}
        onClick={DashboardPage}
      >
        <ListAltOutlined fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Dashboard </div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[2]}
        onClick={CategoriesPage}
      >
        <Category fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Categories</div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[3]}
        onClick={FacilitiesPage}
      >
        <Star fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Facilities</div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[4]}
        onClick={BookingsPage}
      >
        <LibraryBooks fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Bookings</div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[5]}
        onClick={ClientsPage}
      >
        <ContactEmergency fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Clients</div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[6]}
        onClick={AdministratorsPage}
      >
        <AdminPanelSettings fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Admin</div>
      </div>

      <div
        className={setClassName.normal}
        ref={refSet.current[7]}
        onClick={MyAccountPage}
      >
        <Settings fontSize="large" className="sidebar-icons" />
        <div className="-buttons">My Account</div>
      </div>

      <div className={setClassName.normal} onClick={logout}>
        <Logout fontSize="large" className="sidebar-icons" />
        <div className="-buttons">Logout</div>
      </div>
    </div>
  );
}
