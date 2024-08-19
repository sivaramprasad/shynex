import React from 'react'
import "./AboutUs.css";
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


function Aboutus(props) {
    return (
        <>

            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            
            <div className="sec-title">
                <h2 style={{ margin: "0px", fontSize:"50px", fontWeight:"900"}}>About Shynex </h2>
            </div>
            <Grid container spacing={1} className="main-img" style={{boxShadow: "none"}}>
                
                <Grid xs={12} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>      <div className="inner-column">
                        <div className="sec-title">
                            <h1 className='tagline' style={{ color: "#000"}}>Best Skin and Hair Clinic in Hyderabad</h1>
                        </div>
                        <div>                        <div className="text">Welcome to Shynex Poly Clinic, a premier healthcare destination in the vibrant city of Hyderabad. At Shynex, we are dedicated to transforming lives through the art and science of advanced dermatology and cosmetology. Our mission is to provide unparalleled healthcare services, with a vision to establish multiple centers across the city, making top-tier care accessible to all.</div>

                        <div className="text">Our team of esteemed doctors, each with extensive years of experience and expertise, ensures that every patient receives compassionate and effective care. We understand that each individual is unique, and we are committed to crafting personalized treatment plans that cater to your specific needs and goals. At Shynex, we specialize in offering top-notch skin and hair treatments for both men and women at affordable prices. Our clinic is equipped with state-of-the-art, USFDA-approved technology, ensuring the highest safety and efficacy standards.</div>
                        <div className="text">We provide a comprehensive range of services including <span style={{textDecoration:"underline"}}>Hollywood facials, pigmentation removal, laser treatments, chemical peels, hair loss treatments, slimming services, skin cancer screening,</span> and more. Whether you are looking to rejuvenate your skin, address hair loss, or achieve your desired body shape, our advanced treatments are designed to meet your needs. Our team of the best cosmetologists and dermatologists in Hyderabad takes the utmost care in providing precise and effective treatments. With a deep commitment to healthcare innovation, we are not just a clinic; we are a partner in your journey towards better health and enhanced confidence.</div>
                        <div className="text">At Shynex Poly Clinic, our dedication to your well-being goes beyond treatment. We strive to create a warm and welcoming environment where you feel comfortable and cared for from the moment you walk through our doors. Driven by a passion for healthcare innovation, we ensure that modern expertise meets compassionate care, offering you the best possible outcomes. </div>
                        <div className="text">Achieve radiant skin and healthy hair with Shynex. <span style={{textDecoration:"underline"}}><a>Book your appointment today </a></span> and enhance your confidence and well-being. </div> 

                    </div>
                    </div>
</Item>
                </Grid>


            </Grid>
       
            <HomeContent />
        </>
    )
}


export default Aboutus;

