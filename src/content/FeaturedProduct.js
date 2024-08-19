import React from 'react';
import c1 from "../assets/img/c1.png";
import c2 from "../assets/img/c2.png";
import c3 from "../assets/img/c3.png";
import c4 from "../assets/img/c4.png";
import f1 from "../assets/img/c-logo.svg";
import fimg1 from "../assets/img/Concept_art_school.webp";
import f2 from "../assets/img/g-logo.svg";
import fimg2 from "../assets/img/Game-Art-School_header2.6.webp";
import f3 from "../assets/img/v-logo.svg";
import fimg3 from "../assets/img/Virtual_production_essentials2.webp";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


import "./FeaturedProduct.css"


function HomeContent() {

  const SLIDE_COUNT = 10
  return (
    <>
      <div style={{margin: "0 auto", marginTop: "-50px", width: "95%"}}>
<section1>
  <h2>Best Skin and Hair Clinic in Hyderabad</h2>
  <h4>Our Treatments Section</h4>
  <div className="container">
    <div className="card">
      <div className="card-inner" >
        <div className="box">
          <div className="imgBox">
            <img src="https://avahskin.com/wp-content/uploads/2024/07/Replenish.webp" alt="Trust & Co." />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                <FiArrowUpRight />
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>General Dermatology Services</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
      </div>
    </div>
    <div className="card">
      <div className="card-inner" >
        <div className="box">
          <div className="imgBox">
            <img src="https://avahskin.com/wp-content/uploads/2024/07/revive.webp" alt="Tonic" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
            <FiArrowUpRight />
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Cosmetic Dermatology</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
      </div>
    </div>
    <div className="card">
      <div className="card-inner" >
        <div className="box">
          <div className="imgBox">
            <img src="https://avahskin.com/wp-content/uploads/2024/07/revitalise.webp" alt="Shower Gel" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
            <FiArrowUpRight />
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Acne Treatments</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
      </div>
    </div>
    
  </div>
  <div className="container">
    <div className="card">
      <div className="card-inner" >
        <div className="box">
          <div className="imgBox">
            <img src="https://avahskin.com/wp-content/uploads/2024/07/remedy.webp" alt="Trust & Co." />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                <FiArrowUpRight />
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Skin Rejuvenation</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
      </div>
    </div>
    <div className="card">
      <div className="card-inner" >
        <div className="box">
          <div className="imgBox">
            <img src="https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tonic" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
            <FiArrowUpRight />
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Hair and Scalp Treatments</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
      </div>
    </div>
    <div className="card">
      <div className="card-inner" >
        <div className="box">
          <div className="imgBox">
            <img src="https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shower Gel" />
          </div>
          <div className="icon">
            <a href="#" className="iconBox"> <span className="material-symbols-outlined">
            <FiArrowUpRight />
              </span></a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>Medical Aesthetics</h3>
        <p>Fill out the form and the algorithm will offer the right team of experts</p>
      </div>
    </div>
    
  </div>
</section1>
</div>
    </>
  );
}

export default HomeContent;
