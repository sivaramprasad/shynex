import React from 'react'
import "./BodyContouring.css";
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
                <title>Cryolipolysis Treatments at Shynex | Ultrasound Fat Reduction</title>
                <meta name="description" content="Advanced body shaping at Shynex in Hyderabad. Non-invasive cryolipolysis, injection lipolysis, RF fat reduction, and ultrasound for a slimmer, toned physique." />
                <meta name="keywords" content="Body contouring, cryolipolysis, injection lipolysis, radiofrequency fat reduction, ultrasound fat reduction, fat reduction treatments, non-invasive body sculpting, Shynex Poly Clinic, fat freezing, body contouring clinic" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Body Contouring</h1>
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
                            <h2>Cryolipolysis</h2>
                        </div>
                        <div className="text">Cryolipolysis is a groundbreaking non-invasive fat reduction procedure offered at Shynex Poly Clinic. This treatment utilizes the US FDA-approved Cristal PRO technology to safely and effectively target and eliminate unwanted fat cells. By applying controlled cooling to specific areas, cryolipolysis freezes subcutaneous fat, causing the fat cells to die without harming the surrounding tissue. Over time, the body's natural processes eliminate these dead cells, resulting in a slimmer and more contoured physique. This method is ideal for treating stubborn fat pockets in areas such as the abdomen, thighs, flanks, arms, and chin.</div>
                        <div className="text">At Shynex, our expert healthcare providers ensure a comfortable and efficient cryolipolysis experience. Each session typically lasts between one and three hours, during which patients can relax, read, or work on their laptops. The procedure requires no anesthesia, needles, or incisions, and patients can resume their normal activities immediately after treatment. With noticeable results often seen within a few weeks and continued improvement over several months, cryolipolysis is a safe and convenient option for those seeking non-invasive body sculpting treatments.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

                <Grid xs={6} style={{ boxShadow: "none" }}>
                    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2 style={{ paddingLeft: "5%" }}>Injection Lipolysis</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Injection Lipolysis is a minimally invasive fat reduction technique available at Shynex Poly Clinic, designed to dissolve unwanted fat deposits through targeted injections. This procedure involves the use of a specially formulated solution that is injected directly into the fatty tissue. The solution breaks down fat cells, which are then naturally eliminated by the body's metabolic processes. Injection lipolysis is particularly effective for treating small areas of localized fat, such as the chin, upper arms, and lower abdomen, providing a non-surgical alternative to liposuction.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>Our experienced practitioners at Shynex perform injection lipolysis with precision and care, ensuring minimal discomfort and optimal results. The treatment is relatively quick, with sessions typically lasting around 30 minutes, and patients can return to their daily activities immediately afterward. With a series of treatments, patients can achieve a more contoured and refined appearance, making injection lipolysis an excellent choice for those looking to enhance their body shape without undergoing surgery.</div>


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
                            <h2>Radiofrequency Fat reduction</h2>
                        </div>
                        <div className="text">Radiofrequency (RF) Fat Reduction is a cutting-edge, non-surgical procedure we offer at Shynex. This treatment uses radiofrequency energy to target and reduce stubborn fat while also tightening the skin. By heating the fat cells beneath the skin, RF energy breaks them down so they can be naturally eliminated by the body. Additionally, this energy boosts collagen production, resulting in firmer, more youthful-looking skin. This dual-action method is highly effective for contouring areas like the abdomen, thighs, arms, and love handles.</div>
                        <div className="text">At Shynex, our skilled practitioners tailor each RF fat reduction treatment to suit the unique needs of our patients. The procedure is comfortable and typically takes between 30 to 60 minutes per session. With minimal downtime, most patients can return to their normal activities right away. After couple of treatments, you will notice a gradual reduction in fat and improved skin tone, leading to a smoother and more contoured silhouette. RF fat reduction is a safe and effective choice for anyone seeking a conservative approach to body sculpting.</div>


                    </div></Item>
                </Grid>


            </Grid>

            <Grid container spacing={2} className="main-img" style={{ boxShadow: "none" }}>

<Grid xs={6} style={{ boxShadow: "none" }}>
    <Item style={{ boxShadow: "none" }}>      <div className="inner-column">
        <div className="sec-title">
            <h2 style={{ paddingLeft: "5%" }}>Ultrasound Fat Reduction</h2>
        </div>
        <div className="text" style={{ marginLeft: '35px' }}>Ultrasound fat reduction, also known as ultrasonic cavitation or lipolysis, is a cutting-edge body contouring treatment designed to eliminate fat deposits beneath the skin without the need for invasive surgery such as liposuction. At Shynex, our expert dermatologists utilize advanced US FDA approved ultrasonic technology, to safely and effectively break down fat cells. This non-invasive procedure uses ultrasonic radio waves to disrupt the fat cells, which are then naturally absorbed and processed by the body's lymphatic system. Our team prioritizes patient safety and comfort, ensuring that each session is conducted under meticulous care and supervision.</div>
        <div className="text" style={{ marginLeft: '35px' }}>The specialists at Shynex are dedicated to providing personalized and comprehensive care throughout the ultrasound fat reduction process. Recognizing that each patient is unique, we conduct thorough consultations to assess overall health, set realistic expectations, and develop tailored treatment plans. Our dermatologists emphasize post-procedure care, advising patients to stay well-hydrated and maintain a healthy lifestyle to optimize results. While the treatment is designed to target small areas of fat and improve body contours, multiple sessions may be recommended for the best outcome. With Shynex Poly Clinic's commitment to safety and efficacy, patients can achieve lasting results and enhanced confidence.</div>


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

