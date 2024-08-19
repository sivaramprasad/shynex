import React, { useRef } from 'react'
import "./BachelorsInComputerScienceGameDevelopment.css";
import HomeContent from "../../../content/HomeContent";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import courseBanner from "../../../assets/img/banners/CSGD.webp";
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
      <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
      <div className="courses-container">
        <Helmet>
          <title>Bachelor in Computer Science and Game Development</title>
          <meta name="description" content="Bachelor in Computer Science and Game Development " />
        </Helmet>

        <div className="courses-wrapper">
          <h3 className="courses-title fadeInUp anime-delay">Bachelor in Computer Science and Game Development</h3>





          <div className="CourseesOverView">
            <StickyBox offsetTop={90} offsetBottom={20} style={{width: '24%', marginRight: "3%"}}>
              <div className='sidebarview'>
                <ul>
                  <li><a href={"#Course-Overview"}>
                    <div
                      data-to-scrollspy-id="Course-Overview"
                      className="ss-item-demo-2"
                    >
                      Course Overview
                    </div>
                  </a></li>

                  <li><a href={"#Course-Objectives"}>
                    <div
                      data-to-scrollspy-id="Course-Objectives"
                      className="ss-item-demo-2"
                    >
                      Course Objectives
                    </div>
                  </a></li>

                  <li><a href={"#Curriculum"}>
                    <div
                      data-to-scrollspy-id="Curriculum"
                      className="ss-item-demo-2"
                    >
                      Curriculum
                    </div>
                  </a></li>

                  <li><a href={"#Beyond-The-Course"}>
                    <div
                      data-to-scrollspy-id="Beyond-The-Course"
                      className="ss-item-demo-2"
                    >
                      Beyond The Course
                    </div>
                  </a></li>

                  <li><a href={"#Career-Opportunities"}>
                    <div
                      data-to-scrollspy-id="Career-Opportunities"
                      className="ss-item-demo-2"
                    >
                      Career Opportunities
                    </div>
                  </a></li>

                  <li><a href={"#Featured-Mentors"}>
                    <div
                      data-to-scrollspy-id="Featured-Mentors"
                      className="ss-item-demo-2"
                    >
                      Featured Mentors
                    </div>
                  </a></li>

                  <li><a href={"#Why-BSP"}>
                    <div
                      data-to-scrollspy-id="Why-BSP"
                      className="ss-item-demo-2"
                    >
                      Why BSP
                    </div>
                  </a></li>

                  <li><a href={"#Why-BSP"}>
                    <div
                      data-to-scrollspy-id="Why-BSP"
                      className="ss-item-demo-2"
                    >
                      Enquire Now
                    </div>
                  </a></li>


                 
                  
                  <li><button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{width: "180px", fontSize: "17px"}}>Apply Now</button></li>
                </ul>

              </div>
            </StickyBox>
            <div style={{width: "70%"}}>
              <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                  <StyledBreadcrumb
                    component="a"
                    href="/"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                  />
                  <StyledBreadcrumb component="a" href="/courses/" label="Courses" />
                  <StyledBreadcrumb
                    label="Computer Science and Game Development"
                    component="a" href="/"
                  />
                </Breadcrumbs>
              </div>

              <div className="">
                <div
                // style={{
                //   position: "relative",
                //   overflowY: "scroll",
                //   height: "50vh",
                // }}
                >
                  <ScrollSpy
                    // parentScrollContainerRef={parentScrollContainerRef}
                    activeclassName="ss-active-demo-2"
                    offsetBottom={100}
                    scrollThrottle={80}
                    useBoxMethod
                  >
                    <div id="Course-Overview" backgroundColor="orange" height="150vh">
                      <h2 className='courseHeading'>Course Overview</h2>
                      <div className='courseUpdates'>
                        <ul>
                          <li><img src="https://cdn-icons-gif.flaticon.com/14240/14240884.gif" />
                            <p>Duration <p className='innerhd'> 4 Years</p></p></li>
                          <li><img src="https://cdn-icons-gif.flaticon.com/12340/12340745.gif" />
                            <p>Eligibility<p className='innerhd'>10+2</p></p></li>
                          <li><img src="https://cdn-icons-gif.flaticon.com/14313/14313978.gif" />
                            <p>Mode  <p className='innerhd'>Offline</p></p></li>
                          <li><img src="https://cdn-icons-gif.flaticon.com/11186/11186847.gif" />
                            <p>Hours <p className='innerhd'>2039</p></p></li>
                        </ul>
                      </div>
                      <p className='normaltext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
<p className='normaltext'>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                 
                    </div>
                    <div id="Course-Objectives" height="150vh" style={{background: "#fff", padding : "30px", borderRadius:'20px'}}>
                      <h2 className='courseHeading' style={{color: "#000", marginTop:"0px"}}>Course Objectives</h2>

                      <ul className='Objectives' style={{color: "#000"}}>
                        <li style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        
                        <li style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                      </ul>


                    </div>
                    <div id="Curriculum" backgroundColor="blue" height="150vh">
                      <h2 className='courseHeading'>Curriculum</h2>
                      <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <Tabs value={value} onChange={handleChange} variant="fullWidth"
                            aria-label="full width tabs example">
                            <Tab label="YEAR 1" {...a11yProps(0)} />
                            <Tab label="YEAR 2" {...a11yProps(1)} />
                            <Tab label="YEAR 3" {...a11yProps(2)} />
                            <Tab label="YEAR 4" {...a11yProps(3)} />
                          </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0} style={{paddingBottom:"0px", background:'#747C92',borderRadius:"50px",marginTop:"20px"}}>
                          <h3 className='courseHeading2'>Semister 1</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                          <h3 className='courseHeading2'>Semister 2</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1} style={{paddingBottom:"0px", background:'#747C92',borderRadius:"50px",marginTop:"20px"}}>
                          <h3 className='courseHeading2'>Semister 1</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                          <h3 className='courseHeading2'>Semister 2</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2} style={{paddingBottom:"0px", background:'#747C92',borderRadius:"50px",marginTop:"20px"}}>
                          <h3 className='courseHeading2'>Semister 1</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                          <h3 className='courseHeading2'>Semister 2</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3} style={{paddingBottom:"0px", background:'#747C92',borderRadius:"50px",marginTop:"20px"}}>
                          <h3 className='courseHeading2'>Semister 1</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                          <h3 className='courseHeading2'>Semister 2</h3>
                          <ul className='Objectives'>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                          </ul>
                        </CustomTabPanel>
                      </Box>
                    </div>
                    <div id="Beyond-The-Course" backgroundColor="blue" height="150vh" style={{background: "#fff", padding : "30px"}}>
                      <h2 className='courseHeading' style={{color: "#000",marginTop:"0px"}}>Beyond The Course</h2>

                      <p className='normaltext' style={{color: "#000"}}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                      <div className='courseUpdates1'>
                        <ul>
                          <li><img src="https://cdn-icons-gif.flaticon.com/14240/14240884.gif" />
                            <p style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></li>
                          <li><img src="https://cdn-icons-gif.flaticon.com/12340/12340745.gif" />
                            <p style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></li>
                          <li><img src="https://cdn-icons-gif.flaticon.com/14313/14313978.gif" />
                            <p style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></li>
                          <li><img src="https://cdn-icons-gif.flaticon.com/11186/11186847.gif" />
                            <p style={{color: "#000"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></li>
                        </ul>
                      </div>

                    </div>

                    <div id="Career-Opportunities" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Career Opportunities</h2>

                      <ul className='Objectives secobj' style={{color:'#000'}}>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                      </ul>
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" fdprocessedid="6qkh5h" style={{width: "400px", fontSize: "17px"}}>DOWNLOAD CAREER GUIDE</button>
                      </div>

                    </div>


                    <div id="Featured-Mentors" backgroundColor="brown" height="150vh">
                      <h2 className='courseHeading'>Featured Mentors</h2>

                      <div className="card__collection clear-fix">
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                         
                        </div>
                        <div className="cards cards--two">
                          <img src={men2} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>
                        <div className="cards cards--two">
                          <img src={mentor1} className="img-responsive" alt="Cards Image" />
                          <span className="cards--two__rect"></span>
                          <span className="cards--two__tri"> <ul className="cards__list">
                            <li><TfiFacebook /></li>
                            <li><TfiLinkedin /></li>
                          </ul></span>
                          <p>Mentor Name</p><br/>
                          <p style={{lineHeight:"77px"}}>Designation</p>
                        </div>

                      </div>


                    </div>
                  </ScrollSpy>
                </div>
              </div>


            </div>
          </div>




        </div>






      </div>
      <div id="Why-BSP">
        <HomeContent />
      </div>
    </>
  )
}

Courses.propTypes = {

}

export default Courses;

