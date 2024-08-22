import React from 'react'
import "./Technology1.css";
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


function Technologyy (props) {
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
                            <h1 className='tagline' style={{ color: "#000"}}>Alma harmony XL PRO </h1>
                        </div>
                        <div className="text">At Shynex, we believe in harnessing the latest technology to empower dermatologists to achieve exceptional results. And that is why we have introduced USFDA approved Alma Harmony XL PRO, an innovative treatment solution designed to revolutionize the field of dermatology and aesthetic medicine.</div>
                        <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>About Alma Harmony XL PRO:</h2>
                        <div className="text">The Alma Harmony XL PRO is a versatile and advanced multi-application treatment platform that combines various technologies to address various aesthetic concerns. It is renowned for its precision, efficacy, and safety, making it a trusted choice among dermatologists and skincare professionals worldwide.

                      </div>
                      <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Key Features and Technologies: </h2>
                     
                        <div className="text">The Alma Harmony XL PRO is a versatile and advanced multi-application treatment platform that combines various technologies to address various aesthetic concerns. It is renowned for its precision, efficacy, and safety, making it a trusted choice among dermatologists and skincare professionals worldwide.

                      </div>
                      <ul style={{marginLeft:"20px"}}>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Multiple Applications:</span> Harmony XL PRO offers a comprehensive suite of applications, including laser hair removal, skin rejuvenation, acne treatment, pigmented lesion removal, vascular lesion treatment, tattoo removal, and more.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Advanced Technologies: </span>With a combination of advanced technologies such as Advanced Fluorescence Technology (AFT), Advanced Contact Cooling, and ClearLift™ (Fractional Q-Switched Nd:YAG) technology, the Alma Harmony XL PRO ensures optimal results with minimal discomfort and downtime.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Customizable Treatment Parameters:</span>Dermatologists can tailor treatments to meet the unique needs of each patient with customizable treatment parameters, allowing for precise targeting of specific skin concerns with minimal risk of side effects</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Safe and Effective:</span>  Backed by extensive clinical research and FDA clearance, the Alma Harmony XL PRO is proven to deliver safe and effective results across a diverse range of skin types and conditions.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        User-Friendly Interface:</span>Featuring an intuitive user interface, the Alma Harmony XL PRO allows for seamless operation and precise control, ensuring consistent outcomes with every treatment session.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Versatility: </span>Whether addressing signs of ageing, sun damage, pigmentation issues, or unwanted hair, Harmony XL PRO offers different solutions to meet the diverse needs of patients.</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text"><span style={{fontWeight:"700"}}>
                        Patient Satisfaction:</span> By delivering noticeable improvements in skin tone, texture, and overall appearance, the Alma Harmony XL PRO helps enhance patient satisfaction and confidence, leading to positive treatment outcomes and long-term loyalty.</div>
                        </li>
                        </ul>
                        <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Why Choose Alma Harmony XL PRO:  </h2>
                        <ul style={{marginLeft:"20px"}}>
                        <li style={{listStyle:"disc"}}>
                     <div className="text">Versatile multi-application treatment platform</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Advanced technologies for optimal results</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Customizable treatment parameters for individualized care</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Proven safety and efficacy</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">USFDA Approved</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Enhanced patient satisfaction and outcomes</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text">Trusted by dermatologists worldwide
                   </div>
                   </li>
                   </ul>
                        <div className="text"><span style={{fontWeight:"700"}}>Schedule Your Next Skin Care Session</span> with the Amazing Alma Harmony XL PRO!</div>
   

             
                    </div>
                    </div>
</Item>
                </Grid>


            </Grid>
       
            <HomeContent />
        </>
    )
}


export default Technologyy;

