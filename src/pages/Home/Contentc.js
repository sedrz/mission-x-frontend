import React from 'react'
import "./Contentc.css"
import star from "../assets/img/star.png"

function contentc() {
    return (
        <div class="contentc_area">
        <div class="contentc_container">
        <div class="container_text">
        <h3>Enhance key competencies</h3>
        <p>The programe enhances capabilities of students in 5 Key Competencies identified in New Zealand Curriculum.</p>
            <div class="contentc_area_grid">
                <div class="contentc_grid_item">
                    <img src={star} alt="star" />
                </div>
                <div class="contentc_grid_text">
                    <h4>THINKING</h4>
                    <p>in particular the programe focused on problem solving, design thinking and computational thinking</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default contentc
