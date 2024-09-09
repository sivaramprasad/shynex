import React from 'react'
import "./TeamShynex.css";
import HomeContent from "../../../content/HomeContent";
import courseBanner from "../../../assets/img/banners/about-us.webp";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import Doctor from "../../../assets/img/home/Shynex.webp"
import men2 from "../../../assets/img/test/men2.webp"


import { Helmet } from "react-helmet";



function Team(props) {




  return (
    <>
      <Helmet>
        <title>Best Dermatologists & Cosmetologists in Hyderabad| Shynex Team</title>
        <meta name="description" content="Get to know our skilled team of dermatologists and cosmetologists. Our experienced skin doctors are dedicated to providing exceptional care and personalized treatment plans." />
        <link rel="canonical" href="https://www.backstagepass.co.in/team-shynex-expert-dermatologists/" />
      </Helmet>
      <div className='courseBanner'><img alt="Banner" title='Banner' src={courseBanner} /></div>
      <div className="sec-title">
        <h1 style={{ margin: "0px", fontSize: "50px", fontWeight: "900", textAlign: "center" }}>Team Shynex</h1>
      </div>
      <div>


        <div>

<div className='doctoreMain'>
  <div className='doctoreMainLeft'><img src={Doctor} /></div>
  <div className='doctoreMainRight'>
    <h1>Dr. Vangala Moulika, MD DVL, Senior Dermatologist at Shynex
    </h1>
    <p>Meet Dr. Vangala Moulika, a distinguished dermatologist at Shynex Poly Clinic, known for her exceptional skills and compassionate care. With an MD in Dermatology, Venereology, and Leprosy from Chalmeda Anand Rao Institute of Medical Sciences and an MBBS from Mediciti Institute of Medical Sciences, Dr. Moulika brings a wealth of knowledge and experience to her patients.</p>
<p>Dr. Moulika's clinical and diagnostic prowess shines through in her ability to perform and interpret advanced investigative procedures such as KOH mount, dermoscopy, and trichoscopy. This ensures that every patient receives a precise and accurate diagnosis. Her dermatosurgical expertise includes proficiently performing suturing techniques and removing warts, DPN, acrochordons, syringoma, and moles using cautery. Additionally, her skill in acne scar subcision offers effective solutions for acne-related concerns.</p>
<p>In the realm of cosmetology, Dr. Moulika's expertise is truly extensive. She is adept in utilizing a variety of advanced laser technologies, including Fractional CO2 laser, PRP, Dermaroller, laser toning (Q-switch), Diode, laser hair removal, MNRF, and HIFU. Moreover, she is trained in administering Botox, skin boosters, and chemical peels, all aimed at enhancing skin health and appearance.</p>
<p>Dr. Moulika's dedication to her patients is evident in her precise assessment and personalized treatment plans, consistently leading to successful outcomes. As a proud member of the Indian Association of Dermatologists, Venereologists, and Leprologists (IADVL, she stays at the forefront of dermatological advancements, ensuring her patients receive the highest standard of care.
Dr. Moulika's blend of technical expertise, compassionate approach, and unwavering commitment to her patients has earned her a reputation for excellence. She is a trusted and sought-after specialist at Shynex, where her dedication to dermatology makes a real difference in the lives of those she treats.
</p>
  </div>
</div>









         








        </div>






      </div>

      <HomeContent />

    </>
  )
}

Team.propTypes = {

}

export default Team;

