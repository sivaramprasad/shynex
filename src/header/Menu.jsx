import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Async from "react-code-splitting";
import { handleMobileOrDesktop } from "../redux/actions/mainActions";
import withStyles from "@material-ui/core/styles/withStyles";
import menuStyle from "../assets/jss/material-dashboard-react/layouts/menuStyle.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ScrollToTop from "react-scroll-to-top";





const Main = () => <Async load={import("../content/Main.jsx")} />;
const LaserTreatments = () => < Async load={import("../components/AC-StaticPages/LaserTreatments/LaserTreatments")} />;
const BodyContouring = () => < Async load={import("../components/AC-StaticPages/BodyContouring/BodyContouring")} />;
const MoleandSkinCancerChecks = () => < Async load={import("../components/AC-StaticPages/MoleandSkinCancerChecks/MoleandSkinCancerChecks")} />;

const MedicalAesthetics = () => < Async load={import("../components/AC-StaticPages/MedicalAesthetics/MedicalAesthetics")} />;

const HairandScalpTreatments = () => < Async load={import("../components/AC-StaticPages/HairandScalpTreatments/HairandScalpTreatments")} />;
const Gallery = () => < Async load={import("../components/AC-StaticPages/Gallery/Gallery")} />;


const DermatologyAndCosmetology = () => < Async load={import("../components/AC-StaticPages/DermatologyAndCosmetology/DermatologyAndCosmetology")} />;

const MedicalFacials = () => < Async load={import("../components/AC-StaticPages/MedicalFacials/MedicalFacials")} />;
const AboutUs = () => < Async load={import("../components/AC-StaticPages/AboutUs/AboutUs")} />;
const GeneralDermatologyServices = () => < Async load={import("../components/AC-StaticPages/GeneralDermatologyServices/GeneralDermatologyServices")} />;
const CosmeticDermatologyTreatments = () => < Async load={import("../components/AC-StaticPages/CosmeticDermatologyTreatments/CosmeticDermatologyTreatments")} />;
const AboutUsAdvantages  = () => < Async load={import("../components/AC-StaticPages/AboutUsAdvantages/AboutUsAdvantages")} />;



// const Placements = () => < Async load={import("../components/AC-StaticPages/Placements/Placements")} />;
const Technology = () => < Async load={import("../components/AC-StaticPages/Technology/Technology")} />;
const Technology1 = () => < Async load={import("../components/AC-StaticPages/Technology1/Technology1")} />;
const Technology2 = () => < Async load={import("../components/AC-StaticPages/Technology2/Technology2")} />;
const Technology3 = () => < Async load={import("../components/AC-StaticPages/Technology3/Technology3")} />;




const ContactUs = () => < Async load={import("../components/AC-StaticPages/ContactUs/ContactUs")} />;
const AcneTreatments = () => < Async load={import("../components/AC-StaticPages/AcneTreatments/AcneTreatments")} />;
const SkinRejuvenation = () => < Async load={import("../components/AC-StaticPages/SkinRejuvenation/SkinRejuvenation")} />;
const AntiAgeingTreatments = () => < Async load={import("../components/AC-StaticPages/AntiAgeingTreatments/AntiAgeingTreatments")} />;






const TeamShynex = () => < Async load={import("../components/AC-StaticPages/TeamShynex/TeamShynex")} />;




const MenuCore = () => <Async load={import("./MenuCore.jsx")} />;
const TopBar = () => <Async load={import("./TopBar")} />;
const Footer = () => <Async load={import("../components/AC-Footer/Footer")} />;


const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(255, 255, 255, 1)',
    },
  },
});

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function Menu(props) {
  const dispatch = useDispatch();
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let isMobile;
  const mobileSize = 768;
  React.useEffect(() => {
    if (width > mobileSize) {
      isMobile = false;
    } else {
      isMobile = true;
    }
    dispatch(handleMobileOrDesktop(isMobile));
  }, [width]);



  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const toolbarStyle = {
    minHeight: '80px',
  };

  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

 

  if (props.component === "tiposDeSeguros") {
    return (
      <>

        <div className="row mb0">
          <div className="" style={{ boxShadow: '0 0 4px #cdcdcd' }}>
            <div>
              <div >
                <MenuCore />
              </div>
            </div>
          </div>
        </div>
        {/* <InsuranceTypes /> */}
        <Footer />
      </>
    );
  }
  else if (props.component ===  "SabíasQue") {
    return (
      <>

        <div className="row mb0">
          <div className="" style={{ boxShadow: '0 0 4px #cdcdcd' }}>
            <div>
              <div >
                <MenuCore />
              </div>
            </div>
          </div>
        </div>
        {/* <News /> */}
        <Footer />
      </>
    );
  }
  else if (props.component ===  "cotice") {
    return (
      <>

        <div className="row mb0">
          <div className="" style={{ boxShadow: '0 0 4px #cdcdcd' }}>
            <div>
              <div >
                <MenuCore />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }  
  else if (props.component ===  "MedicalAesthetics") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <MedicalAesthetics />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "Technology") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Technology />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "Technology2") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Technology2 />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
   
  else if (props.component == "Technology3") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Technology3 />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


 
  else if (props.component == "Technology1") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Technology1 />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


  else if (props.component == "BodyContouring") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <BodyContouring />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "MoleandSkinCancerChecks") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <MoleandSkinCancerChecks />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "LaserTreatments") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <LaserTreatments />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "HairandScalpTreatments") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <HairandScalpTreatments />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  
  else if (props.component ===  "MedicalFacials") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <MedicalFacials />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "TeamShynex") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <TeamShynex />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "Gallery") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Gallery />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "AboutUs") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
              <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <AboutUs />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "CosmeticDermatologyTreatments") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
              <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <CosmeticDermatologyTreatments />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }


    else if (props.component ===  "AcneTreatments") {
      return (
        <>
  
          <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
              <ElevationScroll {...props}>
  
                <AppBar>
                  <TopBar />
                  <Toolbar style={toolbarStyle}>
                    <MenuCore />
                  </Toolbar>
                </AppBar>
  
              </ElevationScroll>
            </ThemeProvider>
            <Toolbar />
  
          </React.Fragment>
  
          <AcneTreatments />
          <Footer />
          <ScrollToTop
            smooth
            top={100}
          />
        </>
      );
    }
  

    else if (props.component ===  "AboutUsAdvantages") {
      return (
        <>
  
          <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
              <ElevationScroll {...props}>
  
                <AppBar>
                  <TopBar />
                  <Toolbar style={toolbarStyle}>
                    <MenuCore />
                  </Toolbar>
                </AppBar>
  
              </ElevationScroll>
            </ThemeProvider>
            <Toolbar />
  
          </React.Fragment>
  
          <AboutUsAdvantages />
          <Footer />
          <ScrollToTop
            smooth
            top={100}
          />
        </>
      );
    }

  else if (props.component ===  "Admissions") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
              <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <AcneTreatments />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "SkinRejuvenation") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <SkinRejuvenation />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "DermatologyAndCosmetology") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <DermatologyAndCosmetology />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  
  else if (props.component ===  "AntiAgeingTreatments") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <AntiAgeingTreatments />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "GeneralDermatologyServices") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <GeneralDermatologyServices />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component ===  "ContactUs") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <TopBar />
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <ContactUs />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }

  else {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>
              <AppBar>
                <TopBar />                
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>
            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Main />
        <ScrollToTop
          smooth
          top={100}
        />
        


      </>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(menuStyle)(Menu);
