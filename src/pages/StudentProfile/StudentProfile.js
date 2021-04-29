import React from 'react'
import './StudentProfile.css';

import Aiden from "../../assets/img/User/Student-img/Aiden.png"

import Rawiri from "../../assets/img/User/Student-img/Rawiri.png"

function StudentProfile() {
    return (
        <div class="student_container">
            
            <div class="student_subcont">
            <div class="student_subcont_wrapper">
                <div class="box_student_left">
                        <img src={Rawiri} alt="Rawiri" />
                        <button class = "btn_student1">EDIT PROFILE</button>
                        <button class = "btn_student1">  CHANGE PHOTO </button>
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
                              <p>Link from DB</p>
                              <p>Link from DB</p>
                              <p>Link from DB</p>
                              <p>Link from DB</p>
                              <p>Link from DB</p>
                              <p>Link from DB</p>
                     </div>

                </div>
            </div>
            <button class = "btn-pink"><p>BACK TO PROJECT</p></button>
            </div>
            
        </div>
    )
}

export default StudentProfile;


