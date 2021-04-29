import React from "react";
import "./Toptext.css";


function Toptext() {
    return (
  
     <div>
    <h3 className="h3">Projects</h3>
    <p className="p1">
    Welcome to the project library. You can use the filters on the roght to
     help you search for specific Projects.
    </p>
  
   <div className="buttons">
     <button className="button">BEGINNER</button>
   <button className="button">INTERMEDIATE</button>
   <button className="button">ADVANCED</button>
  
    <div className="numbers">
       <p className="show">Show</p>
       <button className="number">25</button>
       <button className="number">50</button>
       <button className="number">100</button>
     </div>
  </div>
  </div>
  );
  
  }
  export default Toptext;