import React from 'react'
import "./Courses.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import courseBanner from "../../../assets/img/banners/courses.webp";
import csgd from "../../../assets/img/test/csgdc.webp"
import arvr from "../../../assets/img/test/arvr.webp"
import gad from "../../../assets/img/test/game-arts-design-course.webp"
import msc from "../../../assets/img/test/msc.webp"
import dip3 from "../../../assets/img/test/dip3.webp"
import diploma from "../../../assets/img/test/diploma.webp"
import diploma2 from "../../../assets/img/test/diploma2.webp"
import onl from "../../../assets/img/test/online.webp"

import { Helmet } from "react-helmet";

function Courses(props) {
    return (
        <>
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            <div className="courses-container">
                <Helmet>
                    <title>Courses</title>
                    <meta name="description" content="Courses" />
                </Helmet>

                <div className="courses-wrapper">
                    <h3 className="courses-title fadeInUp anime-delay">BACHELOR’S COURSES</h3>



                    <div className='infinite-scroll-component'>
                        <div id="curve" className="card" style={{background: `url(${csgd})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"><Link to={"/bachelors-in-computer-science-game-development/"}>Computer Science & Game Development</Link></div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${arvr})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook">Game Art & Design</div>
                                    <div className="connection twitter">The Game Art and Design course curriculum is prepared by Experts of the industry keeping in mind the challenges & opportunities a designer will face during the overall development process.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${gad})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                            <div className="connections">
                                    <div className="connection facebook">Augmented Reality and Virtual Reality</div>
                                    <div className="connection twitter">Bachelors in Augmented Reality and Virtual Reality course curriculum is prepared by industry experts keeping in mind the skill set required for AR and VR development with all the required foundation courses along with subjects related to game design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>



                </div>

                <div className="courses-wrapper">
                    <h3 className="courses-title fadeInUp anime-delay">MASTER’S COURSES</h3>



                    <div className='infinite-scroll-component'>
                    <div id="curve" className="card" style={{background: `url(${msc})`, backgroundPosition: "left"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">M.Sc - Game Technology</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        
                    </div>



                </div>

                <div className="courses-wrapper">
                    <h3 className="courses-title fadeInUp anime-delay">DIPLOMA COURSES</h3>



                    <div className='infinite-scroll-component'>
                    <div id="curve" className="card" style={{background: `url(${dip3})`, backgroundPosition: "right"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Game Development</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${diploma})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Advanced Diploma in AR & VR</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                        <div id="curve" className="card" style={{background: `url(${diploma2})`, backgroundPosition: "left"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook"> 3D Game Art & Design</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>



                </div>

                <div className="courses-wrapper">
                    <h3 className="courses-title fadeInUp anime-delay">ONLINE COURSES</h3>



                    <div className='infinite-scroll-component'>
                    <div id="curve" className="card" style={{background: `url(${onl})`, backgroundPosition: "center"}}>
                            <div className="footercard">
                                <div className="connections">
                                    <div className="connection facebook">Advanced Diploma in Game Development</div>
                                    <div className="connection twitter">We offer Interdisciplinary bachelor program in Computer Science and Game Development. This program curriculum is prepared by industry experts and academicians to nurture the fundamental knowledge in Computer Science followed up by Game Programming and Design.</div>
                                </div>
                            </div>
                            <div className="card-blur"></div>
                        </div>
                    </div>



                </div>
            </div>
            <HomeContent />
        </>
    )
}

Courses.propTypes = {

}

export default Courses;

