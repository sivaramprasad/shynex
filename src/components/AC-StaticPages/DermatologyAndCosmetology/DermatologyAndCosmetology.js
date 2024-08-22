import React from 'react'
import "./DermatologyAndCosmetology.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import courseBanner from "../../../assets/img/banners/about-us.png";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/scalp-hair.jpg";
import hwst1 from "../../../assets/img/FBSE-Graphic.jpg";
import cncpt from "../../../assets/img/Dermatosurgery.jpg"

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
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1598300188904-6287d52746ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2VuZXJhbCUyMERlcm1hdG9sb2d5JTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D)`, backgroundPosition: "center"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/general-dermatology-services/"}>General Dermatology Services</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://plus.unsplash.com/premium_photo-1719617672652-0af3b11b6ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29zbWV0aWMlMjBEZXJtYXRvbG9neSUyMHRyZWF0bWVudHN8ZW58MHx8MHx8fDA%3D)`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/cosmetic-dermatology-treatments/"}>Cosmetic Dermatology treatments</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1579221369575-afa08fa04246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fEFjbmUlMjBUcmVhdG1lbnRzfGVufDB8fDB8fHww)`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/acne-treatments/"}>Acne Treatments</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2tpbiUyMFJlanV2ZW5hdGlvbnxlbnwwfHwwfHx8MA%3D%3D)`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/skin-rejuvenation-youthful-skin/"}>Skin Rejuvenation</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>
                    <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGFpciUyMGFuZCUyMFNjYWxwJTIwVHJlYXRtZW50fGVufDB8fDB8fHww)`, backgroundPosition: "right"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/hair-scalp-treatments/"}>Hair and Scalp Treatments</Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1514416432279-50fac261c7dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVkaWNhbCUyMEFlc3RoZXRpY3N8ZW58MHx8MHx8fDA%3D)`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/medical-aesthetics-enhance-appearance/"}>Medical Aesthetics </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1516220362602-dba5272034e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vbGUlMjBhbmQlMjBTa2luJTIwQ2FuY2VyJTIwQ2hlY2tzfGVufDB8fDB8fHww)`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/mole-skin-cancer-checks/"}>Mole and Skin Cancer Checks </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1587010579578-ad81d1035a5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGFzZXIlMjBUcmVhdG1lbnRzfGVufDB8fDB8fHww)`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/laser-treatments/"}>Laser Treatments </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>
                    <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1519668752166-ebdbfe986afd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Qm9keSUyMENvbnRvdXJpbmd8ZW58MHx8MHx8fDA%3D)`, backgroundPosition: "right"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/body-contouring/"}>Body Contouring </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://plus.unsplash.com/premium_photo-1682094372838-7b2a103e1116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fE1lZGljYWwlMjBmYWNpYWxzfGVufDB8fDB8fHww)`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook"><Link to={"/medical-facials-professional-skin-care/"}>Medical facials </Link></div>
                                    
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(https://images.unsplash.com/photo-1534768654272-e97681c3a2c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW50aSUyMEFnZWluZyUyMFRyZWF0bWVudHN8ZW58MHx8MHx8fDA%3D)`, backgroundPosition: "center"}}>
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

