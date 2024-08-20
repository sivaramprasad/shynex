import React from 'react'
import "./MedicalFacials.css";
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
                <title>Best Medifacial and Hydrafacial Treatment at Shynex, Hyderabad</title>
                <meta name="description" content="Rejuvenate your skin at Shynex with Photo Facial, MediFacial, Hydra Facial, and LED Light Therapy. Address various skin concerns and enhance your complexion now" />
                <meta name="keywords" content="Medical facials, photo facial, MediFacial, Hydra Facial, LED light therapy facial, skin rejuvenation, Shynex Poly Clinic, advanced facial treatments, non-invasive facials, skincare clinic" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Medical Facials</h1>
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
                            <h2>Photo Facial </h2>
                        </div>
                        <div className="text">Experience the revitalizing benefits of our Photo Facial at Shynex Poly Clinic. This advanced treatment uses intense pulsed light (IPL) technology to target and treat various skin concerns such as pigmentation, sun damage, and broken capillaries. The gentle yet effective light pulses penetrate the skin to stimulate collagen production, resulting in a more even skin tone and a reduction in fine lines and wrinkles. Ideal for all skin types, Photo Facial leaves you with a brighter, clearer, and more youthful complexion.</div>
                        <div className="text">Our Photo Facial not only addresses visible imperfections but also improves overall skin texture and health. The treatment is quick, non-invasive, and requires minimal downtime, making it a perfect choice for those seeking noticeable results without significant interruption to their daily routine. Discover the transformative effects of our Photo Facial and embrace the confidence that comes with radiant, flawless skin.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>MediFacial  </h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Our MediFacial at Shynex, offers a thorough, medical-grade facial treatment designed to deeply rejuvenate your skin. By combining advanced skincare products with professional techniques, the MediFacial effectively tackles issues like acne, hyperpigmentation, and aging signs. We customize each MediFacial to suit your skin type and specific needs, ensuring the best possible results.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>During the MediFacial, your skin is deeply cleansed, exfoliated, and treated with targeted serums and masks. These potent ingredients penetrate deeply, promoting healing and renewal from within. The result? Healthier, more vibrant skin that looks and feels refreshed. Treat yourself to our MediFacial for an enhanced glow and a boost in skin health, tailored just for you.</div>


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
                            <h2>Hydra Facial </h2>
                        </div>
                        <div className="text">At Shynex Poly Clinic, the Hydra Facial stands out as a premier treatment for achieving a hydrated, glowing complexion. This multi-step procedure involves cleansing, exfoliation, extraction, and hydration, all delivered through a specialized Hydra Facial device. The treatment infuses the skin with nutrient-rich serums that rejuvenate and protect, making it ideal for all skin types, including sensitive skin.</div>

                        <div className="text">The Hydra Facial offers immediate results with immediate recovery, making it a popular choice for those seeking a quick yet effective skin enhancement. It addresses a range of skin issues, from fine lines and wrinkles to enlarged pores and oily skin. After just one session, you’ll notice visibly improved skin texture, tone, and overall appearance. </div>


                    </div></Item>
                </Grid>


            </Grid>

            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>LED light therapy facial  </h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Our LED Light Therapy Facial at Shynex harnesses the transformative power of light to rejuvenate your skin. This non-invasive treatment uses varying wavelengths of LED light to address specific skin concerns, such as acne, inflammation, and the visible signs of aging. The blue light targets and eliminates acne-causing bacteria, effectively reducing breakouts and promoting clearer skin. Meanwhile, the red light stimulates collagen production and minimizes inflammation, helping to smooth fine lines and wrinkles and enhance overall skin texture and tone.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>This soothing, painless procedure requires zero recovery time, making it an ideal addition to any skincare regimen. By enhancing the skin's natural healing processes, the LED Light Therapy Facial improves overall skin health and appearance. Whether your goal is to combat stubborn acne or diminish the signs of aging, this facial offers a gentle yet powerful solution.</div>


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

