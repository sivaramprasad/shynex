import React from 'react'
import "./TeamShynex.css";
import HomeContent from "../../../content/HomeContent";
import courseBanner from "../../../assets/img/banners/about-us.webp";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import mentor1 from "../../../assets/img/test/mentor1.webp"
import men2 from "../../../assets/img/test/men2.webp"


import { Helmet } from "react-helmet";



function Courses(props) {

 


  return (
    <>
    <Helmet>
          <title>Best Dermatologists & Cosmetologists in Hyderabad| Shynex Team</title>
          <meta name="description" content="Get to know our skilled team of dermatologists and cosmetologists. Our experienced skin doctors are dedicated to providing exceptional care and personalized treatment plans." />
          <meta name="keywords" content="" />
        </Helmet>
      <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
      <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Team Shynex</h1>
            </div>
      <div>
        

        <div>
          

          



          
                 
                    
                    
                  
                 <div id="Featured-Mentors" backgroundColor="brown" height="150vh">
                     <br/>
                     <br/>

                      <div className="card__collection infinite-scroll-component clear-fix">
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>

                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>

                        

                      </div>


                    </div>
                  <br/><br/>


                  
                 
              



        </div>






      </div>
      
        <HomeContent />
      
    </>
  )
}

Courses.propTypes = {

}

export default Courses;

