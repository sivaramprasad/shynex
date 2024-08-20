import React from 'react'
import "./Gallery.css";
import HomeContent from "../../../content/HomeContent";
import courseBanner from "../../../assets/img/banners/about-us.png";
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

