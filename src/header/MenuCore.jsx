import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuLogo from "./MenuLogo.jsx";
import Divider from '@material-ui/core/Divider';
import { selectedQuote } from "../redux/actions/quotesAction";
import { selectedTab } from "../redux/actions/tabAction";
import home_icon from "../assets/img/home.svg"
import quote_icon from "../assets/img/quote.svg"
import shield_icon from "../assets/img/security.svg"
import content_icon from "../assets/img/news.svg";
import { FiChevronDown } from "react-icons/fi";


import menu from "../assets/img/menu-black-24dp.svg";


import "./header.css";





export default function MenuCore() {

  const dispatch = useDispatch();

  const selectQuote = quote => {
    dispatch(selectedQuote(quote))
  }


 
  const selectTab = index => {
    dispatch(selectedTab(index))
  }

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const [left, setLeft] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeft(open);
  };


  return (
    <>
      {
        !isMobileState ?
          <div className="head-container">
            <div className="head-wrapper">
              <MenuLogo />
              <div>


                <div id='AnaMenu'>
                  <ul id='nav'>
                    <li><Link to={"/"} onClick={() => selectTab(0)}>Home</Link></li>
                    <li>
                      <Link to={"/aboutus/"}>About Us <FiChevronDown /></Link>
                      <ul style={{ width: "250px"}}>



                    
                              
                              <div className="mainc"><Link to={"/aboutus/"}>About Shynex</Link></div>
                           

                         
                         
                              <div className="mainc"><Link to={"/why-choose-shynex/"}>Shynex Advantage</Link></div>
                     


                          
                              <div className="mainc" ><Link to={"/alma-soprano-titanium/"}>Shynex Technology <FiChevronDown /></Link>
                              
                              <ul>
                                <li>
                                <div className="mainc"><Link style={{fontSize: "13px"}} to={"/alma-soprano-titanium/"}>Alma Soprano Titanium</Link></div>
                                <div className="mainc"><Link style={{fontSize: "13px"}} to={"/alma-harmony-xl-pro/"}>Alma Harmony XL PRo</Link></div>
                                <div className="mainc"><Link style={{fontSize: "13px"}} to={"/morpheus8/"}>Morpheus 8</Link></div>
                                <div className="mainc"><Link style={{fontSize: "13px"}} to={"/cristal-pro/"}>Crustal PRO
                                </Link></div>
                                </li>
                                </ul>
                              </div>
                            

                         

                              <div className="mainc"><Link to={"/team-shynex-expert-dermatologists/"}>Team Shynex</Link></div>
                            

                          
                              

                              <div className="mainc"><Link to={"/gallery-shynex-clinic/"}>Gallery</Link></div>
                           

                        

                      </ul>

                    </li>
                    <li>
                      <Link to={"/dermatology-and-cosmetology/"}>our departments <FiChevronDown /></Link>
                      <ul style={{ width: "320px"}}>



                      
                              <div className="mainc"><Link to={"/dermatology-and-cosmetology/"}>dermatology and
                                cosmetology</Link></div>
                             
                              {/* <div className="mainc"><Link to={"/dermatology-and-cosmetology/"}>gynaecology</Link></div>
                             
                              <div className="mainc"><Link to={"/dermatology-and-cosmetology/"}>ENT</Link></div> */}
                            

                      </ul>

                    </li>

                    <li>
                      <Link to={"/courses/"}>Treatments <FiChevronDown /></Link>
                      <ul style={{ width: "350px"}}>


                              <div className="mainc"><Link to={"/general-dermatology-services/"}>General Dermatology Services</Link></div>
                            
                              < div className="mainc"><Link to={"/cosmetic-dermatology-treatments/"}> Cosmetic Dermatology Treatments</Link></ div>
                            
                              < div className="mainc"><Link to={"/acne-treatments/"}>Acne Treatments</Link></ div>
                            
                              < div className="mainc">  <Link to={"/skin-rejuvenation-youthful-skin/"}>Skin Rejuvenation</Link></ div>
                            
                              < div className="mainc"><Link to={"/hair-scalp-treatments/"}>Hair and Scalp Treatments</Link></ div>
                            
                              < div className="mainc"><Link to={"/medical-aesthetics-enhance-appearance/"}>Medical Aesthetics</Link></ div>
                              
                            
                              < div className="mainc"><Link to={"/mole-skin-cancer-checks/"}>Mole and Skin Cancer Checks</Link></ div>
                            
                           
                              < div className="mainc"><Link to={"/laser-treatments/"}>Laser Treatments</Link></ div>
                              
                            
                              < div className="mainc"><Link to={"/body-contouring/"}>Body Contouring</Link></ div>
                           
                            
                              < div className="mainc"><Link to={"/medical-facials-professional-skin-care/"}>Medical Facials</Link></ div>
                              
                           
                              < div className="mainc"><Link to={"/anti-aging-treatments/"}>Anti Ageing Treatments</Link></ div>
                              
                            
                      </ul>

                    </li>
                   

                    <li>
                      <Link to={""}>Blog</Link>

                    </li>

                    <li>
                      <Link to={"/contactus/"}>Contact us</Link>

                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="head-container">
            <div className="mobile-menu">
              <img className="mt-menu-icon" src={menu} alt="menú" onClick={toggleDrawer(true)} />
              <MenuLogo />
            </div>
            <SwipeableDrawer
              open={left}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <div className="mobile-menu-block">
                <div className="mobile-menu-wrapper">
                  <ul
                    className="mobile-menumt"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <li>
                      <img className="mobile-menu-icon" src={home_icon} alt="Inicio" />
                      <Link to={"/"}>Inicio</Link>
                    </li>
                    <Divider />
                    <li>
                      <img className="mobile-menu-icon" src={shield_icon} alt="Tipos de Seguros" />
                      <Link to={""} onClick={() => selectTab(0)}>Tipos de Seguros</Link>
                    </li>
                    <Divider />
                    <li>
                      <img className="mobile-menu-icon" src={quote_icon} alt="Cotice" />
                      <Link to={"/cotice/"} onClick={() => selectQuote(null)}>Cotice</Link>
                    </li>
                    <Divider />
                    <li>
                      <img className="mobile-menu-icon" src={content_icon} alt="Sabías que" />
                      <Link to={"/sabías-que/"}>Sabías que </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="mobile-menu-footer"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <div className="menu-divider"></div>
                  <MenuLogo />
                  <div className="mobile-menu-footer-wrapper">
                    {/* <p>
                      <img className="icons" alt="" />
                      <span>
                        <a href="t"></a>
                      </span>
                    </p>
                    <p>
                      <img className="icons" alt="bandeja de entrada" />
                      <span>
                        <Link onClick={() => selectTab(0)}></Link>
                      </span>
                    </p>
                    <p>
                      <img className="icons" alt="" />
                      <span>
                        <a href="/aboutus/"></a>
                      </span>
                    </p> */}
                    <Divider />
                    <div className="social-connect social-connect-mobile">
                      <div className="social-connect-inner">
                        <a href="/aboutus/" target="_blank" rel="noopener noreferrer">
                          <img className="social-icon" alt="Facebook" />
                        </a>
                      </div>
                      <div className="social-connect-inner">
                        <a href="/aboutus/" target="_blank" rel="noopener noreferrer">
                          <img className="social-icon" alt="Intsagram" />
                        </a>
                      </div>
                      <div className="social-connect-inner">
                        <a href="/aboutus/" target="_blank" rel="noopener noreferrer">
                          <img className="social-icon" alt="Intsagram" />
                        </a>
                      </div>
                    </div>
                    <p style={{ justifyContent: "center", marginTop: "0", textAlign: "center" }}></p>
                  </div>
                </div>
              </div>
            </SwipeableDrawer>
          </div>
      }
    </>
  );
}
