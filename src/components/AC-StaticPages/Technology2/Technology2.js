import React from 'react'
import "./Technology2.css";
import HomeContent from "../../../content/HomeContent";
import Ourawards from "../../../content/ourawards";

import courseBanner from "../../../assets/img/banners/about-us.webp";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/test/howstrt.webp";
import st1 from "../../../assets/img/test/sty1.gif";
import st2 from "../../../assets/img/test/sty2.gif";
import cncpt from "../../../assets/img/banners/Concept.webp"

import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Technologys (props) {
    return (
        <>

            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            
            <div className="sec-title">
                <h2 style={{ margin: "0px", fontSize:"50px", fontWeight:"900"}}>Shynex Technology </h2>
            </div>
            <Grid container spacing={1} className="main-img" style={{boxShadow: "none"}}>
                
                <Grid xs={12} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>      <div className="inner-column">
                        
                        <div>                       
                        <div className="sec-title">
                            <h1 className='tagline' style={{ color: "#000"}}>Morpheus8 </h1>
                        </div>
                        <div className="text">
                        At Shynex, we’re at the forefront of revolutionizing the beauty and wellness industry with our modern technology. Let us introduce you to USFDA approved Morpheus 8 – a groundbreaking treatment that combines the latest advancements in radiofrequency (RF) technology with microneedling for unparalleled results.
</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>What is Morpheus 8? </h2>
<div className="text">
Morpheus 8 is a non-invasive cosmetic procedure designed to target various skin concerns, including: </div>
                        <ul style={{marginLeft:"20px"}}>
                        <li style={{listStyle:"disc"}}>
                     <div className="text">Wrinkles and fine lines</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Acne scars and other types of scarring</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Hyperpigmentation and uneven skin tone</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Skin laxity and sagging</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Poor skin texture and enlarged pores</div>
                     </li>
                    
                   </ul>
                        <div className="text">Unlike traditional treatments, Morpheus 8 penetrates deep into the skin’s layers, stimulating collagen production and promoting tissue remodelling for smoother, firmer, and more youthful-looking skin.

</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>The Technology Behind Morpheus 8  </h2>
<div className="text">
Morpheus 8 technology utilizes fractional RF energy and microneedling to deliver controlled thermal energy deep into the skin. The microneedles create tiny punctures, triggering the body's natural healing response, while the RF energy heats the underlying layers, stimulating collagen and elastin production. This dual-action approach not only improves skin texture and tone but also tightens loose skin for a more lifted appearance. </div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>How Morpheus 8 Works  </h2>
<div className="text">
During the treatment, a specialized handpiece is used to precisely deliver RF energy through an array of ultrafine needles. The depth and intensity of the treatment can be customized to address each patient’s unique concerns and skin type. The procedure is minimally invasive and requires little to no downtime, making it ideal for those with busy lifestyles and hectic schedules </div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Benefits of Morpheus 8  </h2>
<ul style={{marginLeft:"20px"}}>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Visible Results:</span> Experience smoother, firmer, and more radiant skin after just a few sessions.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Versatility:</span> Morpheus 8 can be used on all skin types and tones, making it suitable for a wide range of individuals.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Minimal Downtime:</span> Unlike traditional surgical procedures, Morpheus 8 requires minimal downtime, allowing you to resume your daily activities with little interruption. </div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Long-lasting Effects:</span> With proper maintenance, the results of Morpheus 8 can last for months, helping you maintain a youthful and rejuvenated appearance. </div>
                        </li>
                        </ul>
                        <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Discover the Morpheus 8 Difference</h2>

<div className="text">
Whether you're looking to reduce wrinkles, improve skin texture, or address other common skin concerns, Morpheus 8 offers a safe, effective, and customizable solution.  </div>
<div className="text">
At Shynex, our team of skilled professionals is dedicated to helping you achieve your aesthetic goals with personalized treatment plans tailored to your unique needs. </div>
<div className="text">
Are you ready to experience the transformative power of Morpheus 8?  </div>
<div className="text"><span style={{fontWeight:"700"}}>Contact us today</span> to schedule a consultation and take the first step towards a more confident and vibrant you.

</div>
                 </div>
                    </div>
</Item>
                </Grid>


            </Grid>
       
            <HomeContent />
        </>
    )
}


export default Technologys;

