import React from "react";
import artimg1 from '../assets/img/potbot_11.jpg';
import "./HomeForm.css"




function HomeForm() {

  

  return (
    <div>
      <div>




<section className="modular-row-wrap mod-row-image-block image-block bg-black1 reverse-align mod-style-left-right">

		
<div className="wrap">

<div className="content-wrap">

  
    <div className="image-style style-left-right">

                <div className="sidetext-col sidetext-right col col-2">
                      <div className="column column-image or-img">
                              <div className="img-holder">
                <img src={artimg1} />
              </div>
                          </div>
                          <div  className="flex flex-wrap gap-2 mt-4 mb-3 sm:mt-5 sm:mb-4" data-form-id="need-guidance" data-form="step1-container">
                          <div className="row row-title en">
    <h3>Enquiry Form
</h3>			</div>

  <div  className="flex-auto sm:flex-1">
    <label  className="v-input-label200 text-txt100 mb-4px" for="firstname">First name</label>
    <input  className="input input-gray" placeholder="" id="firstname" name="firstname" type="text"/>
  </div>
  <div  className="flex-auto sm:flex-1">
    <label  className="v-input-label200 text-txt100 mb-4px" for="lastname">Last name</label>
    <input value=""  className="input input-gray" placeholder="" id="lastname" name="lastname" type="text"/>
  </div>
  <div  className="flex-auto sm:flex-1">
    <label  className="v-input-label200 text-txt100 mb-4px" for="phnnumber">Phone Number</label>
    <input value=""  className="input input-gray" placeholder="" id="phnnumber" name="phnnumber" type="text"/>
  </div>
  <div  className="flex-auto sm:flex-1">
    <label  className="v-input-label200 text-txt100 mb-4px" for="qualification">Highest Qualification </label>
    <select className="input-gray" name="qualification" id="qualification">
    <option value="">Highest Qualification</option>
    <option value="10th">10th Pass</option>
    <option value="12th">12th Pursuing</option>
    <option value="12pass">12th Pass</option>
    <option value="ugraduate">Under Graduate</option>
    <option value="graduate">Graduate</option>
    <option value="others">Others</option>
  </select>
  
  </div>
  <div  className="flex-auto sm:flex-1">
    <label  className="v-input-label200 text-txt100 mb-4px" for="city">city</label>
    <input value=""  className="input input-gray" placeholder="" id="city" name="city" type="text"/>
  </div>
  <div  className="flex-auto sm:flex-1">
    <label  className="v-input-label200 text-txt100 mb-4px" for="email">Email</label>
    <input value=""  className="input input-gray" placeholder="" id="email" name="email" type="text"/>
  </div>
  <div>
    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
  <button class="three s-b button brand size200 w-[calc(100%-16px)] sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="button" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
  Submit
</button>
</div>
</div>
</div>

      </div>
    </div>

      </div>
     
</div></section>




        
      </div>
    </div>
  );
}

export default HomeForm;
