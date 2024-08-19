import React from 'react'
import "./SkinRejuvenation.css";
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


function SkinRejuvenation(props) {
    return (
        <>
            <Helmet>
                <title>Skin Rejuvenation Treatment at Shynex | PRP, Microneedling & More</title>
                <meta name="description" content="Revitalize your skin with IPL therapy, microneedling, and PRP at Shynex Poly Clinic. Experience brighter, youthful skin from top dermatologist in hyderabad." />
                <meta name="keywords" content="skin rejuvenation, microneedling, PRP therapy, photofacial, collagen stimulation, skin firming, anti-aging, skin texture improvement, youthful complexion, fine lines, wrinkle reduction, skin vitality, skin elasticity, skin tone, facial rejuvenation, skin radiance, skin renewal, Shynex Poly Clinic" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Skin Rejuvenation</h1>
            </div>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>
                        <div className="inner-column inner-column1 wow fadeInLeft">

                            <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="" /></a></figure>


                        </div></Item>
                </Grid>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2>Photofacial/IPL (Intense Pulsed Light) therapy</h2>
                        </div>
                        <div className="text">At Shynex Poly Clinic, experience photofacials or IPL therapy for a life-changing experience. IPL targets a variety of skin imperfections, including uneven pigmentation, age spots, and sun damage, utilising broad-spectrum light. To achieve the best results, our expert dermatologists customise each session to your skin type and concerns. Safety is our top priority at Shynex, and our FDA-approved IPL technology uses carefully calibrated light pulses to gently and effectively rejuvenate your skin. After a series of treatments, patients frequently notice brighter, clearer skin that reveals a youthful complexion without requiring recovery time.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Microneedling </h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Discover the power of Microneedling at Shynex Poly Clinic, a minimally invasive treatment that stimulates collagen production for smoother, firmer skin. Our dermatologists use advanced microneedling devices to create tiny, controlled injuries to the skin's surface, triggering the natural healing process. This technique improves skin texture, reduces acne scars, and diminishes fine lines and wrinkles. In the microneedling procedure, we adhere to strict sterilization protocols and use sterile disposable needles for each session. Patients typically see a gradual improvement in skin tone and texture, achieving a rejuvenated appearance with minimal discomfort.</div>


                    </div></Item>
                </Grid>
                <Grid style={{ boxShadow: "none" }} xs={6}>
                    <Item style={{ boxShadow: "none" }}>    <div className="inner-column inner-column2 wow fadeInLeft">

                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img className='img-box' src={cncpt} alt="" /></a></figure>

                    </div></Item>
                </Grid>

            </Grid>

            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>
                        <div className="inner-column inner-column1 wow fadeInLeft">

                            <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src={hwst1} alt="" /></a></figure>


                        </div></Item>
                </Grid>
                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2>Platelet-rich plasma (PRP) therapy</h2>
                        </div>
                        <div className="text">Platelet-Rich Plasma (PRP) Therapy at Shynex utilizes your body's platelets to promote skin rejuvenation. After extracting a concentrated solution of growth factors from your blood, our dermatologists carefully inject it back into targeted areas of your skin. This stimulates collagen production, enhances elasticity, and improves overall texture, effectively reducing fine lines and wrinkles. Our clinic prioritizes safety with sterile techniques and personalized treatment plans, ensuring each session is both effective and risk-free. Patients typically experience natural-looking results with improved skin tone and vitality, making PRP Therapy a preferred choice for non-surgical skin rejuvenation at Shynex.</div>


                    </div></Item>
                </Grid>


            </Grid>



            <HomeContent />
        </>
    )
}


export default SkinRejuvenation;

