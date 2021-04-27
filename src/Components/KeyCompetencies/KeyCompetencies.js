import React from "react";

import "./style.css";
function KeyCompetencies() {
  return (
    <div class="concomp_container">
      <div class="concomp_subcon">
        <h3>Enhance key competencies</h3>
        <p className="text2ndrow">
          The programe enhances capabilities of students in 5 Key Competencies
          identified in New Zealand Curriculum.
        </p>

        <div class="concomp_grid_wrapper">
          <div class="starimg">
            <img src={process.env.PUBLIC_URL + 'assets/img/star.png'} alt="star" />
          </div>

          <div class="concomp_text">
            <h4>THINKING</h4>
            <p>
              In particular the programe focused on problem solving, design
              thinking and computational thinking
            </p>
          </div>
          <div class="starimg">
            <img src={process.env.PUBLIC_URL + 'assets/img/star.png'} alt="star" />
          </div>

          <div class="concomp_text">
            <h4>DISCRERNING CODES</h4>
            <p>
              Analysing language, symbols, and text in order to understand and
              make sense of the codes as which knowledge is expressed.
            </p>
          </div>

          <div class="starimg">
            <img src={process.env.PUBLIC_URL + 'assets/img/star.png'} alt="star" />
          </div>

          <div class="concomp_text">
            <h4>SELF-MANAGEMENT</h4>
            <p>
              Projects and chalenges are designed to motivate student to explore
              and experiment with self-motivation
            </p>
          </div>

          <div class="starimg">
            <img src={process.env.PUBLIC_URL + 'assets/img/star.png'} alt="star" />
          </div>

          <div class="concomp_text">
            <h4>RELATIONSHIPS WITH PEERS</h4>
            <p>
              The programe is designed with unpluged sessions where students
              interact in a range of different sittuations including things like
              being able to listen well, organise different points of view, and
              share ideas
            </p>
          </div>

          <div class="starimg">
            <img src={process.env.PUBLIC_URL + 'assets/img/star.png'} alt="star" />
          </div>

          <div class="concomp_text">
            <h4>PARTICIPATION AND COLLABORATION</h4>
            <p>
              The programe encourages students to be in communicates such as
              family, whanau, and contribute and make connections with other
              people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyCompetencies;
