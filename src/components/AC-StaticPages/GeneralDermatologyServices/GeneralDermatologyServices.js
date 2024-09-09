import React from 'react'
import "./GeneralDermatologyServices.css";
import HomeContent from "../../../content/HomeContent";

import courseBanner from "../../../assets/img/banners/about-us.webp";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/scalp-hair.webp";
import hwst1 from "../../../assets/img/FBSE-Graphic.webp";
import cncpt from "../../../assets/img/Dermatosurgery.webp"

import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function GeneralDermatologyServices(props) {
    return (
        <>
            <Helmet>
                <title>Comprehensive Skin & Hair Diagnosis | Shynex Poly Clinic</title>
                <meta name="description" content="Discover expert skin and hair diagnosis, & treatment at Shynex Poly Clinic, Hyderabad. Personalized treatments for healthier skin. Book your consultation today!" />
                <meta name="keywords" content="skin diagnosis, hair diagnosis, dermatology services, mole removal, cyst excision, scar revision, skin health, skin examinations, dermatosurgery, dermatologist, comprehensive skin care, skin assessments, skin conditions, hair conditions, dermatology clinic, skin doctors, dermatology Hyderabad, Shynex Poly Clinic" />
                <link rel="canonical" href="https://www.backstagepass.co.in/general-dermatology-services/" />
            </Helmet>
            <div className='courseBanner'><img alt="Banner" title='Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>General Dermatology Services</h1>
            </div>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>
                        <div className="inner-column inner-column1 wow fadeInLeft">

                            <figure className="image-1"><a href="/aboutus/" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="" /></a></figure>


                        </div></Item>
                </Grid>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2>Skin and Hair Diagnosis</h2>
                        </div>
                        <div className="text">At Shynex Poly Clinic, we offer comprehensive skin and hair diagnosis to help you understand the root causes of your dermatological concerns. Our expert skin doctors use advanced diagnostic tools and techniques to assess various skin and hair conditions. By identifying the underlying issues, we provide personalized treatment plans tailored to your needs, ensuring effective and long-lasting results.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Dermatosurgery</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Shynex Poly Clinic excels in dermatosurgery, offering cutting-edge surgical solutions for various skin conditions. Our highly skilled surgeons perform procedures with precision and care, addressing issues such as mole removal, cyst excision, and scar revision. With state-of-the-art technology and a commitment to safety, we ensure minimal discomfort and optimal healing, helping you achieve healthier and more aesthetically pleasing skin.</div>


                    </div></Item>
                </Grid>
                <Grid style={{ boxShadow: "none" }} xs={6}>
                    <Item style={{ boxShadow: "none" }}>    <div className="inner-column inner-column2 wow fadeInLeft">

                        <figure className="image-1"><a href="/aboutus/" className="lightbox-image" data-fancybox="images"><img className='img-box' src={cncpt} alt="" /></a></figure>

                    </div></Item>
                </Grid>

            </Grid>

            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>
                        <div className="inner-column inner-column1 wow fadeInLeft">

                            <figure className="image-1"><a href="/aboutus/" className="lightbox-image" data-fancybox="images"><img src={hwst1} alt="" /></a></figure>


                        </div></Item>
                </Grid>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2>Skin Examinations</h2>
                        </div>
                        <div className="text">Regular skin examinations are crucial for maintaining healthy skin and early detection of potential issues. At Shynex, our thorough skin examinations include detailed assessments of moles, lesions, and other skin abnormalities. Our experienced dermatologists provide useful and detailed insights and recommendations, empowering you to take positive steps in your skincare journey. You can trust us to keep your skin health in check with our meticulous and professional approach.</div>


                    </div></Item>
                </Grid>


            </Grid>



            <HomeContent />
        </>
    )
}


export default GeneralDermatologyServices;

