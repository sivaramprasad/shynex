import React from 'react'
import "./Technology3.css";
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


function Technologys (props) {
    return (
        <>

            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            
            <div className="sec-title">
                <h2 style={{ margin: "0px", fontSize:"50px", fontWeight:"900"}}>Shynex Technology </h2>
            </div>
            <Grid container spacing={1} className="main-img" style={{boxShadow: "none"}}>
                
                <Grid xs={12} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>      <div className="inner-column">
                        
                        <div> 
<div className="sec-title">
                            <h1 className='tagline' style={{ color: "#000"}}>CRISTAL PRO </h1>
                        </div>
                        <div className="text">
                        Now you can positively say goodbye to stubborn fat and hello to a more sculpted, and confident you. How? At Shynex, we have brought you an innovative USFDA approved technology, Cristal PRO - Medical Cryolipolysis.</div>
                        <div className="text"> 
Cristal PRO represents the forefront of cutting-edge technology in non-invasive body contouring. You can now experience remarkable body transformation with little discomfort and recovery time. With the power of Cristal PRO, we are setting a new standard in sculpting your body effortlessly and with utmost safety.

</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>What is Cristal PRO? </h2>

<div className="text"> 
Cristal PRO represents the forefront of cutting-edge technology in non-invasive body contouring. You can now experience remarkable body transformation with little discomfort and recovery time. With the power of Cristal PRO, we are setting a new standard in sculpting your body effortlessly and with utmost safety.


</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Benefits of Cristal PRO:  </h2>

                   <ul style={{marginLeft:"20px"}}>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Non-Invasive:</span> Bid farewell to surgical procedures and hello to non-invasive fat reduction. With Cristal PRO, there's no need for incisions, anaesthesia, or lengthy recovery times.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Effective Results: </span>Experience noticeable reductions in fat bulges and a more sculpted physique after just a few sessions. Cristal PRO delivers consistent, reliable results that you can see and feel.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Minimal Discomfort:</span> Unlike traditional liposuction or other invasive procedures, Cristal PRO is virtually painless. Most clients report only mild sensations of cold and pressure during treatment.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     No Recovery Period:</span>With Cristal PRO, there's no need to put your life on hold. Resume your daily activities immediately after each session without any downtime or restrictions.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Customizable Treatment: </span>Whether you're targeting love handles, belly fat, thighs, or arms, Cristal PRO offers customizable applicators to address specific areas of concern for each individual.</div>
                     </li>
                  </ul>
                  <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>How Does Cristal PRO Work?</h2>

<div className="text"> 
Cristal PRO harnesses the power of cryolipolysis, a proven technology that selectively targets and freezes fat cells while leaving surrounding tissue unharmed. During treatment, the targeted area is gently vacuumed into the Cristal PRO applicator, where controlled cooling is applied. This cooling process crystallizes the fat cells, triggering a natural cell death known as apoptosis. Over time, the body naturally eliminates these damaged fat cells, revealing a more contoured body shape.
</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Areas Cristal PRO Targets:</h2>
<ul style={{marginLeft:"20px"}}>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Abdomen</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Flanks (Love Handles)</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Thighs</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Buttocks</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Arms</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Double Chin</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Bra Fat</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Back Fat</div>
                        </li>
                     </ul>
                     <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Areas Cristal PRO Targets:</h2>
                     <div className="text"> 
                     Join the countless individuals who have achieved their body goals at Shynex with Cristal PRO. Our clients rave about the transformative results and the confidence boost that comes with a more sculpted physique. Let your stubborn fat melt away and watch yourself become slimmer every day!
</div>
<div className="text"><span style={{fontWeight:"700"}}>
Contact us today </span> to schedule your consultation and take the first step towards a happier, healthier you.</div>
                    </div>
                    </div>
</Item>
                </Grid>


            </Grid>
       
            <HomeContent />
        </>
    )
}


export default Technologys;

