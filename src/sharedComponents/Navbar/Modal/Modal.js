import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Modal.css";
import students from "../../../assets/students.jpg";
import teacher from "../../../assets/teacher.jpg";
import verticalline from "../../../assets/verticalline.png";

// App => Modal => Content
//App => parent of Modal
// Modal => child of App/ parent of Content
//

function Modal({ isOpen, closeModal }) {
  const history = useHistory();
  const [studentFormData, updateStudentFormData] = useState({
    email: "",
    password: "",
  });
  const [teacherFormData, updateTeacherFormData] = useState({
    email: "",
    password: "",
  });

  // calls the login api.
  const callStudentLoginAPI = () => {
    console.log("test");
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(studentFormData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // fetch method => 1. URL of the API endpoint 2. request options (method type, body parameters etc).
    fetch("http://localhost:4000/api/user/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result === "Successfully logged in user!") {
          closeModal();
          history.push("/projects");
        }
        alert(result);
      })
      .catch((error) => console.log("error", error));
  };

  const callTeacherLoginAPI = () => {
    console.log("test");
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(studentFormData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // fetch method => 1. URL of the API endpoint 2. request options (method type, body parameters etc).
    fetch("http://localhost:4000/api/user/login", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => console.log("error", error));
  };

  const changeStudentEmail = (event) => {
    updateStudentFormData({ ...studentFormData, email: event.target.value });
  };
  const changeStudentPassword = (event) => {
    updateStudentFormData({ ...studentFormData, password: event.target.value });
  };

  const changeTeacherEmail = (event) => {
    updateTeacherFormData({ ...teacherFormData, email: event.target.value });
  };

  const changeTeacherPassword = (event) => {
    updateTeacherFormData({ ...teacherFormData, password: event.target.value });
  };

  return (
    <div className={isOpen ? "outer show" : "outer hide"}>
      <span className="x" onClick={closeModal}>
        X
      </span>

      <div className="container">
        <div>
          <img className="students" src={students} alt="students" />
          <p className="LoginForm">Students</p>
          <input
            className="Email"
            placeholder="Email"
            value={studentFormData.email}
            onChange={changeStudentEmail}
          ></input>
          <br />

          <input
            className="Password"
            placeholder="Password"
            value={studentFormData.password}
            onChange={changeStudentPassword}
          ></input>
          <br />

          <button onClick={callStudentLoginAPI} className="Login">
            LOG IN
          </button>
        </div>

        <img className="verticalline" src={verticalline} alt="verticalline" />

        <div>
          <img className="teachers" src={teacher} alt="teachers" />

          <p className="LoginForm">Teachers</p>

          <input
            className="Email"
            placeholder="Email"
            value={teacherFormData.email}
            onChange={changeTeacherEmail}
          ></input>
          <br />

          <input
            className="Password"
            placeholder="Password"
            value={teacherFormData.password}
            onChange={changeTeacherPassword}
          ></input>
          <br />

          <button onClick={callTeacherLoginAPI} className="Login">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
