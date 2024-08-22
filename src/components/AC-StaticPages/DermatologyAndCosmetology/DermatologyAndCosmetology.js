import React from 'react'
import "./DermatologyAndCosmetology.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import courseBanner from "../../../assets/img/banners/about-us.webp";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/scalp-hair.webp";
import hwst1 from "../../../assets/img/FBSE-Graphic.webp";
import cncpt from "../../../assets/img/Dermatosurgery.webp"
import photo2 from "../../../assets/img/home/derma/photo-2.webp"
import photo1 from "../../../assets/img/home/derma/premium_photo1.webp"
import photo3 from "../../../assets/img/home/derma/photo-3.webp"
import photo4 from "../../../assets/img/home/derma/photo-1.webp"
import photo5 from "../../../assets/img/home/derma/photo-5.webp"
import photo6 from "../../../assets/img/home/derma/photo-6.webp"
import photo7 from "../../../assets/img/home/derma/photo-7.webp"
import photo8 from "../../../assets/img/home/derma/photo-8.webp"
import photo9 from "../../../assets/img/home/derma/photo-9.webp"
import photo10 from "../../../assets/img/home/derma/premium_photo-10.webp"
import photo11 from "../../../assets/img/home/derma/photo-10.webp"

import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function DermatologyAndCosmetology(props) {
    return (
        <>
            <Helmet>
                <title>Best Dermatology & Cosmetology Services at Shynex Clinic</title>
                <meta name="description" content="Get expert dermatology and cosmetology care at Shynex Clinic, Hyderabad. We offer personalized treatments for acne, hair loss, anti-aging, and skin rejuvenation" />
                <meta name="keywords" content="Dermatology services, Cosmetology services, acne treatment, skin rejuvenation, hair loss treatment, laser hair removal, anti-aging solutions, Shynex Poly Clinic" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Dermatology And Cosmetology</h1>
            </div>
            
            
            <div className='containerMain'>
                <div className='Dermatology'> 
                <p>At Shynex Poly Clinic, we provide a comprehensive range of dermatology and cosmetology services to meet all your skin and hair care needs. Our skilled dermatologists and cosmetologists use the latest technology and evidence-based practices to deliver personalized treatments that address your unique concerns. Whether you’re dealing with acne, sagging skin, hair loss, psoriasis, eczema, or seeking to enhance your appearance with advanced cosmetic procedures, we focus on improving your skin health and boosting your confidence.</p>
                <p>Our clinic is equipped with state-of-the-art technology and we offer treatments such as laser hair removal, anti-aging solutions, skin rejuvenation, and more. We prioritize your safety and satisfaction through a patient-centric approach. From your initial consultation to post-treatment care, our experts work closely with you to ensure a seamless and comfortable experience. At Shynex you can experience world-class dermatology and cosmetology care in a warm and welcoming environment.</p>

                <h2>Skin and Hair Treatments we offer:</h2>
                </div>

                <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{background: `url(${photo2})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/general-dermatology-services/"}>General Dermatology Services</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo1})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/cosmetic-dermatology-treatments/"}>Cosmetic Dermatology treatments</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo3})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/acne-treatments/"}>Acne Treatments</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo4})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/skin-rejuvenation-youthful-skin/"}>Skin Rejuvenation</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>
                    <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{background: `url(${photo5})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/hair-scalp-treatments/"}>Hair and Scalp Treatments</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo6})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/medical-aesthetics-enhance-appearance/"}>Medical Aesthetics </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo7})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/mole-skin-cancer-checks/"}>Mole and Skin Cancer Checks </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo8})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/laser-treatments/"}>Laser Treatments </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>
                    <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{background: `url(${photo9})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/body-contouring/"}>Body Contouring </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo10})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/medical-facials-professional-skin-care/"}>Medical facials </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${photo11})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/anti-aging-treatments/"}>Anti Ageing Treatments </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        
                    </div>
            </div>
            
            


            <HomeContent />
        </>
    )
}


export default DermatologyAndCosmetology;

