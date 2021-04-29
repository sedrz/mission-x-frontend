import React, { useState, useEffect } from "react";

import "./StudentProfile.css";

import Rawiri from "../../assets/img/User/Student-img/Rawiri.png";

function StudentProfile() {
  const [profile, setProfile] = useState({});

  const callProfileAPI = () => {
    const profileAPIURL = `http://localhost:4000/api/user/profile/11`;
    fetch(profileAPIURL)
      .then((res) => res.json())
      .then((profile) => {
        setProfile(profile[0]);
      });
  };

  // every time the component is mounted/unmounted, call the arrow fn
  useEffect(() => {
    callProfileAPI();
  }, []);

  return (
    <div class="student_container">
      <div class="student_subcont">
        <div class="student_subcont_wrapper">
          <div class="box_student_left">
            <img src={Rawiri} alt="Rawiri" />
            <button class="btn_student1">EDIT PROFILE</button>
            <button class="btn_student1"> CHANGE PHOTO </button>
          </div>
          <div class="nested_student_right">
            <div class="box_r1">
              <h2>Rawiri Fletcher</h2>
            </div>
            <div class="box_r2">
              <p>School</p>
              <p>Teacher</p>
              <p>Course</p>
              <p>Date of Birth</p>
              <p>Contact No</p>
              <p>Email Address</p>
            </div>
            <div class="box_r3">
              <p>{profile?.School}</p>
              <p>{profile?.TeacherID}</p>
              <p>{profile?.Course}</p>
              <p>{profile?.DateOfBirth}</p>
              <p>{profile?.ContactNumber}</p>
              <p>{profile?.Email}</p>
            </div>
          </div>
        </div>
        <button class="btn-pink">
          <p>BACK TO PROJECT</p>
        </button>
      </div>
    </div>
  );
}

export default StudentProfile;
