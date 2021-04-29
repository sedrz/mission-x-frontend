import React from "react";

import { Link } from 'react-router-dom';

import { FiUser } from "react-icons/fi";
import "./Header.css";
import logolevelup from "../assets/img/logolevelup.png";
import register from "../assets/img/register.png";
import nzflag from "../assets/img/nzflag.jpg";
import maoriflag from "../assets/img/maoriflag.jpg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <img src={logolevelup} alt="logolevelup" />
          </div>
          <ul className="menu">
            <li className="menu-link">
              <Link to="/home">HOME</Link>
            </li>
            <li className="menu-link">
              <a href="#">FEATURES</a>
            </li>
            <li className="menu-link">
              <a href="#">TEACHERS</a>
            </li>
          </ul>
          <div className="nav-r-container">
            <div className="lang-con">
              <div className="flag">
                <img src={nzflag} alt="nzflag" />
                <img src={maoriflag} alt="maoriflag" />
              </div>
            </div>
            <div className="user-container">
              <img src={register} alt="register" />

              <div>
                <ul className="menu-user">
                  <li className="menu-regist">
                    <a href="#">REGISTER</a>
                  </li>
                  <li className="menu-log">
                    <a href="#">LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
