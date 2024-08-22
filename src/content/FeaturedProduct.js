import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import a1 from "../assets/img/home/Replenish.webp";
import a2 from "../assets/img/home/revive.webp";
import a3 from "../assets/img/home/revitalise.webp";
import a4 from "../assets/img/home/remedy.webp";
import a5 from "../assets/img/home/home2-2.webp";
import a6 from "../assets/img/home/home3-2.webp";
import "./FeaturedProduct.css"


function HomeContent() {

  
  return (
    <>
      <div style={{margin: "0 auto", marginTop: "30px", width: "95%"}}>
<section1>
  <h2>Best Skin and Hair Clinic in Hyderabad</h2>
  <h4>Our Treatments Section</h4>
  <div className="container1">
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
            <img src={a1} alt="Trust & Co." />
          </div>
          <div className="icon1">
            <Link to={"/general-dermatology-services/"} className="iconBox1"> <span className="material-symbols-outlined1">
                <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3>General Dermatology Services</h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
            <img src={a2} alt="Tonic" />
          </div>
          <div className="icon1">
            <Link to={"/cosmetic-dermatology-treatments/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3>Cosmetic Dermatology</h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
            <img src={a3} alt="Shower Gel" />
          </div>
          <div className="icon1">
            <Link to={"/acne-treatments/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3>Acne Treatments</h3>
      </div>
    </div>
    
  </div>
  <div className="container1">
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
            <img src={a4} alt="Trust & Co." />
          </div>
          <div className="icon1">
            <Link to={"/skin-rejuvenation-youthful-skin/"} className="iconBox1"> <span className="material-symbols-outlined1">
                <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3>Skin Rejuvenation</h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
            <img src={a5} alt="Tonic" />
          </div>
          <div className="icon1">
            <Link to={"/medical-aesthetics-enhance-appearance/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3>Hair and Scalp Treatments</h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
            <img src={a6} alt="Shower Gel" />
          </div>
          <div className="icon1">
            <Link to={"/medical-aesthetics-enhance-appearance/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3>Medical Aesthetics</h3>
      </div>
    </div>
    
  </div>
</section1>
</div>
    </>
  );
}

export default HomeContent;
