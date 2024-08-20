import React, { useEffect } from 'react';
import Async from "react-code-splitting";
import HomeContent from "./HomeContent";
import AboutBsp from "./AboutBsp";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedProducts from "./FeaturedProducts";
import Awards from "./awards";
import Buzzing from "./Buzzing";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';



import EmblaCarousel from './EmblaCarousel.js'


const Footer = () => (
  <Async load={import("../components/AC-Footer/Footer.jsx")} />
);



function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
 
  window: PropTypes.func,
};

function Main({ active, props }) {


 

  useEffect(() => {
    setTimeout(() => {
      //setLoading(false);
    }, 3000);

  }, []);

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 

  return (
    <>
      <div className="row mb0">
        <div className="mainPanel">
          <div className="item pr9">
            <div id="owl-banners" className="">

              <EmblaCarousel slides={SLIDES} options={OPTIONS} />



            </div>
          </div>
          <div className="">


            

            <AboutBsp />
            <FeaturedProduct />
            <Awards />
            <Buzzing />
              <FeaturedProducts />

           
           

          </div>


          <div className='chapter' id="chapter2">
            <HomeContent />
          </div>
         


          <Footer />
        </div>
      </div>

      {/* <CustomPreloader customLoading={loading} background="#000000">
        <img src={preLoaderImg} alt="loading" />
      </CustomPreloader> */}
    </>
  );
}

export default Main;
