import React from 'react'
import "./Admissions.css";
import HomeContent from "../../../content/HomeContent";
import { Link } from "react-router-dom";
import courseBanner from "../../../assets/img/banners/newban1.webp";

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
                    <h3 className="courses-title fadeInUp anime-delay">Admission Process</h3>

                    <p className='adminissionPTag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <ul className="process">
                        <li className="process__item">
                            <div id="infinity"><span className="process__number">01</span></div>

                            <span className="process__title">Process One</span>
                            <span className="process__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        </li>

                        <li className="process__item">
                            <div id="infinity"><span className="process__number">02</span></div>
                            <span className="process__title">Process Two</span>
                            <span className="process__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        </li>

                        <li className="process__item">
                            <div id="infinity"><span className="process__number">03</span></div>
                            <span className="process__title">Process Three</span>
                            <span className="process__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        </li>

                        <li className="process__item">
                            <div id="infinity"><span className="process__number">04</span></div>
                            <span className="process__title">Process Four</span>
                            <span className="process__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        </li>
                    </ul>

                    <p className='adminissionPTag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><button class=" three button brand size200 w-full sm:w-auto" style={{width: "180px", fontSize: "17px"}}>APPLY NOW</button></div>


                </div>

            

            

            
            </div>
            <HomeContent />
        </>
    )
}

Courses.propTypes = {

}

export default Courses;

