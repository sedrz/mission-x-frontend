import React from "react";
import Modal from "./Modal/Modal";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";
import logolevelup from "../../assets/img/logolevelup.png";
import register from "../../assets/img/register.png";
import nzflag from "../../assets/img/nzflag.jpg";
import maoriflag from "../../assets/img/maoriflag.jpg";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
   
    const [isOpen, setOpen] = useState(false);
  return (
    <div className="nav-container">
      <div className="nav-subcon">
        <div className="nav-wrapper">
          <div className="nav-box1">
            <img src={logolevelup} alt="logolevelup" />
          </div>
          <nav role="button" aria-label="main button">
      <div className="nav">
        <a
          role="button"
          className={` ${isOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className="nav-box2">
          <div className={`nav ${isOpen && "is-active"}`}>
            <ul className="menu">
              <li className="menu-link">
                <NavLink className="Nav1" activeClassName="is-active" to="/">
                  Home
                </NavLink>
              </li>
             
              <li className="menu-link">
                <NavLink
                  className="Nav4"
                  activeClassName="is-active"
                  to="/Teachers"
                  role="button"
                >
                  {" "}
                  TEACHERS
                </NavLink>
              </li>
              <li className="menu-link">
                <NavLink
                  className="Nav2"
                  activeClassName="is-active"
                  to="/Projects"
                  role="button"
                >
                  PROJECTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
   
        
          <div className="nav-box3">
            <img src={nzflag} alt="nzflag" />
            <img src={maoriflag} alt="lmaoriflag" />
          </div>

          <div className="nav-box4">
            <button href="#" onClick={openModal}>REGISTER</button>
            <button href="#" onClick={openModal}>LOGIN</button>
          </div>
          <Modal isOpen={showModal} closeModal={closeModal}></Modal>
      </div>
      
     
      
      </div>
      </div> 
       );
      

}
     

export default Navbar;
