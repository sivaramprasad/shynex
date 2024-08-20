import React from 'react'
import "./CosmeticDermatologyTreatments.css";
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


function CosmeticDermatologyTreatments(props) {
    return (
        <>
            <Helmet>
                <title>Advanced Cosmetic Dermatology | Botox, Fillers & More</title>
                <meta name="description" content="Get youthful skin with Botox, dermal fillers, chemical peels & more at Shynex Clinic. Safe, effective, & FDA-approved treatments from top dermatologists. Learn more" />
                <meta name="keywords" content="cosmetic dermatology, Botox injections, dermal fillers, chemical peels, microdermabrasion, laser skin resurfacing, wrinkle reduction, volume restoration, skin rejuvenation, anti-aging treatments, non-surgical treatments, facial aesthetics, skin tightening, lip fillers, cheek fillers, jawline contouring, fine lines, facial wrinkles, youthful skin, Shynex Poly Clinic" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Cosmetic Dermatology Treatments</h1>
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
                            <h2>Botox Injections for Wrinkle Reduction</h2>
                        </div>
                        <div className="text">Botox injections are a highly effective, non-surgical treatment for reducing the appearance of wrinkles and fine lines. By temporarily relaxing the underlying facial muscles, Botox smooths out creases and gives the skin a rejuvenated and youthful look. Our team of specialists at Shynex Poly Clinic use advanced techniques to ensure precise and natural-looking results, helping you achieve a refreshed appearance with minimal downtime. The procedure is quick and convenient, allowing you to resume your daily activities immediately.</div>
                        <div className="text">Safety is our top priority at Shynex Poly Clinic. Our doctors are extensively trained in administering Botox injections; hence they ensure the Botox procedure is conducted with utmost safety and hygiene. We use only FDA-approved Botox products, ensuring the highest quality and reliability. During your consultation, we will discuss your aesthetic goals and medical history to tailor the treatment to your specific needs, minimizing any potential risks and ensuring a comfortable experience.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Dermal Fillers for Volume Restoration</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Dermal fillers are a great solution for restoring lost facial volume and enhancing your natural contours. These injectable treatments are designed to plump up the skin, smooth out deep wrinkles, and add fullness to areas such as the cheeks, lips, and jawline. At Shynex, we use high-quality, FDA-approved fillers to deliver safe and effective results. Our skilled practitioners customize each treatment to your unique needs, ensuring a youthful and balanced look. The results are immediate; therefore, you get a rejuvenated appearance without the need for invasive surgery.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>Also, our experts are highly trained in the art and science of dermal filler injections, employing techniques that maximize safety and effectiveness. We conduct thorough consultations to understand your goals and assess your suitability for the treatment. By using the best products and adhering to stringent safety protocols, we minimize the risk of complications and ensure that your treatment is as safe as it is effective.</div>


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
                            <h2>Chemical Peels for Skin Rejuvenation, Acne, and Pigmentation </h2>
                        </div>
                        <div className="text">Chemical peels are a versatile and effective treatment for improving the skin's texture and tone. They work by exfoliating the top layers of the skin, promoting cell turnover and revealing a smoother, more radiant complexion. At Shynex, we offer a range of high-quality and medically approved chemical peels tailored to address various skin concerns, including acne, pigmentation, fine lines, and sun damage. Our dermatologists carefully select the appropriate peel for your skin type and concerns, ensuring optimal results, safety and minimal downtime.</div>


                    </div></Item>
                </Grid>


            </Grid>

<Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Microdermabrasion for Exfoliation</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Microdermabrasion is a gentle yet powerful exfoliation technique that removes dead skin cells and stimulates collagen production. This non-invasive procedure helps to refine skin texture, reduce the appearance of fine lines, and brighten the complexion. At Shynex, we use advanced, and safe technology to ensure comfortable and effective treatments. Our experienced professionals adhere to the highest standards of care, tailoring each procedure to your skin type and condition. Patient safety is our top priority, and we provide detailed post-treatment instructions to maintain and enhance your results. At Shynex, you can enjoy a personalized approach that leaves your skin feeling refreshed and glowing.</div>


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
                            <h2>Laser Skin Resurfacing</h2>
                        </div>
                        <div className="text">Laser skin resurfacing at Shynex Poly Clinic is a state-of-the-art treatment aimed at rejuvenating your skin and addressing various imperfections. Using the FDA-approved Alma Harmony XL PRO with Pixel YAG 2940 nm applicator, our skilled practitioners precisely target damaged skin layers, stimulating collagen production for a smoother and more youthful complexion. Our clinic tailors each treatment to the patient's specific skin type and concerns, including fine lines, scars, or uneven pigmentation. Also, safety is paramount at Shynex—we adhere to rigorous safety protocols and conduct thorough skin analyses during consultations to ensure a safe and effective experience. We are confident in our ability to deliver clear and radiant results for your advanced laser skin resurfacing treatment.</div>


                    </div></Item>
                </Grid>


            </Grid>

            <HomeContent />
        </>
    )
}


export default CosmeticDermatologyTreatments;

