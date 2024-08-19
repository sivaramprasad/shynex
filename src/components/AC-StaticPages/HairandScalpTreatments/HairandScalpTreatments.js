import React from 'react'
import "./HairandScalpTreatments.css";
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
                <title>Best PRP Hair Treatment in Hyderabad | Visit Our Trichologist</title>
                <meta name="description" content="Get hair fall treatment at Shynex Clinic. We offer cutting-edge treatments like QR-678, Meso Therapy, PRP, and GFC to promote hair growth and improve scalp health." />
                <meta name="keywords" content="hair loss treatment, QR-678, Meso Therapy, PRP therapy, GFC therapy, hair regrowth, scalp health, hair density improvement, advanced hair treatments, Shynex Poly Clinic, best skin and hair clinic in Hyderabad" />
            </Helmet>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>

            <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Hair and Scalp Treatments</h1>
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
                            <h2>Hair loss evaluation and treatment</h2>
                        </div>
                        <div className="text">Hair loss can be a distressing concern, impacting both appearance and self-confidence. At Shynex Poly Clinic, our approach to hair loss begins with a meticulous evaluation conducted by our experienced dermatologists. We prioritize understanding the underlying causes, whether it's genetic predisposition, hormonal fluctuations, nutritional deficiencies, or lifestyle factors. This comprehensive assessment allows us to devise effective personalized treatment plans that target the root cause of your hair loss.</div>
                        <div className="text"><b>QR-678</b> stands out as a cutting-edge treatment offered at Shynex. This innovative therapy utilizes a blend of growth factors injected into the scalp to stimulate hair follicles and promote hair regrowth. Administered by our skilled professionals, QR-678 not only addresses thinning hair but also enhances hair density and overall scalp health. Patients typically notice gradual improvements in hair thickness and texture over several sessions.</div>
                        <div className="text">In addition to QR-678, we provide <b>Meso Therapy</b> using advanced techniques such as Derma Pen and Derma Roller. These treatments involve micro-needling devices that deliver bioactive substances directly into the scalp. By infusing potent growth factors, vitamins, and nutrients, Meso Therapy stimulates blood circulation to the scalp, strengthens hair follicles, and encourages new hair growth. This non-invasive approach is safe and effective, offering patients a proactive solution for improving hair volume and quality.</div>
                        <div className="text">For patients who are looking for alternative treatments, Shynex provides <b>GFC (Growth Factor Concentrate)</b> and <b>PRP (Platelet-Rich Plasma)</b> therapies. GFC involves isolating growth factors from your blood and injecting them into the scalp to stimulate cellular activity and promote hair follicle regeneration. PRP utilizes your platelet-rich plasma, extracted from a small blood sample, to encourage hair growth by delivering concentrated growth factors to the scalp. Both GFC and PRP treatments are minimally invasive and offer natural solutions for improving hair density and scalp health.</div>
                        <div className="text">We utilize FDA-approved high-quality technologies and follow rigorous safety protocols to ensure a comfortable and risk-free hair growth treatment experience. Our goal is not only to address hair loss but also to achieve visible and sustainable results that restore your hair's vitality and confidence.</div>
                        <div className="text">Whether you're struggling with hair thinning or seeking preventive care, Shynex Poly Clinic is committed to providing tailored solutions that meet your unique needs. Our expert skin and hair doctors are here to guide you through every step of your hair restoration journey, helping you achieve healthier, more resilient hair and a renewed sense of self-assurance.</div>


                    </div></Item>
                </Grid>


            </Grid>
            



            <HomeContent />
        </>
    )
}


export default SkinRejuvenation;

