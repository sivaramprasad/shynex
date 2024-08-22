import React from "react";
import "./AboutBsp.css";
import Lips from "../assets/img/home/home2-2.webp";
import Botox from "../assets/img/home/home3-2.webp";
import { Link } from "react-router-dom";


import homeimg from "../assets/img/home/home4-1.webp";
import homeimg1 from "../assets/img/home/home5-1.webp";



function HomeContent() {


  return (

    <>
    <div className="requestMain">
      <div className="requestMainInner">
        <div className="requestMainLeft">Request a Consultation</div>
        <div className="requestMainCenter">
          <div className="requestInputMain">
            <div className="requestInputMainLeft">
              <input type="text" className="makeinput" placeholder="Name*" />
              <input type="text" className="makeinput" placeholder="Phone Number*" />
            </div>
            <div className="requestInputMainRight">
              <input type="text" className="" placeholder="Email*" />
              <select className="makeinput" name="service-type">
                <option value="Service Type">Service Type</option>
                <option value="Unwanted Hair Treatment">Unwanted Hair Treatment</option>
                <option value="Acne/Scar Treatments">Acne/Scar Treatments</option>
                <option value="Specific Skin Concerns">Specific Skin Concerns</option>
                <option value="Hair Regrowth Treatment">Hair Regrowth Treatment</option>
                <option value="Anti-Ageing Skin Treatments">Anti-Ageing Skin Treatments</option>
                <option value="Medical Treatments">Medical Treatments</option>
                <option value="Other Treatments">Other Treatments</option>
                </select>
            </div>
          </div>
        </div>
        <div className="requestMainRight"><button class="button-two1" fdprocessedid="gjo5yf"><span>Request a call back</span></button></div>
      </div>
    </div>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-18a1911 elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default qodef-elementor-content-no">
        <div className="elementor-container elementor-column-gap-default">

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f1d33f9">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-9b9e9fe elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img src={Lips} className="attachment-full size-full wp-image-4357" alt="a" /> </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fe6e496" style={{ backgroundColor: "#974478", display: "flex", alignItems: "center" }}>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-311c4ca elementor-widget elementor-widget-touchup_core_section_title" >
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--center  ">
                    <h3 className="qodef-m-title" style={{ color: "#FFFFFF", textAlign: "center" }}>
                    Alma Soprano Titanium </h3>
                  </div> </div>
              </div>
              <div className="elementor-element elementor-element-f38bc14 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p style={{ textAlign: "center" }}><span style={{ color: "#FFFFFF" }}>At Shynex, we believe in harnessing the latest technology<br />
                  to empower dermatologists </span></p> </div>
              </div>
              <div className="elementor-element elementor-element-f4a8354 elementor-widget__width-auto elementor-widget elementor-widget-touchup_core_button" style={{ color: "#FFFFFF", textAlign: "center" }}>
                <div className="elementor-widget-container">
                  <Link className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link" to={"/alma-soprano-titanium/"} style={{ color: "#FFFFFF", textAlign: "center" }}>
                    <span className="qodef-m-text" style={{ color: "#FFFFFF", textAlign: "center" }}>Read more</span>
                  </Link> </div>
              </div>
            </div>
          </div>


          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3738bb2">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-79079a4 elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img src={Botox} className="attachment-large size-large wp-image-4358" alt="s" /> </div>
              </div>
            </div>
          </div>


          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5a60b32" style={{ backgroundColor: "#f4f1ef", display: "flex", alignItems: "center" }}>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-9221379 elementor-widget elementor-widget-touchup_core_section_title">
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--center  ">
                    <h3 className="qodef-m-title" style={{ color: "#974478", textAlign: "center" }}>
                    Alma Harmony XL PRo </h3>
                  </div> </div>
              </div>
              <div className="elementor-element elementor-element-ad507e7 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p style={{ color: "#777777", textAlign: "center", width: "80%", margin: "0 auto" }}><span style={{ color: "#777777", textAlign: "center" }}>At Shynex, we believe in harnessing the latest technology to empower dermatologists</span></p> </div>
              </div>
              <div className="elementor-element elementor-element-3f0b3e9 elementor-widget__width-auto elementor-widget elementor-widget-touchup_core_button" style={{ textAlign: "center" }}>
                <div className="elementor-widget-container">
                  <Link className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link" to={"/alma-harmony-xl-pro/"} style={{ color: "#974478" }}>
                    <span className="qodef-m-text">Read more</span>
                  </Link> </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="elementor-section elementor-top-section elementor-element elementor-element-a7a85f7 elementor-section-full_width elementor-section-height-default elementor-section-height-default qodef-elementor-content-no">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-badc87d" style={{ backgroundColor: "#f4f1ef", display: "flex", alignItems: "center" }}>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f9f97c9 elementor-widget elementor-widget-touchup_core_section_title" >
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--center  ">
                    <h3 className="qodef-m-title" style={{ color: "#974478", textAlign: "center" }}>
                    Morpheus 8</h3>
                  </div> </div>
              </div>
              <div className="elementor-element elementor-element-dcb6a37 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p style={{ textAlign: "center", width: "80%", margin: "0 auto" }}><span style={{ color: "#777" }}>At Shynex, we’re at the forefront of revolutionizing the beauty and wellness industry</span></p> </div>
              </div>
              <div className="elementor-element elementor-element-dda00ad elementor-widget__width-auto elementor-widget elementor-widget-touchup_core_button" data-id="dda00ad" data-element_type="widget" data-widget_type="touchup_core_button.default">
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <Link className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link" to={"/morpheus8/"} target="_self" style={{ color: "#974478", textAlign: "center" }}>
                    <span className="qodef-m-text">Read more</span>
                  </Link> </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f72af4e">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-3d60ac4 elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img loading="lazy" decoding="async" width="800" height="800" src={`${homeimg}`}className="attachment-large size-large wp-image-4359" alt="s" /> </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-0ed4ab8" style={{ backgroundColor: "#ef9da3", display: "flex", alignItems: "center" }}>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-e699db7 elementor-widget elementor-widget-touchup_core_section_title">
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m  qodef-section-title qodef-alignment--center">
                    <h3 className="qodef-m-title" style={{ color: "#FFFFFF", textAlign: "center" }}>
                    Crustal PRO </h3>
                  </div> </div>
              </div>
              <div className="elementor-element elementor-element-3d82a80 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p style={{ textAlign: "center", width: "80%", margin: "0 auto" }}><span style={{ color: "#FFFFFF" }}>Now you can positively say goodbye to stubborn fat and hello to a more sculpted..</span></p> </div>
              </div>
              <div className="elementor-element elementor-element-557687d elementor-widget__width-auto elementor-widget elementor-widget-touchup_core_button">
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <Link className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link" to={"/cristal-pro/"} target="_self" style={{ color: "#FFFFFF", textAlign: "center" }}>
                    <span className="qodef-m-text">Read more</span>
                  </Link> </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-50c8d95">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-1cfb03c elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <img loading="lazy" decoding="async" width="800" height="800" src={`${homeimg1}`} className="attachment-large size-large wp-image-4360" alt="s" /> </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default HomeContent;
