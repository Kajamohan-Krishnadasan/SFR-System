import {
  Category,
  FormatListBulleted,
  Pending,
  People,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./AdminHome.Module.css";

const Home = () => {
  const [valueSet, setValuesSets] = useState([0, 0, 0, 0]);
 
  return (
    <div onLoad={()=>{setValuesSets(12345);}}>
      <h1 className="welcome-title">
        Welcome to Sports Facilities Reservation System
      </h1>
      <hr className="hr-line" />

      <div className="home-category">
        <div className="details-in-home">
          <div className="icon">
            <Category fontSize="large" />
          </div>

          <div className="values">
            <span className="values-name"> Total Categories </span>
            <span className="values-value"> {valueSet[0]} </span>
          </div>
        </div>

        <div className="details-in-home">
          <div className="icon">
            <FormatListBulleted fontSize="large" />
          </div>
          <div className="values">
            <span className="values-name"> Total Facilities </span>
            <span className="values-value"> {valueSet[1]} </span>
          </div>
        </div>

        <div className="details-in-home">
          <div className="icon">
            <People fontSize="large" />
          </div>
          <div className="values">
            <span className="values-name"> Registered Clients </span>
            <span className="values-value"> {valueSet[2]} </span>
          </div>
        </div>

        <div className="details-in-home">
          <div className="icon">
            <Pending fontSize="large" />
          </div>
          <div className="values">
            <span className="values-name"> Pending Boookings </span>
            <span className="values-value"> {valueSet[3]} </span>
          </div>
        </div>
      </div>

      <hr className="hr-line"/>

      <div className="img-area"> </div>
    </div>
  );
};

export default Home;
