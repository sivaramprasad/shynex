import React from 'react'
import "./MoleandSkinCancerChecks.css";
import HomeContent from "../../../content/HomeContent";

import courseBanner from "../../../assets/img/banners/about-us.webp";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/Botox.webp";
import cncpt from "../../../assets/img/Dermatosurgery.webp"

import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function SkinRejuvenation(props) {
    return (
        <>
            <Helmet>
                <title>Comprehensive Mole and Skin Cancer Checks | Shynex Poly Clinic</title>
                <meta name="description" content="Early detection of skin cancer with specialized screenings at Shynex. Our dermatologists offer thorough evaluations, biopsies, and mole removal to protect your skin health." />
                <meta name="keywords" content="skin cancer screening, mole check, biopsy, mole removal, early detection, skin health, dermatoscopic technology, skin cancer prevention, Shynex Poly Clinic, cancerous mole treatment" />
                <link rel="canonical" href="https://www.backstagepass.co.in/mole-skin-cancer-checks/" />
            </Helmet>
            <div className='courseBanner'><img alt="Banner" title='Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Mole and Skin Cancer Checks</h1>
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
                            <h2>Skin Cancer Screenings</h2>
                        </div>
                        <div className="text">Early detection of skin cancer can save lives, and our specialized skin cancer screenings at Shynex are designed to do just that. Our dermatologists conduct thorough examinations using advanced dermatoscopic technology to identify any abnormal moles or skin changes that could indicate skin cancer. Regular screenings are crucial, especially for individuals with a history of sun exposure or a family history of skin cancer. By catching potential issues early, we can offer more effective treatment options and better outcomes.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Biopsy and Removal of Suspicious Moles</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>When a mole appears suspicious during a screening, a biopsy may be necessary to determine if it is cancerous. At Shynex, our dermatologists perform biopsies with precision and care, ensuring minimal discomfort. If a mole is found to be cancerous or potentially harmful, we provide expert removal services to eliminate the threat. Our team prioritizes patient safety and employs the latest techniques to ensure complete removal while minimizing scarring and recovery time.</div>


                    </div></Item>
                </Grid>
                <Grid style={{ boxShadow: "none" }} xs={6}>
                    <Item style={{ boxShadow: "none" }}>    <div className="inner-column inner-column2 wow fadeInLeft">

                        <figure className="image-1"><a href="/aboutus/" className="lightbox-image" data-fancybox="images"><img className='img-box' src={cncpt} alt="" /></a></figure>

                    </div></Item>
                </Grid>

            </Grid>

        



            <HomeContent />
        </>
    )
}


export default SkinRejuvenation;

