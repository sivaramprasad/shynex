import React from 'react'
import "./AboutUs.css";
import HomeContent from "../../../content/HomeContent";
import Ourawards from "../../../content/ourawards";

import courseBanner from "../../../assets/img/banners/about-us.png";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import hwst from "../../../assets/img/test/howstrt.webp";
import st1 from "../../../assets/img/test/sty1.gif";
import st2 from "../../../assets/img/test/sty2.gif";
import cncpt from "../../../assets/img/banners/Concept.webp"

import { Helmet } from "react-helmet";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Aboutus(props) {
    return (
        <>

            <div className='courseBanner'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            
            <div className="sec-title">
                <h2 style={{ margin: "0px", fontSize:"50px", fontWeight:"900"}}>Vision</h2>
                <p className='tagline'> To shape the future of global gaming education</p>
            </div>
            <Grid container spacing={2} className="main-img" style={{boxShadow: "none"}}>
                <Grid xs={6} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>    
                        <div className="inner-column inner-column1 wow fadeInLeft">

                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src={hwst} alt="" /></a></figure>
                        <div className='gifimages'><img src={st1} /></div>

                    </div></Item>
                </Grid>
                <Grid xs={6} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2>How It Started</h2>
                        </div>
                        <div className="text">At a time when gaming enthusiasts didn’t have many Indian educational institutes to turn to, Backstage Pass Institute of Gaming & Technology rose as a beacon of hope. With a single motto to revolutionize the world of gaming in the country and transform this form of entertainment into a full-fledged source of earning, Backstage Pass has championed quality gaming education at an affordable price.</div>


                    </div></Item>
                </Grid>


            </Grid>
            <Grid container spacing={2} className="main-img" style={{boxShadow: "none"}}>

                <Grid xs={6} style={{boxShadow: "none"}}>
                    <Item style={{boxShadow: "none"}}>      <div className="inner-column">
                        <div className="sec-title">
                            <h2>How It’s Going</h2>
                        </div>
                        <div className="text" style={{ marginLeft: '35px' }}>Mr. Surya Prakash’s simple vision that started with less than 10 students in 2010 has now evolved into a robust ecosystem of 1000+ students and alumni, and 20+ industry experts.</div>
                        <div className="text" style={{ marginLeft: '35px' }}>With a smashing record of 100+ placements in the past decade, our students have made multiple games and have won accolades that has made the college proud. So, if you
                            think you are meant for greater things, join us.
                        </div>


                    </div></Item>
                </Grid>
                <Grid style={{boxShadow: "none"}} xs={6}>
                    <Item style={{boxShadow: "none"}}>    <div className="inner-column inner-column2 wow fadeInLeft">

                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img className='img-box' src={cncpt} alt="" /></a></figure>
                        <div className='gifimages1'><img src={st2} /></div>
                    </div></Item>
                </Grid>

            </Grid>
            {/* <Grid container spacing={4} className="main-img">

                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>

                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item>
                        <div class="box">
                            <img src="https://images.pexels.com/photos/569093/pexels-photo-569093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="image_hover" />
                            <div class="box-content">
                                <h3>Hover me</h3>
                                <p>This is a very beautiful hover effect in pure css</p>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid> */}
        <div className="mid-title">

<p style={{marginBottom:"0px"}}>Let’s change the world, one game at a time!
</p>

</div>
            <div className="sec-title">
                <h2 style={{ marginTop: "45px" }}>What Makes BSP Tick</h2>
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
            <Ourawards />
            <HomeContent />
        </>
    )
}


export default Aboutus;

