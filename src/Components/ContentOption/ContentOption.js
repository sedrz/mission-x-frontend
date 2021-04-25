import React from "react";

import "./style.css";

function ContentOption() {
  return (
    <div class="contentb_section_area">
      <div class="contentb_container">
        <div class="contentb_container_text">
          <h2>
            Teaching kids programing and digital skills is MORE than just
            writing code.
          </h2>
          <div class="sectionb_area_grid">
            <div class="sectionb_grid_item">
              <img src={process.env.PUBLIC_URL + 'assets/img/creative.png'} alt="creative" />
            </div>
            <div class="sectionb_grid_item">
              <img src={process.env.PUBLIC_URL + 'assets/img/thinking.png'} alt="thinking" />
            </div>
            <div class="sectionb_grid_item">
              <img src={process.env.PUBLIC_URL + 'assets/img/communication.png'} alt="communication" />
            </div>
            <div class="sectionb_grid_item">
              <img src={process.env.PUBLIC_URL + 'assets/img/tech.png'} alt="tech" />
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
  );
}

export default ContentOption;
