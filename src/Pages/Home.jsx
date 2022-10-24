import React, { useState } from "react";
import "../Assets/Styles/Home.Module.css";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState(null);
  const setDetails = (e) => {
    e.preventDefault();
    setName("User-Name");
  };

  const logout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const nextpage =(e) =>{
    e.preventDefault();
    navigate("/");
  }
  
  return (
    <div onLoad={()=>{setDetails()}} id="Home-Main" >
      <header>
        <span spellCheck="true" className="Heading-1">
          SPORT FACILITIES RESEVATION SYSTEM <br />
          <i>University of Jaffna, </i>Kilinochi Premises
        </span>

        <span className="Heading-2"> Welcome {Name} </span>
        <button onClick={logout} className="Logout-button">
          Logout
        </button>
      </header>

      <div className="Dashboard-Area">
        <div className="buttons">
        </div>
        <div onClick={nextpage} className="buttons">view</div>
        <div onClick={nextpage} className="buttons">3</div>
        <div onClick={nextpage} className="buttons">4</div>
        <div onClick={nextpage} className="buttons">5</div>
        <div onClick={nextpage} className="buttons">6</div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
