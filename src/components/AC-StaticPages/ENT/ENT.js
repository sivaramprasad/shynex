import React from 'react'
import "./ENT.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import courseBanner from "../../../assets/img/banners/about-us.webp";
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



function DermatologyAndCosmetology(props) {
    return (
        <>
            <Helmet>
                <title>Shynex Clinic ENT Hyderabad | Advanced Treatment for ENT Disorders</title>
                <meta name="description" content="Shynex Clinic's ENT department provides expert diagnosis and treatment for all ENT conditions. Combining modern medicine with patient-centered care. Book Appointment" />
                {/* <meta name="keywords" content="Dermatology services, Cosmetology services, acne treatment, skin rejuvenation, hair loss treatment, laser hair removal, anti-aging solutions, Shynex Poly Clinic" /> */}
                <link rel="canonical" href="https://www.shynex.in/ent/" />
            </Helmet>
            <div className='courseBanner'><img alt="Banner" title='Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>ENT</h1>
            </div>
            
            
            <div className='containerMain'>
                <div className='Dermatology'> 
                <p>At Shynex Clinic, our ENT department is dedicated to providing top-notch care for all ear, nose, and throat-related issues. Our team of highly skilled and experienced doctors utilizes advanced diagnostic tools and techniques to accurately identify the root causes of ENT problems. Whether you're dealing with chronic ear infections, sinus issues, or throat disorders, our specialists are committed to delivering personalized treatment plans that ensure the best possible outcomes for our patients.
</p>
                <p>We pride ourselves on offering comprehensive care that covers a wide range of ENT conditions. From minor concerns to more complex issues, our doctors approach each case with the utmost precision and expertise. At Shynex Clinic, we understand the impact that ENT problems can have on your daily life, and we're here to help you regain your health and well-being with compassionate and effective treatment options.</p>

               
                </div>

            
                
                
            </div>
            
            


            <HomeContent />
        </>
    )
}


export default DermatologyAndCosmetology;

