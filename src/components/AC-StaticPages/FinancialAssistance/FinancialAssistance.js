import React from 'react'
import "./FinancialAssistance.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import courseBanner from "../../../assets/img/banners/newban1.webp";
import Marquee from "react-fast-marquee";
import recuiters1 from "../../../assets/img/partners/1.webp";
import recuiters2 from "../../../assets/img/partners/2.webp";
import recuiters3 from "../../../assets/img/partners/3.webp";
import recuiters4 from "../../../assets/img/partners/4.webp";
import recuiters5 from "../../../assets/img/partners/5.webp";
import recuiters6 from "../../../assets/img/partners/6.webp";
import recuiters7 from "../../../assets/img/partners/7.webp";
import recuiters8 from "../../../assets/img/partners/8.webp";
import recuiters9 from "../../../assets/img/partners/9.webp";
import recuiters10 from "../../../assets/img/partners/10.webp";
import phoneIcon from "../../../assets/img/10051249.gif";
import mailIcon from "../../../assets/img/8717939.gif";
import insurance from "../../../assets/img/7920927.gif";
import cash from "../../../assets/img/15579064.gif";
import time from "../../../assets/img/15370767.gif";
import love from "../../../assets/img/15595832.gif";
import required from "../../../assets/img/16678022.gif";
import charges from "../../../assets/img/15575645.gif";
import money from "../../../assets/img/12147269.gif";






import { Helmet } from "react-helmet";

function Courses(props) {
    return (
        <>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            <div className="courses-container">
                <Helmet>
                    <title>Financial Assistance</title>
                    <meta name="description" content="Financial Assistance" />
                </Helmet>

                <div className="courses-wrapper">
                    <h3 className="courses-title fadeInUp anime-delay">Financial Assistance</h3>

                    <p className='adminissionPTag1'>Financing your education shouldn't hold you back from achieving your dreams. At Backstage Pass, we're dedicated to providing accessible and affordable loan options to empower your academic journey.
                    </p>

                    

                    <h3 style={{marginBottom: "10px"}} className="courses-title fadeInUp anime-delay">Our Partners</h3>
                </div>

            

            

            
            </div>

            <Marquee speed={100} style={{ Padding: "0px 20px" }} className='recuitersList'>
                            <img alt="rec1" src={recuiters1} width={"300"} height={"81"} />
                            <img alt="rec2" src={recuiters2} width={"300"} height={"81"} />
                            <img alt="rec3" src={recuiters3} width={"300"} height={"81"} />
                            <img alt="rec4" src={recuiters4} width={"300"} height={"81"} />
                            <img alt="rec5" src={recuiters5} width={"300"} height={"81"} />
                            <img alt="rec6" src={recuiters6} width={"300"} height={"81"} />
                            <img alt="rec7" src={recuiters7} width={"300"} height={"81"} />
                            <img alt="rec8" src={recuiters8} width={"300"} height={"81"} />
                            <img alt="rec9" src={recuiters9} width={"300"} height={"81"} />
                            <img alt="rec10" src={recuiters10} width={"300"} height={"81"} />

                        </Marquee>
                        <h3 className="financial-title fadeInUp anime-delay">Benefits</h3>

        
                        <div className='courseUpdates3'>
                            
                        <ul>
                          <li><img src={love} />
                            <p style={{color: "#000"}}>Zero<br/>Interest Rate</p></li>
                          <li><img src={required} />
                            <p style={{color: "#000"}}>No Collateral<br/>Required</p></li>
                  
                        </ul>
                      </div> <div className='courseUpdates3'>
                        <ul>
                          <li><img src={charges} />
                            <p style={{color: "#000"}}>No Hidden<br/>Charges</p></li>
                          <li><img src={money} />
                            <p style={{color: "#000"}}>No Cost<br/>EMIs</p></li>
                  
                        </ul>
                      </div>

                        <div className="courses-container">
                
                <div className="courses-wrapper">
                    <h3 className="courses-title fadeInUp anime-delay">What’s More?</h3>
                    <p className='adminissionPTag1'>Financing your education shouldn't hold you back from achieving your dreams. At Backstage Pass, we're dedicated to providing accessible and affordable loan options to empower your academic journey.
                    </p>

                    <ul className='benfits'>
                        <li><div className='benfitIcon'><img src={insurance} /></div> <div className='benfitContent'>Accidental insurance coverage of INR 5L
                        </div></li>
                        <li><div className='benfitIcon'><img src={cash} /></div> <div className='benfitContent'>Voucher worth INR 10,000

                        </div></li>
                        <li><div className='benfitIcon'><img src={time} /></div> <div className='benfitContent'>Quick loan processing within 24 hours

                        </div></li>
                       
                       
                    </ul>
                    <br/>

                    <p className='adminissionPTag1'>For those who prefer to apply student loan through nationalized banks in India, we'll provide necessary documents to ensure a seamless application process.</p>

                    <h3 className="courses-title fadeInUp anime-delay">Loan Application Process</h3>

                    <ul className="process">
                        <li className="process__item">
                            <div id="infinity"><span className="process__number">01</span></div>

                            <span className="process__title">Application Form</span>
                            <span className="process__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        </li>

                        <li className="process__item">
                            <div id="infinity"><span className="process__number">02</span></div>
                            <span className="process__title">Upload Files</span>
                            <span className="process__subtitle" style={{textAlign: "left"}}>
                              Upload the required documents:
                              <ul style={{margin: "20px 0px"}}>
                                <li style={{listStyle: "inside", marginBottom: "7px"}}>6 months' bank statement</li>
                                <li style={{listStyle: "inside", marginBottom: "7px"}}>3 months' pay slips</li>
                                <li style={{listStyle: "inside"}}>Pan and Aadhar copy</li>
                              </ul>


</span>
                        </li>

                        <li className="process__item">
                            <div id="infinity"><span className="process__number">03</span></div>
                            <span className="process__title">Processing</span>
                            <span className="process__subtitle">Processing of the loan amount will be done within maximum 24 working hours </span>
                        </li>

                        <li className="process__item">
                            <div id="infinity"><span className="process__number">04</span></div>
                            <span className="process__title">Disbursement</span>
                            <span className="process__subtitle">Disbursement Of the loan will take another 24 working hours after approval
                            </span>
                        </li>
                    </ul>

                    <p className='adminissionPTag1'>Take the first step towards securing your academic future. Apply now and let us help you achieve your goals!</p>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><button class=" three button brand size200 w-full sm:w-auto" style={{width: "320px", fontSize: "17px"}}>APPLY FOR LOAN NOW</button></div>


                    <h3 className="courses-title fadeInUp anime-delay">Got Questions? Ask Us</h3>

                    <ul className="askus">
                      <li><img src={phoneIcon} /> <p>Call Us</p></li>
                      <li><img src={mailIcon} /> <p>Mail Us</p></li>
                    </ul>
                    </div>

                    </div>
            <HomeContent />
        </>
    )
}

Courses.propTypes = {

}

export default Courses;

