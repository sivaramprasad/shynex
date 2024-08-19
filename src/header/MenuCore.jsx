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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import menu from "../assets/img/menu-black-24dp.svg";


import "./header.css";





export default function MenuCore() {

  const dispatch = useDispatch();

  const selectQuote = quote => {
    dispatch(selectedQuote(quote))
  }


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
                      <Link to={"/courses/"}>About Us <FiChevronDown /></Link>
                      <ul>



                        <div>

                          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              //  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>About Shynex</Typography>
                            </AccordionSummary>

                          </Accordion>
                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>           Shynex Advantage</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Shynex Technology</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Team Shynex</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Gallery</Typography>
                            </AccordionSummary>

                          </Accordion>


                        </div>

                      </ul>

                    </li>
                    <li>
                      <Link to={"/courses/"}>our departments <FiChevronDown /></Link>
                      <ul>



                        <div>

                          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              //  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>dermatology and
                                cosmetology</Typography>
                            </AccordionSummary>

                          </Accordion>
                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>gynaecology</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>ENT</Typography>
                            </AccordionSummary>

                          </Accordion>


                        </div>

                      </ul>

                    </li>

                    <li>
                      <Link to={"/courses/"}>Treatments <FiChevronDown /></Link>
                      <ul>



                        <div>

                          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              //  expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                              style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>General Dermatology Services</Typography>
                            </AccordionSummary>

                          </Accordion>
                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}> Cosmetic Dermatology Treatments</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Acne Treatments</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Skin Rejuvenation</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Hair and Scalp Treatments</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Medical Aesthetics</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Mole and Skin Cancer Checks</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Laser Treatments</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Body Contouring</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Medical Facials</Typography>
                            </AccordionSummary>

                          </Accordion>

                          <Accordion style={{ backgroundColor: "#000" }}
                          >
                            <AccordionSummary
                              // expandIcon={<ExpandMoreIcon style={{color: "#fff"}}/>}
                              aria-controls="panel2-content"
                              id="panel2-header" style={{ color: "#fff", minHeight: expanded ? "48px" : "48px" }}
                            >
                              <Typography className="mainc" style={{ color: "#fff", textTransform: "uppercase", fontSize: "13px", height: "20px", lineHeight: "20px", fontfamily: "Montserrat", fontweight: "600" }}>Anti Ageing Treatments</Typography>
                            </AccordionSummary>

                          </Accordion>
                        


                        </div>

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
                    <p>
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
                        <a href=""></a>
                      </span>
                    </p>
                    <Divider />
                    <div className="social-connect social-connect-mobile">
                      <div className="social-connect-inner">
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <img className="social-icon" alt="Facebook" />
                        </a>
                      </div>
                      <div className="social-connect-inner">
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <img className="social-icon" alt="Intsagram" />
                        </a>
                      </div>
                      <div className="social-connect-inner">
                        <a href="" target="_blank" rel="noopener noreferrer">
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
