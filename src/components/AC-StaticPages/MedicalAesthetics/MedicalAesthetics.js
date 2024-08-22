import React from 'react'
import "./MedicalAesthetics.css";
import HomeContent from "../../../content/HomeContent";

import courseBanner from "../../../assets/img/banners/about-us.webp";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/Botox.webp";
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


function SkinRejuvenation(props) {
    return (
        <>
            <Helmet>
                <title>Best Laser Tattoo Removal | Laser Scar Removal | Shynex Clinic</title>
                <meta name="description" content="Enhance your appearance with Shynex's medical aesthetics services, including tattoo removal, scar revision, and more using advanced US FDA-approved laser technologies." />
                <meta name="keywords" content="tattoo removal, scar revision, birthmark removal, US FDA-approved laser, skin rejuvenation, Shynex Poly Clinic, advanced aesthetics treatments, non-invasive procedures, skin improvement" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Medical Aesthetics</h1>
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
                            <h2>Tattoo Removal</h2>
                        </div>
                        <div className="text">At Shynex, our tattoo removal service offers a safe and effective way to erase unwanted tattoos using the latest US FDA-approved laser technology. Our dermatologists utilize advanced laser systems that target and break down the ink particles in the skin without causing damage to the surrounding tissue. This process gradually fades the tattoo over multiple sessions, ensuring a smooth and even removal. Each treatment is tailored to the individual's skin type and the tattoo's characteristics, maximizing results while minimizing discomfort and downtime.</div>
                        <div className="text">Our doctors conduct a thorough consultation and skin assessment before starting the treatment to determine the best approach for each patient. The laser technology we use, such as the Alma Harmony XL PRO, ensures precise targeting of the ink particles, reducing the risk of scarring or skin damage. Patients can expect visible results after the first few sessions, with the tattoo gradually fading away. With our expert care and cutting-edge technology, Shynex ensures a safe, comfortable, and successful tattoo removal experience.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Scar Revision </h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Shynex Poly Clinic offers state-of-the-art scar revision treatments designed to minimize the appearance of scars and restore your skin's smooth texture. We employ different techniques, including laser therapy, microneedling, and dermal fillers, to address different types of scars, whether they are the result of acne, injury, or surgery. By tailoring the treatment to the specific needs of each patient, we ensure optimal outcomes and improved skin appearance.</div>

                        <div className="text" style={{ marginLeft: '35px' }}>Before starting any treatment, we carefully evaluate the scar and the patient's skin type to select the most appropriate treatment method. Advanced laser systems like the Alma Harmony XL PRO are often used to stimulate collagen production and resurface the skin, promoting healing and reducing scar visibility. Patients can expect a gradual improvement in their skin's texture and tone, with reduced pain and faster recovery. At Shynex, we have just one goal, to help you achieve smoother, clearer skin and renewed confidence.</div>


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
                            <h2>Birthmark Removal</h2>
                        </div>
                        <div className="text">At Shynex, we focus on safely and effectively removing birthmarks using the latest laser technology. Our experienced dermatologists specialize in treating various birthmarks, including pigmented and vascular types, ensuring minimal risk and excellent results. The laser treatment targets the pigmentation or blood vessels within the birthmark, breaking them down so the body can naturally eliminate them over time. This gentle, non-invasive approach provides a precise solution for achieving clearer skin.</div>
                        <div className="text">Before starting treatment, our dermatologists thoroughly assess the birthmark and the patient's skin to create a personalized plan. By using advanced laser technologies like the Alma Harmony XL PRO, we ensure effective treatment with little discomfort and quick recovery. Most patients see a significant reduction in their birthmarks after just a few sessions, with continued improvement over time. At Shynex Poly Clinic, we are dedicated to providing a safe, comfortable, and effective solution for your birthmark removal needs.</div>


                    </div></Item>
                </Grid>


            </Grid>



            <HomeContent />
        </>
    )
}


export default SkinRejuvenation;

