import React from 'react'
import "./Affilication.css";
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
  
  
function Affilication(props) {
    return (
        <>
        
            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
         
            <div className="sec-title">
                            <h2>OUR AFFILIATIONS
                            </h2>
                        </div>
            <Grid container spacing={2} className="main-img">
            <Grid xs={6}>
          <Item>    <div className="inner-column inner-column1 wow fadeInLeft">
                     
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img  src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""/></a></figure>
                     
                    </div></Item>
        </Grid>
        <Grid xs={6}>
          <Item>      <div className="inner-column3">
                        
                        <div className="text" style={{marginRight:'42px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off</div>
                    
                        
                        <div className="text" style={{marginRight:'42px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off</div>
                    </div></Item>
        </Grid>
        
        
      </Grid>
      <div className="sec-title">
                            <h2>OUR COLLABORATIONS
                            </h2>
                        </div>
      <Grid container spacing={2} className="main-img">
          
        <Grid xs={6}>
          <Item>      <div className="inner-column3">
        
                        <div className="text" style={{marginLeft:'42px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off</div>
                        <div className="text" style={{marginLeft:'42px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off</div>
            
                    
                    
                    </div></Item>
        </Grid>
        <Grid xs={6}>
          <Item>    <div className="inner-column inner-column2 wow fadeInLeft">
                     
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img className='img-box' src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""/></a></figure>
                     
                    </div></Item>
        </Grid>
        
      </Grid>
    
            <HomeContent />
        </>
    )
}


export default Affilication;

