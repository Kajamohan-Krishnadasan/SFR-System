import { RemoveRedEye, Search } from "@mui/icons-material";
import React from "react";
// import "src/Components/GeneralUsers/Booking.Module.css"
import "./Booking.Module.css";
import data from "../Samples/Bookings";

const ViewBooking = () => {
  const StatusStyle = {
    Active: {
      backgroundColor: "#0000a6",
    },
    Inactive: {
      backgroundColor: "#fa0000",
    },
    Pending:{
      backgroundColor: "#595c5e",
    }
  };

  const specialStatus = (e) => {
    if (e === "Confirmed") { //Confirmed
      return (
        <div className="Status-Text" style={StatusStyle.Active}>
          Confirmed
        </div>
      );
    }else if(e === "Pending"){ //Pending
      return (
        <div className="Status-Text" style={StatusStyle.Pending}>
          Pending
        </div>
      );
    } else {
      return (
        <div className="Status-Text" style={StatusStyle.Inactive}>
          Cancelled
        </div>
      );
    }
  };


  let No = 0;
  // let len = data.length;
  const nextButton = React.useRef();
  // const nextBtn = document.getElementsByClassName("next-button");

  return (
    <div className="Booking-Page">
      <div className="header-set">
        <span className="sub-Heading">My Bookings List</span>
      </div>

      <hr className="hr-line-table" />

      <div className="search-set">
        Search : <input type="text" className="search-input" />{" "}
        <Search fontSize="large" color="action" />
      </div>

      <table>
        <thead>
          <tr>
            <th> #No </th>
            <th> Date Booked </th>
            <th> Ref.ID </th>
            <th> Facility </th>
            <th> Schedule</th>
            <th className="Status-column-size"> Status </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            // if (No < 10) {
              return (
                <tr key={key}>
                  <td>{++No}</td>
                  <td>{val.DateBooked}</td>
                  <td>{val.ID}</td>
                  <td>{val.Facility}</td>
                  <td>{val.Schedule}</td>
                  <td>{specialStatus(val.Status)}</td>
                  <td >
                    <span className="view-action">
                      <RemoveRedEye className="Eye"/> View
                    </span>
                  </td>
                </tr>
              );
            // }
          })}
        </tbody>
      </table>

      <div className="table-end">
        <div className="table-count-text">
          Showing 1 to {data.length} of {data.length} entries
        </div>
        <div className="next-and-previous-button">
          <button className="Previous-button">Previous</button>
          <div className="current-page-number">1</div>
          <button className="next-button" ref={nextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBooking;


