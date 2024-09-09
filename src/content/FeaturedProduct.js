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
          <Link to={"/general-dermatology-services/"}> <img src={a1} alt="Trust & Co." /></Link>
          </div>
          <div className="icon1">
            <Link to={"/general-dermatology-services/"} className="iconBox1"> <span className="material-symbols-outlined1">
                <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3><Link to={"/general-dermatology-services/"}>General Dermatology Services</Link></h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
          <Link to={"/cosmetic-dermatology-treatments/"}> <img src={a2} alt="Tonic" /></Link>
          </div>
          <div className="icon1">
            <Link to={"/cosmetic-dermatology-treatments/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3><Link to={"/cosmetic-dermatology-treatments/"}>Cosmetic Dermatology</Link></h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
          <Link to={"/acne-treatments/"}> <img src={a3} alt="Shower Gel" /></Link>
          </div>
          <div className="icon1">
            <Link to={"/acne-treatments/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3><Link to={"/acne-treatments/"}>Acne Treatments</Link></h3>
      </div>
    </div>
    
  </div>
  <div className="container1">
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
          <Link to={"/skin-rejuvenation-youthful-skin/"}><img src={a4} alt="Trust & Co." /></Link>
          </div>
          <div className="icon1">
            <Link to={"/skin-rejuvenation-youthful-skin/"} className="iconBox1"> <span className="material-symbols-outlined1">
                <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3><Link to={"/skin-rejuvenation-youthful-skin/"}>Skin Rejuvenation</Link></h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
          <Link to={"/medical-aesthetics-enhance-appearance/"}><img src={a5} alt="Tonic" /></Link>
          </div>
          <div className="icon1">
            <Link to={"/medical-aesthetics-enhance-appearance/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3><Link to={"/medical-aesthetics-enhance-appearance/"}>Hair and Scalp Treatments</Link></h3>
      </div>
    </div>
    <div className="card1">
      <div className="card-inner1" >
        <div className="box1">
          <div className="imgBox1">
          <Link to={"/medical-aesthetics-enhance-appearance/"}><img src={a6} alt="Shower Gel" /></Link>
          </div>
          <div className="icon1">
            <Link to={"/medical-aesthetics-enhance-appearance/"} className="iconBox1"> <span className="material-symbols-outlined1">
            <FiArrowUpRight />
              </span></Link>
          </div>
        </div>
      </div>
      <div className="content1">
        <h3><Link to={"/medical-aesthetics-enhance-appearance/"}>Medical Aesthetics</Link></h3>
      </div>
    </div>
    
  </div>
</section1>
</div>
    </>
  );
}

export default HomeContent;
