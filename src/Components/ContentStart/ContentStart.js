import React from 'react'
import "./style.css"

function ContentStart() {
    return (
        
        <div class="contentstart_container">
            <div class="contentstart_subcon">
            <div class="contentstart_wrapper">
             <div class="contentstart_box1">
             <img src={process.env.PUBLIC_URL + 'assets/img/student.png'} alt="student" />

             </div>

             <div class="contentstart_box2">
             <p className="starttext1strow">What are you waiting for?</p>
             <p className="starttext2ndrow">Start teaching Digital Technologies today.</p>
             <p>If you need more information, we are happy to answer any questions you may have</p>

             </div>

             <div class="contentstart_box3">
             <a href="a" className="contentstart-btn">
              ENQUIRE NOW
            </a>
            <a href="a" className="contentstart-btn2">
              SIGN UP
            </a>
                    </div>
        </div>
        </div>
       
       
        </div>
    )
}

export default ContentStart
