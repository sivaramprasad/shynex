import React, { useRef } from 'react'
import "./TeamShynex.css";
import HomeContent from "../../../content/HomeContent";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import courseBanner from "../../../assets/img/banners/about-us.png";
import StickyBox from "react-sticky-box";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ScrollSpy from "react-ui-scrollspy";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { FiArrowRight } from "react-icons/fi";
import mentor1 from "../../../assets/img/test/mentor1.webp"
import men2 from "../../../assets/img/test/men2.webp"


import { Helmet } from "react-helmet";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const StyledBreadcrumb = styled(Chip)(({ theme, Props }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Courses(props) {

  const parentScrollContainerRef = useRef < HTMLDivElement | null > (null);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>

                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Team Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
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

