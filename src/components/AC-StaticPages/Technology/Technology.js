import React from 'react'
import "./Technology.css";
import HomeContent from "../../../content/HomeContent";
import Ourawards from "../../../content/ourawards";

import courseBanner from "../../../assets/img/banners/about-us.png";
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
                        <div className="sec-title">
                            <h1 className='tagline' style={{ color: "#000"}}>Alma Soprano Titanium </h1>
                        </div>
                        <div>                        <div className="text">Experience the pinnacle of skincare innovation with the Alma Soprano Titanium, a trendsetter in laser hair removal and aesthetic treatments. Designed with precision and ingenuity, this state-of-the-art device redefines professional skincare standards by blending effectiveness, safety, and comfort seamlessly.</div>
                        <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>About Soprano Titanium:</h2>
                        <div className="text">The Alma Soprano Titanium harnesses cutting-edge laser technology to deliver outstanding results in hair removal, skin rejuvenation, and various dermatological procedures. Its user-friendly design and intuitive interface ensure hassle-free operation, while its advanced cooling system guarantees maximum patient comfort during treatments.

                      </div>
                  
                      <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Unlocking the Power features: </h2>
                        <div className="text"><span style={{textDecoration:"underline"}}>Triple wavelength in one applicator - </span> The Alma Soprano Titanium is a game-changer in hair removal, thanks to its three-wavelength applicator. This feature blends three different wavelengths (755nm, 810nm, and 1064nm) to zap away hair of all types and skin tones. It's like having a triple threat against unwanted hair! Plus, because it uses all three wavelengths simultaneously, it covers more ground and gives better results, even on darker or tanned skin. With this attractive tech, clients get smoother skin with fewer sessions, and they can relax knowing it's safe and comfortable. So, if you're after top-notch hair removal, the Alma Soprano Titanium is where it's at

                      </div>
                   
                        <div className="text"><span style={{textDecoration:"underline"}}>ICE Plus - </span>Experience the next level of comfort with ICE Plus technology. Soprano Titanium’s advanced cooling system ensures continuous contact cooling throughout the treatment, keeping the skin comfortable and safe. You can say farewell to discomfort and hello to pain-free sessions.

                      </div>
                    
                        <div className="text"><span style={{textDecoration:"underline"}}>SHR Technology - </span> Soprano Titanium's SHR technology represents a significant breakthrough in laser hair removal. It operates by gently heating the hair follicles, ensuring a virtually painless treatment suitable for all skin types, even tanned skin. Requiring fewer sessions than traditional methods, it swiftly and safely delivers enduring results. This innovation in non-invasive hair removal makes smooth, hair-free skin more attainable and comfortable than ever before.
                      </div>
                      <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Why Choose Alma Soprano Titanium? </h2>
                        <div className="text"><span style={{textDecoration:"underline"}}>Efficiency -  </span> The Alma Soprano Titanium offers rapid and efficient hair removal, enabling practitioners to treat large areas quickly with minimal discomfort to the patient.
                        </div>

                        <div className="text"><span style={{textDecoration:"underline"}}>Safety and comfort -  </span> Patients experience minimal discomfort during treatments, thanks to the Soprano Titanium's advanced cooling system and virtually painless procedure, making it suitable for all skin types, including sensitive skin. Soprano Titanium also ensures precise targeting of hair follicles while simultaneously cooling the surrounding tissue, reducing the risk of adverse effects such as burns or pigmentation changes.</div>
                        <div className="text"><span style={{textDecoration:"underline"}}>USFDA Approved - </span> Alma's Soprano Titanium laser system boasts USFDA approval, affirming its reliability and efficacy in hair removal treatments. With cutting-edge technology, it guarantees care, precision, and overall well-being, meeting rigorous standards for medical device performance. </div>
                        <div className="text"><span style={{textDecoration:"underline"}}>Long-lasting Results - </span> By targeting hair follicles at the root, the Alma Soprano Titanium achieves long-lasting results, reducing the need for frequent maintenance sessions, and providing patients with smoother, hair-free skin.</div>
                        <div className="text"><span style={{fontWeight:"700"}}> Schedule Your Next Laser Hair Removal Session</span> with the Remarkable Soprano Titanium!</div>
                       
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

