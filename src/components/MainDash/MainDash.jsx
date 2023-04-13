import React from "react";
import Cards from "../Cards/Cards";

import Profile from "../profile";
import Shopping from "../shoppin"
import Shop from "../shop2"
import Im3 from "../shop3"




import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <div className="Profile">
     <div id="Three"><h1>Welcome user!</h1></div> 
      <div id="two"><Profile/></div>

      </div>
      <br></br>
     <div className="shop"> 
      <Cards /> 
      <div className="class">
       
    <div className="cla" id="ma"> <Shopping/></div> 
    <div className="cla" id="mb">  <Shop/></div>
    <div className="cla" id = "mc"> <Im3/></div>
     
      </div>
   
      </div>
    
    
     
      

      
     
    </div>
  );
};

export default MainDash;
