import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Profile from "../profile";


import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="Profile">
     <div id="Three"><h1>Welcome user!</h1></div> 
      <div id="two"><Profile/></div>

      </div>
      <br></br>
      
      <Cards />
      <div id="one"><Table /></div>

      
     
    </div>
  );
};

export default MainDash;
