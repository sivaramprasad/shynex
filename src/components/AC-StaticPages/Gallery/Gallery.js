import React, { useRef } from 'react'
import "./Gallery.css";
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
import { ImageGallery } from "overlay-image-gallery";


import { Helmet } from "react-helmet";



function Courses(props) {

  const images = [
    "https://www.backstagepass.co.in/test/Shynex-48.jpg",
    "https://www.backstagepass.co.in/test/Shynex-101.jpg",
    "https://www.backstagepass.co.in/test/Shynex-110.jpg",
    "https://www.backstagepass.co.in/test/Shynex-112.jpg",
    "https://www.backstagepass.co.in/test/Shynex-17.jpg",
    "https://www.backstagepass.co.in/test/Shynex-27.jpg",
    "https://www.backstagepass.co.in/test/Shynex-299.jpg",
    "https://www.backstagepass.co.in/test/Shynex-34.jpg",
    "https://www.backstagepass.co.in/test/Shynex-36.jpg",
    "https://www.backstagepass.co.in/test/Shynex-48.jpg",
  ];

  return (
    <>
    <Helmet>
          <title>Shynex Gallery | See Our Clinic & Success Stories</title>
          <meta name="description" content="Browse the Shynex Gallery to view our state-of-the-art facilities and witness the amazing transformations of our patients. Discover the environment where your skin and hair health thrive." />
          <meta name="keywords" content="" />
        </Helmet>
      <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
      <div className="sec-title">
                <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Gallery</h1>
            </div>
      <div>
        

        <div>
          

          <br/><br/>



        <ImageGallery images={images} width={1200} height={600} grid="v2" />
                    
                    
                  
                
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

