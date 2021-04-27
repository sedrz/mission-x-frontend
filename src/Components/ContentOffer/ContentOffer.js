import React from "react";
import "./style.css";

function ContentOffer() {
  return (
    <div class="offer_container">
      <div class="offer_subcon">
        <div class="offer_wrapper">
          <div class="box1">
            <h2>What we offer</h2>
            <p>
              The creative Problem Solving programe is series of digital
              creation projects aimed to encuurage self motivation and student
              agency, designed by New Zealand leading IT industry experts and
              schools
            </p>
          </div>

          <div class="box2">
            <img
              src={process.env.PUBLIC_URL + "assets/img/lion.png"}
              alt="lion"
            />
          </div>

          <div class="box3">
            <h3>What will students create?</h3>
            <div className="img_offer">
              <img
                src={process.env.PUBLIC_URL + "assets/img/animation.png"}
                alt="animation"
              />
              <img
                src={process.env.PUBLIC_URL + "assets/img/game.png"}
                alt="game"
              />
              <img
                src={process.env.PUBLIC_URL + "assets/img/chatbot.png"}
                alt="chatbot"
              />
              <img
                src={process.env.PUBLIC_URL + "assets/img/augmented.png"}
                alt="augmented"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentOffer;
