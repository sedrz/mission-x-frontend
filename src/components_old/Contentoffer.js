import React from 'react'
import "./Contentoffer.css"
import lion from "../assets/img/lion.png"
import animation from "../assets/img/animation.png"
import game from "../assets/img/game.png"
import chatbot from "../assets/img/chatbot.png"
import augmented from "../assets/img/augmented.png"

function Contentoffer() {
    return (

        <div class="offer_container">
            <div class="offer_subcon">
            <div class="offer_wrapper">
             <div class="box1">
                <h2>What we offer</h2>
                    <p>The creative Problem Solving programe is series of digital creation projects aimed to encuurage self motivation and student agency, designed by New Zealand leading IT industry experts and schools</p>
                

             </div>

             <div class="box2">
             <img src={lion} alt="lion" />

             </div>

             <div class="box3">
                    <h3>What will students create?</h3>
                    <div className="img_offer">
                        <img src={animation} alt="animation" />
                        <img src={game} alt="game" />
                        <img src={chatbot} alt="chatbot" />
                        <img src={augmented} alt="augmented" />
                    </div>
                    </div>
        </div>
        </div>
       
       
        </div>
    )
}

export default Contentoffer
