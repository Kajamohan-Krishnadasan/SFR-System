import React, { useState } from "react";
import './Footer.Module.css';
const Footer = () => {
    const [year, setYear] = useState(0);
  const setFooter=()=>{
    let CurrentYear = Date.now;

    setYear(CurrentYear + 5);
  }
    
  return (
    <div id="Footer" onLoad={setFooter}>
        &copy;Copyright {year}
      </div>
  )
}

export default Footer;
