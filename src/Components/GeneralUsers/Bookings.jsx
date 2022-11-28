import React, { useState } from "react";
import { useRef } from "react";
import "./Booking.Module.css";
import ViewBooking from "./ViewBooking";
import { BookFacility } from "./BookFacility";

const Bookings = () => {
  const refSet = useRef([]);

  const [displayBooking, setDisplayBooking] = useState(<ViewBooking />);

  const display_Details = (props) => {
    props.target.style.backgroundColor = "#0f5e80";
    props.target.style.color = "#fff";
    document
      .getElementsByClassName("button-in-user-Booking")[1]
      .setAttribute("Style", "backgroundColor:#fff");
    setDisplayBooking(<ViewBooking />);
  };

  const book_facility = (props) => {
    props.target.style.backgroundColor = "#0f5e80";
    props.target.style.color = "#fff";
    document
      .getElementsByClassName("button-in-user-Booking")[0]
      .setAttribute("Style", "backgroundColor:#fff");

    setDisplayBooking(<BookFacility />);
  };

  return (
    <div className="user-Booking">
      <div className="booking-buttons-set">
        <button
          className="button-in-user-Booking"
          ref={refSet.current[0]}
          onClick={display_Details}
          style={{ backgroundColor: "#0f5e80", color: "#fff" }}
        >
          View Bookings Details
        </button>
        <button
          className="button-in-user-Booking"
          ref={refSet.current[1]}
          onClick={book_facility}
        >
          Book Facilities
        </button>
      </div>
      <div className="display-booking-button-output">{displayBooking}</div>
    </div>
  );
};

export default Bookings;
