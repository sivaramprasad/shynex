import React from 'react'
import "./LaserTreatments.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
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
                <title>Best Laser Clinic for Skin, Hair, Full Body Treatment | Shynex </title>
                <meta name="description" content="Our dermatologists provide laser hair removal, tattoo removal, pigmentation correction, & vascular lesion treatment using the latest FDA-approved technology." />
                <meta name="keywords" content="laser hair removal, laser tattoo removal, pigmentation treatment, Q-Switch laser, vascular lesion treatment, laser toning, carbon peel, US FDA-approved laser, skin rejuvenation, Shynex Poly Clinic" />
                <link rel="canonical" href="https://www.backstagepass.co.in/laser-treatments/" />
            </Helmet>
            <div className='courseBanner'><img alt="Banner" title='Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Laser Treatments</h1>
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
                            <h2>Laser Hair Removal</h2>
                        </div>
                        <div className="text">Laser hair removal is a cutting-edge cosmetic procedure that effectively reduces unwanted hair by targeting the hair follicles with concentrated light energy. At Shynex Poly Clinic, we use the latest US FDA-approved laser technology, <Link to={"/alma-soprano-titanium/"} style={{ color: "#974478" }}>Soprano Titanium</Link> and Diolaze XL to ensure precise and safe treatments. The benefits of laser hair removal include long-lasting results, smoother skin, and minimal discomfort compared to traditional hair removal methods such as shaving, waxing, or plucking.</div>
                        <div className="text">Our advanced laser hair removal technology is designed to treat all skin types with high precision, ensuring maximum efficacy and minimal side effects. Our trained professionals perform thorough consultations to customize treatments to each individual's skin type and hair growth pattern, ensuring optimal results. The procedure is non-invasive, quick, and involves faster recovery, making it a convenient option for those seeking smooth, hair-free skin.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Laser Tattoo Removal</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Laser tattoo removal is a highly effective method to erase unwanted tattoos by breaking down the ink particles with concentrated laser beams. Shynex employs state-of-the-art US FDA-approved lasers to ensure the safest and most efficient tattoo removal process. This treatment is beneficial for those who wish to remove tattoos without scarring, offering a safe and non-invasive solution.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>Our laser tattoo removal technology ensures precise targeting of tattoo ink while preserving the surrounding skin. The procedure is customized based on the tattoo's color, depth, and size, ensuring best results with no discomfort. Patients can expect a series of sessions to achieve the desired outcome, with each session gradually fading the tattoo. Our commitment to safety and efficacy guarantees a superior tattoo removal experience.</div>


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
                            <h2>Q-Switch for Pigmentation</h2>
                        </div>
                        <div className="text">Q-Switch laser treatment is a revolutionary solution for treating various pigmentation issues, including age spots, freckles, and melasma. At Shynex Poly Clinic, we utilize US FDA-approved Q-Switch lasers to provide safe and effective pigmentation reduction. This treatment works by delivering high-intensity light pulses to target and break down pigment particles in the skin, promoting a more even skin tone.</div>
                        <div className="text">The benefits of Q-Switch laser treatment are numerous, including significant reduction of hyperpigmentation, improved skin texture, and a brighter complexion. The procedure is non-invasive and requires minimal downtime, making it an ideal choice for those seeking quick and visible results. Our expert clinicians tailor each treatment to the patient's specific needs, ensuring a safe and customized approach that delivers outstanding results.</div>


                    </div></Item>
                </Grid>


            </Grid>


            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Laser Toning - Carbon Peels</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>At Shynex Poly Clinic, we offer the advanced Laser Toning Carbon Peel, a fast and painless procedure designed to rejuvenate your skin. This treatment is perfect for those dealing with oily skin, acne, or enlarged and clogged pores, and it also addresses the early signs of sun damage. The Laser Toning Carbon Peel deeply exfoliates the skin and stimulates collagen production, resulting in a refreshed and revitalized complexion. Key benefits include reducing acne breakouts and scars, minimizing pores, lightening pigmentation issues such as melasma, smoothing fine lines and wrinkles, and repairing sun damage. Unlike traditional chemical peels, our laser carbon peel uses heat instead of chemicals, making it suitable for individuals with sensitive skin or conditions like eczema, with noticeable results and no downtime.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>The Laser Toning Carbon Peel is a quick, multi-step process that takes about 30 minutes, making it a convenient lunchtime procedure. During the treatment, a layer of liquid carbon is applied to your face, absorbing oil, dirt, and dead skin cells from deep within the pores. After drying for about 10 minutes, eye shields are provided for protection, and a low-energy laser is passed over your skin to heat the carbon and bind it to the epidermis. The laser then breaks the carbon into tiny particles, which are removed along with impurities using a smoke evaporator. A hydrating moisturizer and sunscreen are applied afterward. Immediately after the treatment, you’ll notice brighter, glowing skin and tighter pores, with continued improvement in skin texture and appearance as collagen production increases over the following weeks.</div>


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
                            <h2>Vascular Lesion Treatment</h2>
                        </div>
                        <div className="text">Vascular lesion treatment involves the use of specialized lasers to target and eliminate unwanted blood vessels, such as spider veins, rosacea, and port-wine stains. At Shynex Poly Clinic, we utilize best laser technology to provide safe and effective treatments for various vascular lesions. This procedure works by delivering precise laser energy to the affected blood vessels, causing them to collapse and fade over time.</div>
                        <div className="text">The benefits of vascular lesion treatment include significant reduction in the appearance of vascular lesions, improved skin clarity, and minimal discomfort during the procedure. Our advanced laser technology ensures precise targeting of the blood vessels while preserving the surrounding skin, resulting in a safe and effective treatment. The procedure is non-invasive, with no recovery time, making it a convenient option for those seeking to improve their skin's appearance. At Shynex, our experienced clinicians conduct thorough consultations to tailor the treatment to each patient's unique needs, ensuring optimal results and patient satisfaction.</div>


                    </div></Item>
                </Grid>


            </Grid>



            <HomeContent />
        </>
    )
}


export default SkinRejuvenation;

