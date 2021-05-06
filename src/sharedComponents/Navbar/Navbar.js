import React, { useState } from "react";
import Modal from "./Modal/Modal";

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

  return (
    <div className="nav-container">
      <div className="nav-subcon">
        <div className="nav-wrapper">
          <div className="nav-box1">
            <img src={logolevelup} alt="logolevelup" />
          </div>

          <div className="nav-box2">
            <ul className="menu">
              <li className="menu-link">
                <a href="#">HOME</a>
              </li>
              <li className="menu-link">
                <a href="#">FEATURES</a>
              </li>
              <li className="menu-link">
                <a href="#">TEACHERS</a>
              </li>
            </ul>
          </div>

          <div className="nav-box3">
            <img src={nzflag} alt="nzflag" />
            <img src={maoriflag} alt="lmaoriflag" />
          </div>

          <div className="nav-box4">
            <button href="#" onClick={openModal}>REGISTER</button>
            <button href="#" onClick={openModal}>LOGIN</button>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} closeModal={closeModal}></Modal>
    </div>
  );
}

export default Navbar;
