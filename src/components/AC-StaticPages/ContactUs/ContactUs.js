import React from 'react'
import "./ContactUs.css";
import HomeContent from "../../../content/HomeContent";
import courseBanner from "../../../assets/img/banners/newban1.webp";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function contactus(props) {
    return (
        <>

            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
      
            <div className="sec-title">
                <h2 style={{ marginTop: "45px" }}>Don’t Wish To Talk Or Type?</h2>
            </div>
            <div style={{position: "relative", height: "618px"}}>
            <div id="pointer">
                <h1>Header Point</h1>          
                <div id="HiddenText"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
            </div>
           
       
            <div id="pointer1">
                <h1>Header Point</h1>
                <div id="HiddenText3"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
            </div>
           
            <div id="pointer2">
                <h1>Header Point</h1>
                <div id="HiddenText"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
            </div>
            
            <div id="pointer3">
                <h1>Header Point</h1>
                <div id="HiddenText3"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
            </div>
            
            </div>

          
            <HomeContent />
        </>
    )
}


export default contactus;

