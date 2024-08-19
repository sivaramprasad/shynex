import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";
import LazyLoad from "react-lazyload";

import { PiDiscordLogoBold } from "react-icons/pi";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
import ReactWhatsappButton from "react-whatsapp-button";




import { CiPhone, CiMail } from "react-icons/ci";


import "./Footer.css"

function Footer() {
  
  return (
    <>
    
<section id="page-need_guidance-section" class="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden rammm" style={{minHeight: "450px"}} data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance">
  
  
<div class="min-h-full h-full w-full container-full relative z-[3] py-4">
  <div class="sm:max-w-[480px] lg:max-w-[560px]" style={{maxWidth: "100%"}}>
    
    <div class="">
      







    <div className="grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5 " style={{width : "100%"}}>






   
  
          <div className="footer-wrapper">
          
            <div className="floatingIcon">
            <div className="App">
      <ReactWhatsappButton
        countryCode="91"
        phoneNumber="8291573456"
        animated
        style={{left: "2rem", right:"0rem"}}
        className="whatsappsivak"
      />
      
    </div>
</div>

            <div className="foot-details">
              <LazyLoad height={76} offset={100} fadein={true}>
              <div className="foot-item fadeInUp anime-delay3">
                  <h3 className="footer-title">Quick Links</h3>
                  <div className="contact-wrapper">
                    <div className="contact-wrapper-inner">
                      
                      <div>
                        <p><a href="">About Shynex</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="">Shynex Advantage</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">Privacy Policy</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">Terms and Conditions</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">Sitemap</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </LazyLoad>
            </div>

            <div className="foot-details">
              <LazyLoad height={76} offset={100} fadein={true}>
              <div className="foot-item fadeInUp anime-delay3">
                  <h3 className="footer-title">Treatments</h3>
                  <div className="contact-wrapper">
                    <div className="contact-wrapper-inner">
                      
                      <div>
                        <p><a href="">General Dermatology Services</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="">Acne Treatments</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">Skin Rejuvenation</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">Medical Aesthetics</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">Body Contouring</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </LazyLoad>
            </div>
            <div className="foot-details">
              <LazyLoad height={76} offset={100} fadein={true}>
              
                <div className="foot-item fadeInUp anime-delay3">
                  <h3 className="footer-title">Contact Info</h3>
                  <div className="contact-wrapper">
                   
                    <div className="contact-wrapper-inner">
                     
                      <div>
                        <p><a href="tel:8977945702">Unit G6A-2, Plot No1-98/4/1-13, 28&29, Jain Sadguru Images Capital Park, Image Garden Road, Madhapur, Hyderabad, Telangana - 500081</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                      <CiPhone />
                      <div>
                        <p><a href="tel:8977945702">+91-8008002795</a></p>
                      </div>
                    </div>
                    <div className="contact-wrapper-inner">
                      <CiMail  />
                      <div>
                        <p><a href="mailto:info@backstagepass.co.in">info@backstagepass.co.in</a></p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </LazyLoad>
            </div>

          
          </div>
        </div>
      </div>
      <div>
              <LazyLoad height={76} offset={100} fadein={true}>
              <div className="foot-item fadeInUp anime-delay3">
                  <div className="contact-wrapper ftr">
                  <div className="contact-wrapper-inner md1">
                  <PiDiscordLogoBold />

                     
                    </div>
                    <div className="contact-wrapper-inner md2">
                    <PiInstagramLogoBold />

                    </div>
                    <div className="contact-wrapper-inner md3">
                    <PiFacebookLogoBold />
                      
                    </div>
                    <div className="contact-wrapper-inner md4">
                    <PiYoutubeLogoBold />
       
                    </div>
                    <div className="contact-wrapper-inner md4">
                    <PiTwitterLogoBold />
                     
                    </div>
                   
                  </div>
                  <LazyLoad height={76} offset={100} fadein={true}>
              <div className="text-center foot-content fadeInUp anime-delay2">© 2024 All Rights Reserved</div>
            </LazyLoad>
                </div>
              </LazyLoad>
            </div>
      
   









   
  </div>
</div>
</section>
</>
//     <footer className="page-footer">
//       <div className="footer-container">
//         <div className="row">
//           <div className="footer-wrapper">
          
//             <div className="floatingIcon">
//             <FloatingButton backgroundColor="#ffffff" color="#ffffff" className="sivatet">
//   <Item
//     imgSrc={"https://cdn3.iconfinder.com/data/icons/social-networks-34/96/social-18-256.png"}
//     onClick={() => {
//       console.log("callback function here");
//     }}
  
//   />
//   <Item
//     imgSrc={"https://cdn1.iconfinder.com/data/icons/multimedia-and-interface-flat-style-1/32/Multimedia_Telephone_call_contact_phone_ringing_multimedia-64.png"}
//     onClick={() => {
//       console.log("callback function here");
//     }}
   
//   />
// </FloatingButton>
// </div>

//             <div className="foot-details">
//               <LazyLoad height={76} offset={100} fadein={true}>
//               <div className="foot-item fadeInUp anime-delay3">
//                   <h3 className="footer-title">Quick Links</h3>
//                   <div className="contact-wrapper">
//                     <div className="contact-wrapper-inner">
                      
//                       <div>
//                         <p><a href="">Blogs</a></p>
//                       </div>
//                     </div>
//                     <div className="contact-wrapper-inner">
                     
//                       <div>
//                         <p><a href="">Brochure</a></p>
//                       </div>
//                     </div>
//                     <div className="contact-wrapper-inner">
                     
//                       <div>
//                         <p><a href="mailto:info@backstagepass.co.in">E-book</a></p>
//                       </div>
//                     </div>
//                     <div className="contact-wrapper-inner">
                     
//                       <div>
//                         <p><a href="mailto:info@backstagepass.co.in">Why the Gaming Industry?</a></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//               </LazyLoad>
//             </div>
//             <div className="foot-details">
//               <LazyLoad height={76} offset={100} fadein={true}>
              
//                 <div className="foot-item fadeInUp anime-delay3">
//                   <h3 className="footer-title">Contact Info</h3>
//                   <div className="contact-wrapper">
                   
//                     <div className="contact-wrapper-inner">
//                       <CiPhone />
//                       <div>
//                         <p><a href="tel:8977945702">+91-8008002794</a></p>
//                       </div>
//                     </div>
//                     <div className="contact-wrapper-inner">
//                       <CiPhone />
//                       <div>
//                         <p><a href="tel:8977945702">+91-8008002795</a></p>
//                       </div>
//                     </div>
//                     <div className="contact-wrapper-inner">
//                       <CiMail  />
//                       <div>
//                         <p><a href="mailto:info@backstagepass.co.in">info@backstagepass.co.in</a></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </LazyLoad>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//               <LazyLoad height={76} offset={100} fadein={true}>
//               <div className="foot-item fadeInUp anime-delay3">
//                   <div className="contact-wrapper ftr">
//                   <div className="contact-wrapper-inner md1">
//                       <img src={discord} />
                     
//                     </div>
//                     <div className="contact-wrapper-inner md2">
//                     <img src={instagram} />
                    
//                     </div>
//                     <div className="contact-wrapper-inner md3">
//                       <img src={facebook}  />
                      
//                     </div>
//                     <div className="contact-wrapper-inner md4">
//                     <img src={youtube} />
                     
//                     </div>
//                     <div className="contact-wrapper-inner md4">
//                     <img src={tweet} />
                     
//                     </div>
                   
//                   </div>
//                   <LazyLoad height={76} offset={100} fadein={true}>
//               <div className="text-center foot-content fadeInUp anime-delay2">© 2024 All Rights Reserved</div>
//             </LazyLoad>
//                 </div>
//               </LazyLoad>
//             </div>
      
//     </footer>
  );
}

export default withStyles(footerStyle)(Footer);
