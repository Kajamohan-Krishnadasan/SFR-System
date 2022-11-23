import React from "react";
import "../../Assets/Styles/AdminUserStyles/Dashboard.Module.css";
// import {
//   Facilities,
//   Bookings,
//   ClientsDetails,
//   AdminDetails,
// } from "../Components/AdminUsers/index";

const Dashboard = React.forwardRef((props, ref) => {
  console.log(ref.length);
  // const {ref1, ref2, ref3, ref4} = ref;
  const moveToFacilities = () => {
    // ref1.current.click();
    console.log("Move to Facilities");
  };

  const moveToBooking = () => {
    // ref2.current.click();
    console.log("Move to Booking");
  };

  const moveToClients = () => {
    // ref3.current.click();
    console.log("Move to Clients");
  };

  const moveToSystemUsers = () => {
    // ref4.current.click();
    console.log("Move to Administrator");
  };


  return (
    <div id="Dashboard">
      <button className="Dashboard-buttons" onClick={moveToFacilities}>
        Facilities
      </button>
      <button className="Dashboard-buttons" onClick={moveToBooking}>
        Booking
      </button>
      <button className="Dashboard-buttons" onClick={moveToClients}>
        Clients
      </button>
      <button className="Dashboard-buttons" onClick={moveToSystemUsers}>
        System Users
      </button>
    </div>
  );
});

export default Dashboard;
