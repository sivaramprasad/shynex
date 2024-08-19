import React from 'react';
import EmblaCarouselBuzzing from './EmblaCarouselBuzzing';


import "./Buzzing.css"


function HomeContent() {

  const OPTIONS = { align: 'start' }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 
  return (
    <> 
   
<div style={{position: "relative", top: "-50px"}}>
   <h2 className='mainHeading'>Blog</h2>
   <h4 className='subHeading'>Stay updated with the latest in skincare and health.</h4>

   </div>   
<section id="page-tuition_aid-section" class="tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10  -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid" style={{background:"none", zIndex: "2", 

  }}>
  


  <div style={{marginTop: "0px", display: "flex", background:"#fff"}} class="min-h-full h-full w-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between md:items-center" >
    
    <div class="flex flex-col md:items-start text-txt100 pb-8 md:max-w-1/2" style={{maxWidth: "100%"}}>
      
      
     
      <EmblaCarouselBuzzing slides={SLIDES} options={OPTIONS} />
      
      
    </div>
  
  
</div>
  
</section>

      
    </>
  );
}

export default HomeContent;
