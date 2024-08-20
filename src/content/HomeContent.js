import React from "react";
import "./HomeContent.css";
import "./FeaturedProducts.css";







function HomeContent() {



  return (
    <div>
      <div>

      <section id="page-tuition_aid-section" className="tuitiona-aid-section bg-bg100 flex items-end md:items-center relative overflow-hidden pt-5 sm:pt-10 -mt-[2px]" data-locomotive-section-id="page-tuition_aid" data-locomotive-section-type="tuition_aid">
  <div className="min-h-full h-full w-full mx-auto relative z-[4] flex  md:flex-row justify-end md:justify-between  md:items-center gap-5">
    
      <div style={{width: "50%", height: "650px"}}>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2602087166733!2d78.3866039!3d17.4472555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e20f33fc19%3A0x3cf46734e7e4414a!2sShynex%20-%20Advanced%20Hair%20%26%20Skin%20Care%20Clinic%20in%20Madhapur!5e0!3m2!1sen!2sin!4v1724140511037!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width: "100%", height: "100%"}}></iframe>
       
       
      </div>
    
    <div style={{width: "50%", height: "650px", background: "#000"}}>
    <div className="min-h-full h-full w-full container-full relative z-[3] py-4 md:py-8">
  <div className="sm:max-w-[480px] lg:max-w-[560px]">
    <h1 className="mainHeading" style={{color:"#fff", lineHeight:"inherit"}}>Consult with <br/>our Best Dermatologist</h1>
    
    <div className="">
      

<div className="flex flex-wrap gap-2 sm:mt-5 sm:mb-4" data-form-id="need-guidance" data-form="step1-container">


<div className="flex-auto sm:flex-1">
  <label className="v-input-label200 text-txt100 mb-4px" for="firstname" style={{color: "#fff"}}>Name</label>
  <input className="input input-gray" placeholder="Please enter your full name" id="firstname" name="firstname" type="text" />
</div>
<div className="flex-auto sm:flex-1">
  <label className="v-input-label200 text-txt100 mb-4px" for="Phone Number" style={{color: "#fff"}}>Phone Number</label>
  <input value="" className="input input-gray" placeholder="Please enter your contact number" id="Phone Number" name="Phone Number" type="text" />
</div>

</div>




<div className="flex flex-wrap gap-2 sm:mt-5 sm:mb-4" data-form-id="need-guidance" data-form="step1-container">
<div className="flex-auto sm:flex-1">
  <label className="v-input-label200 text-txt100 mb-4px" for="Phone Number" style={{color: "#fff"}}>Email</label>
  <input value="" className="input input-gray" placeholder="Please enter your email address" id="Phone Number" name="Phone Number" type="text" />
</div>


</div>
<div className="flex-auto sm:flex-1">
  <label className="v-input-label200 text-txt100 mb-4px" for="Phone Number" style={{color: "#fff"}}>Query</label>
  <textarea id="Query" className="input input-gray" style={{height: "120px", paddingTop: "10px"}} placeholder="Please describe your query or concern" name="Query" rows="8" cols="50"></textarea>
  
</div>

<div style={{display:"flex", alignItems:"center",justifyContent:"center", paddingTop:"15px"}}>
<button className="button-two"><span>Submit</span></button>
</div>

    </div>
  </div>
</div>

    </div>
  </div>
</section>
   





      </div>
    </div>
  );
}

export default HomeContent;
