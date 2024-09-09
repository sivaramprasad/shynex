import React from 'react'
import "./CrustalPRO.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";

import courseBanner from "../../../assets/img/banners/about-us.webp";

import { Helmet } from "react-helmet";



function CristalPro(props) {
    return (
        <>
            <Helmet>
                <title>CRISTAL PRO - Effective Non-Invasive Fat Reduction at Shynex</title>
                <meta name="description" content="Say goodbye to stubborn fat with CRISTAL PRO at Shynex. Enjoy non-invasive body contouring and achieve a sculpted physique with minimal discomfort. Book Appointment" />
                <meta name="keywords" content="CRISTAL PRO, non-invasive fat reduction, body contouring, cryolipolysis, fat freezing, sculpted physique, Shynex Poly Clinic" />
                <link rel="canonical" href="https://www.backstagepass.co.in/cristal-pro/" />
            </Helmet>
            <div className='courseBanner'><img alt="Banner" title='Banner' src={courseBanner} /></div>
            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>CRISTAL PRO</h1>
            </div>
            <div className='containerMain'>
                <div className='Dermatology'>
                    <p>Now you can positively say goodbye to stubborn fat and hello to a more sculpted, and confident you. How? At Shynex, we have brought you an innovative USFDA approved technology, Cristal PRO - Medical Cryolipolysis. </p>
                    <p>Cristal PRO represents the forefront of cutting-edge technology in non-invasive body contouring. You can now experience remarkable body transformation with little discomfort and recovery time. With the power of Cristal PRO, we are setting a new standard in sculpting your body effortlessly and with utmost safety.</p>
                    <h2>What is Cristal PRO?</h2>

                    <p>Cristal PRO is a pioneering medical device utilizing cryolipolysis technology to target and eliminate stubborn fat cells without the need for surgery or invasive procedures. It is designed to safely and effectively contour the body by freezing and destroying fat cells, leaving surrounding tissue unharmed.</p>
                    <h2>Benefits of Cristal PRO:</h2>









                    <p><b>1. Non-Invasive:</b> Bid farewell to surgical procedures and hello to non-invasive fat reduction. With Cristal PRO, there's no need for incisions, anaesthesia, or lengthy recovery times.</p>
                    <p><b>2. Effective Results:</b> Experience noticeable reductions in fat bulges and a more sculpted physique after just a few sessions. Cristal PRO delivers consistent, reliable results that you can see and feel.</p>
                    <p><b>3. Minimal Discomfort:</b> Unlike traditional liposuction or other invasive procedures, Cristal PRO is virtually painless. Most clients report only mild sensations of cold and pressure during treatment.</p>
                    <p><b>4. No Recovery Period:</b> With Cristal PRO, there's no need to put your life on hold. Resume your daily activities immediately after each session without any downtime or restrictions.</p>
                    <p><b>5. Customizable Treatment:</b> Whether you're targeting love handles, belly fat, thighs, or arms, Cristal PRO offers customizable applicators to address specific areas of concern for each individual.</p>



                    <h2>How Does Cristal PRO Work?</h2>

                    <p>Cristal PRO harnesses the power of cryolipolysis, a proven technology that selectively targets and freezes fat cells while leaving surrounding tissue unharmed. During treatment, the targeted area is gently vacuumed into the Cristal PRO applicator, where controlled cooling is applied. This cooling process crystallizes the fat cells, triggering a natural cell death known as apoptosis. Over time, the body naturally eliminates these damaged fat cells, revealing a more contoured body shape.</p>

                    <h2>Areas Cristal PRO Targets:</h2>



                    <p><b>•	Abdomen</b> </p>

                    <p><b>•	Flanks (Love Handles)</b> </p>

                    <p><b>•	Thighs</b></p>

                    <p><b>•	Buttocks</b></p>
                    <p><b>•	Arms</b></p>
                    <p><b>•	Double Chin</b></p>
                    <p><b>•	Bra Fat</b></p>
                    <p><b>•	Back Fat</b></p>
                    <h2>Experience the Effectiveness of Cristal PRO:</h2>


                    <p>Join the countless individuals who have achieved their body goals at Shynex with Cristal PRO. Our clients rave about the transformative results and the confidence boost that comes with a more sculpted physique. Let your stubborn fat melt away and watch yourself become slimmer every day!</p>

                    <p style={{ textAlign: "center", fontSize: "27px", fontWeight: "700" }}><b><Link to={"/contactus/"}>Contact us today</Link></b> to schedule your consultation and take the first step towards a happier, healthier you.</p>




                </div>



            </div>


            <HomeContent />
        </>
    )
}


export default CristalPro;

