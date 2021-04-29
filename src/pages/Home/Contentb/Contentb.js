import React from 'react'
import "./Contentb.css"
import creative from "../../../assets/img/creative.png"
import thinking from "../../../assets/img/thinking.png"
import communication from "../../../assets/img/communication.png"
import tech from "../../../assets/img/tech.png"

function Contentb() {
    return (
        <div class="contentb_section_area">
            <div class="contentb_container">
            <div class="contentb_container_text">
            <h2>Teaching kids programing and digital skills is MORE than just writing code.</h2>
                <div class="sectionb_area_grid">
                    <div class="sectionb_grid_item">
                        <img src={creative} alt="creative" />
                    </div>
                    <div class="sectionb_grid_item">
                        <img src={thinking} alt="thinking" />
                    </div>
                    <div class="sectionb_grid_item">
                        <img src={communication} alt="communication" />
                    </div>
                    <div class="sectionb_grid_item">
                        <img src={tech} alt="tech" />
                    </div>
                </div>

                <h2>How our programe helps teachers and schools</h2>
                <a href="a" className="contentb-btn">
                    LEARNING PATHWAYS
                </a>
                <a href="a" className="contentb-btn">
                    DIGITAL TECHNOLOGIES
                </a>
                <a href="a" className="contentb-btn">
                    KEY COMPETENCIES
                </a>
                <a href="a" className="contentb-btn">
                    IR4.0
                </a>

            </div>
            </div>
            </div>
    
    )
}

export default Contentb
