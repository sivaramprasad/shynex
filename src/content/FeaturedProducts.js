import React from 'react';
import Marquee from "react-fast-marquee";
import recuiters1 from "../assets/img/partners/1.webp";
import recuiters2 from "../assets/img/partners/2.webp";
import recuiters3 from "../assets/img/partners/3.webp";
import recuiters4 from "../assets/img/partners/4.webp";
import recuiters5 from "../assets/img/partners/5.webp";
import recuiters6 from "../assets/img/partners/6.webp";
import recuiters7 from "../assets/img/partners/7.webp";
import recuiters8 from "../assets/img/partners/8.webp";
import recuiters9 from "../assets/img/partners/9.webp";
import recuiters10 from "../assets/img/partners/10.webp";
import EmblaCarouselTestimonilas from './EmblaCarouselTestimonilas'


import "./FeaturedProducts.css"



function HomeContent() {





  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>

      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden" style={{ background: "#f4f1ef" }}>


        <div className="min-h-full h-full w-full  relative z-[3] py-4 md:py-8 rec">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>


          <h1 className="mainHeading">Testimonials
          </h1>
          <h3 className='subHeading'>Real stories from our clients showcasing our success.</h3>


            <div className="container-full">
              <div className="qodef-testemonials-background">
                <img loading="lazy" decoding="async" width="800" height="251" src="https://touchup.qodeinteractive.com/wp-content/uploads/2020/02/About-us-8.png" class="attachment-full size-full" alt="s" /> </div>
              <EmblaCarouselTestimonilas slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default HomeContent;
