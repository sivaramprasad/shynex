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
<div className="sec-title">
                            <h1 className='tagline' style={{ color: "#000"}}>CRISTAL PRO </h1>
                        </div>
                        <div className="text">
                        Now you can positively say goodbye to stubborn fat and hello to a more sculpted, and confident you. How? At Shynex, we have brought you an innovative USFDA approved technology, Cristal PRO - Medical Cryolipolysis.</div>
                        <div className="text"> 
Cristal PRO represents the forefront of cutting-edge technology in non-invasive body contouring. You can now experience remarkable body transformation with little discomfort and recovery time. With the power of Cristal PRO, we are setting a new standard in sculpting your body effortlessly and with utmost safety.

</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>What is Cristal PRO? </h2>

<div className="text"> 
Cristal PRO represents the forefront of cutting-edge technology in non-invasive body contouring. You can now experience remarkable body transformation with little discomfort and recovery time. With the power of Cristal PRO, we are setting a new standard in sculpting your body effortlessly and with utmost safety.


</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Benefits of Cristal PRO:  </h2>

                   <ul style={{marginLeft:"20px"}}>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Non-Invasive:</span> Bid farewell to surgical procedures and hello to non-invasive fat reduction. With Cristal PRO, there's no need for incisions, anaesthesia, or lengthy recovery times.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Effective Results: </span>Experience noticeable reductions in fat bulges and a more sculpted physique after just a few sessions. Cristal PRO delivers consistent, reliable results that you can see and feel.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Minimal Discomfort:</span> Unlike traditional liposuction or other invasive procedures, Cristal PRO is virtually painless. Most clients report only mild sensations of cold and pressure during treatment.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     No Recovery Period:</span>With Cristal PRO, there's no need to put your life on hold. Resume your daily activities immediately after each session without any downtime or restrictions.</div>
                     </li>
                     <li style={{listStyle:"disc"}}>
                     <div className="text"><span style={{fontWeight:"700"}}>
                     Customizable Treatment: </span>Whether you're targeting love handles, belly fat, thighs, or arms, Cristal PRO offers customizable applicators to address specific areas of concern for each individual.</div>
                     </li>
                  </ul>
                  <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>How Does Cristal PRO Work?</h2>

<div className="text"> 
Cristal PRO harnesses the power of cryolipolysis, a proven technology that selectively targets and freezes fat cells while leaving surrounding tissue unharmed. During treatment, the targeted area is gently vacuumed into the Cristal PRO applicator, where controlled cooling is applied. This cooling process crystallizes the fat cells, triggering a natural cell death known as apoptosis. Over time, the body naturally eliminates these damaged fat cells, revealing a more contoured body shape.
</div>
<h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Areas Cristal PRO Targets:</h2>
<ul style={{marginLeft:"20px"}}>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Abdomen</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Flanks (Love Handles)</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Thighs</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Buttocks</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Arms</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Double Chin</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Bra Fat</div>
                        </li>
                        <li style={{listStyle:"disc"}}>
                        <div className="text">Back Fat</div>
                        </li>
                     </ul>
                     <h2 style={{fontWeight:"700",fontSize: "25px",color: "#000",textAlign: "left"}}>Areas Cristal PRO Targets:</h2>
                     <div className="text"> 
                     Join the countless individuals who have achieved their body goals at Shynex with Cristal PRO. Our clients rave about the transformative results and the confidence boost that comes with a more sculpted physique. Let your stubborn fat melt away and watch yourself become slimmer every day!
</div>
<div className="text"><span style={{fontWeight:"700"}}>
Contact us today </span> to schedule your consultation and take the first step towards a happier, healthier you.</div>
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

