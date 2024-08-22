import React from 'react';
import person from "../assets/img/home/Shynex.webp";


import "./awards.css"


function HomeContent() {


  return (
    <>
 
 <section className="elementor-section elementor-top-section elementor-element elementor-element-69087175 qodef-elementor-content-grid elementor-section-boxed elementor-section-height-default elementor-section-height-default" style={{marginTop: "40px", background: "#f4f1ef", padding: "40px 0px 40px 0px"}}>
<div className="elementor-container elementor-column-gap-default">
<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a57ffdb">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-2e42105d elementor-widget elementor-widget-image">
<div className="elementor-widget-container">
<img style={{height: "450px", objectFit: "cover", width: "100%", objectPosition: "top"}} src={person} className="attachment-full size-full wp-image-234" alt="s" /> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-157a29a2">
<div className="elementor-widget-wrap elementor-element-populated">

<section className="elementor-section elementor-inner-section elementor-element elementor-element-101a3b7d elementor-section-boxed elementor-section-height-default elementor-section-height-default qodef-elementor-content-no">
<div className="elementor-container elementor-column-gap-default">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3448b063">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-146410bf elementor-widget elementor-widget-text-editor">
<div className="elementor-widget-container" style={{margin: "0px 0px 0px 50px"}}>
    {/* <h5 className='welcome'>Welcome to Shynex Poly Clinic</h5> */}
    <h1 className='Best'>Welcome to Shynex Poly Clinic</h1>
<p className='para'>Shynex Poly Clinic in Hyderabad is your trusted partner in achieving healthy skin and hair, offering advanced and affordable dermatology and cosmetology treatments tailored to your unique needs. Our dedicated team, including Dr. Vangala Moulika, brings a wealth of expertise and genuine care to every patient, ensuring you feel confident and cared for every step of the way. At Shynex, we’re here to help you look and feel your best with the latest innovations in skin and hair care</p> </div>

<button className="button-two"><span>Read More</span></button>
</div>
</div>
</div>
</div>
</section>


</div>
</div>

</div>
</section>






    </>
  );
}

export default HomeContent;
