import React from "react";
import { setYear } from "../../Assets/js/Functions";

import "./Footer.Module.css";
const Footer = () => {
  return (
    <div className="Footer-All-Page" id="Footer">
      <span>&copy; Copyright {setYear()} University of Jaffna.</span>
    </div>
  );
};

export default Footer;
