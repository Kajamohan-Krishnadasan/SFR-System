import React from "react";
import "../../Assets/Styles/AdminUserStyles/Dashboard.Module.css";
import { useNavigate } from "react-router-dom";
import { admin, client, facility, book } from "../../Assets/Icons/index";

export const Dashboard = (props) => {
  const navigate = useNavigate();

  const handleClick_Facility = () => {
    navigate("/admin", {state:{
      changeTab : 3,
    }});
  };

  const handleClick_Bookings = () => {
    navigate("/admin", {state:{
      changeTab : 4,
    }});
  };

  const handleClick_Clients = () => {
    navigate("/admin", {state:{
      changeTab : 5,
    }});
  };

  const handleClick_Admins = () => {
    navigate("/admin",{state:{
      changeTab : 6,
    }});
  };

  return (
    <div id="Dashboard">
      <button className="Dashboard-buttons" onClick={handleClick_Facility}>
        <img
          src={facility}
          alt="Facility"
          className="img-dashboard"
          onClick={handleClick_Facility}
        />
        <div onClick={handleClick_Facility}>Facilities</div>
      </button>

      <button className="Dashboard-buttons" onClick={handleClick_Bookings}>
        <img
          src={book}
          alt="Booking"
          className="img-dashboard"
          onClick={handleClick_Bookings}
        />
        <div onClick={handleClick_Bookings}>Booking</div>
      </button>

      <button className="Dashboard-buttons" onClick={handleClick_Clients}>
        <img
          src={client}
          alt="Clients"
          className="img-dashboard"
          onClick={handleClick_Clients}
        />
        <div onClick={handleClick_Clients}>Clients</div>
      </button>

      <button className="Dashboard-buttons" onClick={handleClick_Admins}>
        <img
          src={admin}
          alt="Admin"
          className="img-dashboard"
          onClick={handleClick_Admins}
        />
        <div onClick={handleClick_Admins}>System Users</div>
      </button>
    </div>
  );
};
