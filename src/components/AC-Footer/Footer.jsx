import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
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

      <section id="page-need_guidance-section" class="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden rammm" style={{ minHeight: "450px" }} data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance">


        <div class="min-h-full h-full w-full container-full relative z-[3] py-4">
          <div class="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>

            <div class="">








              <div className="grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-5 " style={{ width: "100%" }}>








                <div className="footer-wrapper">

                  <div className="floatingIcon">
                    <div className="App">
                      <ReactWhatsappButton
                        countryCode="91"
                        phoneNumber="8291573456"
                        animated
                        style={{ left: "2rem", right: "0rem" }}
                        className="whatsappsivak"
                        chatMessage="Need a consultation? Click the WhatsApp chat to book now!"
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
                              <p><Link to={"/aboutus/"}>About Shynex</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Shynex Advantage</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Blog</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Sitemap</Link></p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </LazyLoad>
                  </div>

                  <div className="foot-details">
                    <LazyLoad height={76} offset={100} fadein={true}>
                      <div className="foot-item fadeInUp anime-delay3">
                        <h3 className="footer-title">Shynex Technology</h3>
                        <div className="contact-wrapper">
                          
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Alma Soprano Titanium</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Alma Harmony XL PRo</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Morpheus 8</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">

                            <div>
                              <p><Link to={"/aboutus/"}>Crustal PRO</Link></p>
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
                              <p><Link to={"/aboutus/"}>Unit G6A-2, Plot No1-98/4/1-13, 28&29, Jain Sadguru Images Capital Park, Image Garden Road, Madhapur, Hyderabad, Telangana - 500081</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">
                            <CiPhone />
                            <div>
                              <p><Link to={"/aboutus/"}>+91 82915 73456</Link></p>
                            </div>
                          </div>
                          <div className="contact-wrapper-inner">
                            <CiMail />
                            <div>
                              <p><Link to={"/aboutus/"}>info@shynex.in</Link></p>
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
                    {/* <div className="contact-wrapper-inner md1">
                    Privacy Policy | 


                    </div>
                    <div className="contact-wrapper-inner md2">
                    Terms and Conditions | 

                    </div>
                    <div className="contact-wrapper-inner md3">
                    Sitemap

                    </div> */}
                    
                    <div className="disclaimers"><b>Disclaimer</b> : Treatment results may vary from person to person, influenced by individual health, lifestyle, and environmental factors. Kindly do not expect identical skin and hair outcomes&nbsp;as&nbsp;others.</div>

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
    //                         <p><Link to={"/aboutus/"}>Blogs</Link></p>
    //                       </div>
    //                     </div>
    //                     <div className="contact-wrapper-inner">

    //                       <div>
    //                         <p><Link to={"/aboutus/"}>Brochure</Link></p>
    //                       </div>
    //                     </div>
    //                     <div className="contact-wrapper-inner">

    //                       <div>
    //                         <p><Link to={"/aboutus/"}>E-book</Link></p>
    //                       </div>
    //                     </div>
    //                     <div className="contact-wrapper-inner">

    //                       <div>
    //                         <p><Link to={"/aboutus/"}>Why the Gaming Industry?</Link></p>
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
    //                         <p><Link to={"/aboutus/"}>+91-8008002794</Link></p>
    //                       </div>
    //                     </div>
    //                     <div className="contact-wrapper-inner">
    //                       <CiPhone />
    //                       <div>
    //                         <p><Link to={"/aboutus/"}>+91-8008002795</Link></p>
    //                       </div>
    //                     </div>
    //                     <div className="contact-wrapper-inner">
    //                       <CiMail  />
    //                       <div>
    //                         <p><Link to={"/aboutus/"}>info@backstagepass.co.in</Link></p>
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
