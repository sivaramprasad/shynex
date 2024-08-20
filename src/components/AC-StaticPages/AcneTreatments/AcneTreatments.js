import React from 'react'
import "./AcneTreatments.css";
import HomeContent from "../../../content/HomeContent";

import courseBanner from "../../../assets/img/banners/about-us.png";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/Botox.jpg";
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


function AcneTreatments(props) {
    return (
        <>
            <Helmet>
                <title>Effective Acne Treatment in Hyderabad | Clear and Glowing Skin</title>
                <meta name="description" content="Get rid of acne with advanced treatments like Fractional CO2, MNRF, and Clear Skin Laser at Shynex Poly Clinic. Achieve smooth, clear skin with minimal downtime." />
                <meta name="keywords" content="acne treatments, acne scars, Fractional CO2, MNRF, Clear Skin Laser, acne reduction, clear skin, acne scar removal, advanced acne treatment, Shynex Poly Clinic" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Acne Treatments</h1>
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
                            <h2>Fractional CO2 & MNRF</h2>
                        </div>
                        <div className="text">At Shynex Poly Clinic, we offer advanced acne treatment through Fractional CO2 and MNRF (Micro-Needling Radio Frequency) technologies. These treatments target deep-seated acne scars and uneven skin texture by stimulating collagen production and promoting skin renewal. Our experienced dermatologists personalize each session to ensure optimal results while prioritizing your comfort and safety. The procedure is FDA-approved and minimizes downtime, allowing you to resume daily activities shortly after treatment. Over a series of sessions, patients experience smoother, clearer skin, with visible improvements in acne scars and skin texture.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Clear Skin Laser</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Our Clear Skin Laser treatment at Shynex effectively targets active acne and reduces inflammation using state-of-the-art laser technology. Our dermatologists carefully assess each patient's skin condition to tailor the treatment, ensuring precise targeting of acne-causing bacteria and promoting faster healing of acne lesions. This non-invasive procedure is gentle yet effective, providing noticeable results without significant downtime. It is suitable for all skin types and helps restore a clearer complexion over a recommended series of sessions. At Shynex, your safety and satisfaction are our top priorities, and our Clear Skin Laser treatment is designed to deliver visible improvements in acne reduction and overall skin health.</div>


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
                            <h2>Chemical Peels</h2>
                        </div>
                        <div className="text">Shynex offers a range of chemical peels designed to treat acne-prone skin and improve skin texture and tone. Our dermatologists use carefully formulated peels to exfoliate the skin gently, removing dead skin cells and unclogging pores. This process helps reduce acne breakouts, fade acne scars, and even out skin tone. We prioritize safety by selecting peels appropriate for your skin type and condition, ensuring minimal discomfort and a recovery period. After the treatment patients have experienced smoother, rejuvenated skin with reduced acne symptoms and improved overall complexion with lasting results. </div>


                    </div></Item>
                </Grid>


            </Grid>




            <HomeContent />
        </>
    )
}


export default AcneTreatments;

