import React from 'react'
import "./Content.css"
import lion from "../assets/img/lion.png"
import bear from "../assets/img/bear.jpg"
import staronly from "../assets/img/staronly.png"
import animation from "../assets/img/animation.png"
import game from "../assets/img/game.png"
import chatbot from "../assets/img/chatbot.png"
import augmented from "../assets/img/augmented.png"

function content() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <h2>What we offer</h2>
                    <p>The creative Problem Solving programe is series of digital creation projects aimed to encuurage self motivation and student agency, designed by New Zealand leading IT industry experts and schools</p>
                
                    <div class="container_grid">
                    <h3>What will students create?</h3>
                     <div class="section_area_grid">
                    <div class="section_grid_item">
                        <img src={animation} alt="animation" />
                    </div>
                    <div class="section_grid_item">
                        <img src={game} alt="game" />
                    </div>
                    <div class="section_grid_item">
                        <img src={chatbot} alt="chatbot" />
                    </div>
                    <div class="section_grid_item">
                        <img src={augmented} alt="augmented" />
                    </div>
                    </div>
                </div>
                <div className="content-r">
                <img src={lion} alt="lion" />
                </div>   
                </div> 
            </section>

                <section className="content-con2">
                    <div>
                        <img src={staronly} alt="staronly"/>
                        <h3>Enhance key competencies</h3>
                        <p>The programe enhances capabilities of students in 5 Key Competencies identified in New Zealand Curriculum.</p>
                        </div>
                        
                    <div>
                    <img src={staronly} alt="staronly"/>
                        <h3>SELF-MANAGEMENT</h3>
                        <p>Projects and chalenges are designed to motivate student to explore and experiment with self-motivation</p>
                    </div>
                </section>

                <section className="content-con">
                <div className="content-r">
                     <img src={bear} alt="bear" />
                </div>
                <div className="content-l">
                    <h2>What are you waiting for</h2>
                    <p>The creative Problem Solving programe is series of digital creation projects aimed to encuurage self motivation and student agency, designed by New Zealand leading IT industry experts and schools</p>
                </div>
   
                </section>
        </div>
    )
}

export default content
