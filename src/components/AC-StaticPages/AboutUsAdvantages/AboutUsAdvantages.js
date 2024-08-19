import React from 'react'
import "./AboutUsAdvantages.css";
import HomeContent from "../../../content/HomeContent";
import Ourawards from "../../../content/ourawards";

import courseBanner from "../../../assets/img/banners/about-us.png";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/test/howstrt.webp";
import st1 from "../../../assets/img/test/sty1.gif";
import st2 from "../../../assets/img/test/sty2.gif";
import cncpt from "../../../assets/img/banners/Concept.webp"

import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function AboutUsadvantages (props) {
    return (
        <>

            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            
            <div className="sec-title">
                <h2 style={{ margin: "0px", fontSize:"50px", fontWeight:"900"}}>Shynex Advantage  </h2>
            </div>
            <Grid container spacing={1} className="main-img" style={{boxShadow: "none"}}>
                
                <Grid xs={12} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>      <div className="inner-column">
                        <div className="sec-title">
                            <h1 className='tagline' style={{ color: "#000"}}>Why Shynex is the Best Dermatology Clinic for You d</h1>
                        </div>
                        <div>                        <div className="text">1.<span style={{fontWeight:"700"}}>USFDA Approved Technol:</span> Experience the future of skin and hair care with Shynex. Our advanced Morpheus 8 machine offers unparalleled skin rejuvenation, while the Soprano Titanium ensures the most effective laser hair removal available today.</div>

                        <div className="text">2.<span style={{fontWeight:"700"}}>Global Standards in Medical Treatment:</span>At Shynex, we bring world-class medical care to Hyderabad. Our treatments adhere to global standards, ensuring you receive the highest quality healthcare without having to travel abroad.

</div>
                        <div className="text">3.<span style={{fontWeight:"700"}}>Community and Care Beyond the Clinic:</span> Our commitment to patients extends beyond our clinic doors. We provide ongoing support and advice to ensure you feel cared for and connected long after your visit.</div>
                        <div className="text">4.<span style={{fontWeight:"700"}}>Expert and Compassionate Care:</span>	 The experienced medical team of cosmetology and dermatology doctors at Shynex blends professional expertise with a compassionate approach. We strive to make every client's experience comfortable, empathetic, and effective.

</div>
                        <div className="text">5.<span style={{fontWeight:"700"}}>Holistic Skin and Hair Health:</span> 	 We take a holistic approach to skin and hair care, addressing your overall well-being. Our treatments aim for lasting health and beauty, not just surface-level improvements.</div>
                        <div className="text">6.<span style={{fontWeight:"700"}}>Educational Empowerment:</span> 	 Informed decisions lead to better health outcomes. Our expert medical professionals provide valuable insights and education, empowering you to understand and choose your treatments confidently.</div>
                        <div className="text">7.<span style={{fontWeight:"700"}}>Innovative Dermatology and Cosmetology Solutions:</span>  We're dedicated to staying ahead with the latest advancements in skin and hair care. Our commitment to research and innovation ensures we offer the most current, effective, and safe treatments available.</div>
                        <div className="text">8.<span style={{fontWeight:"700"}}>Privacy and Comfort in Care:</span> Your privacy and comfort are our top priorities. Shynex Poly Clinic provides a confidential and comforting environment dedicated to your overall wellness needs.</div>
                        <div className="text">9.<span style={{fontWeight:"700"}}>Customized Dermatological and Trichological Treatments:</span> 	 We understand that each individual is unique. Our customized skin and hair treatments are meticulously crafted to suit your specific needs, ensuring personalized care and attention.</div>
                        <div className="text">10.<span style={{fontWeight:"700"}}>State-of-the-Art Facilities:</span> 	 Shynex is equipped with state-of-the-art facilities to provide you with the best possible care in a modern and comfortable setting.</div>
                        <div className="text">11.<span style={{fontWeight:"700"}}>	Comprehensive Diagnosis:</span> We prioritize thorough diagnosis to understand your skin and hair concerns fully. This allows us to create precise treatment plans tailored to your condition.</div>
                        <div className="text">12.<span style={{fontWeight:"700"}}>Affordable Skin and Hair Treatment Options:</span> We believe that everyone deserves access to high-quality skin and hair care. We offer affordable treatment options without compromising on the standard of care or the effectiveness of our treatments.</div>
                        <div className="text">13.<span style={{fontWeight:"700"}}>Patient-Centric Approach:</span> 
 Your satisfaction and well-being are at the heart of everything we do. Our patient-centric approach ensures that you receive the highest level of care and attention at every visit.
</div>
                        <div className="text">14.<span style={{fontWeight:"700"}}>Transparent Communication:</span>  We believe in open and transparent communication with our patients. You'll always be informed about your treatment options, progress, and expected outcomes.</div>
                        <div className="text">15.<span style={{fontWeight:"700"}}>Continual Improvement:</span>  We continuously evaluate and improve our services to meet the evolving needs of our patients and incorporate the latest advancements in dermatology and cosmetology.

</div>
<div className="text">16.<span style={{fontWeight:"700"}}>Long-Term Relationships:</span> At Shynex, we aim to build long-term relationships with our patients based on trust, respect, and exceptional care. Your journey to healthy and beautiful skin and hair starts and continues with us.

</div>
                    </div>
                    </div>
</Item>
                </Grid>


            </Grid>
       
            <HomeContent />
        </>
    )
}


export default AboutUsadvantages;

