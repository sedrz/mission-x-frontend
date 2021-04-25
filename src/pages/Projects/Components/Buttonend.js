import React from "react";

import "./Buttonend.css";

function Buttonend() {
    return (
      <div className="endButtons">
        <button className="TopButton" >
          <a href="../logo2.png">BACK TO TOP</a>
        </button>

        <button className="Dashboard">
          <a href="../Dashboard.js">BACK TO DASHBOARD</a>
        </button>
      </div>
    );
}
export default Buttonend;