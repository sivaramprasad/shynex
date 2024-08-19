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
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ScrollToTop from "react-scroll-to-top";





const Main = () => <Async load={import("../content/Main.jsx")} />;
const InsuranceTypes = () => < Async load={import("../components/AC-StaticPages/InsuranceTypes/InsuraceTypes")} />;
const News = () => < Async load={import("../components/AC-StaticPages/News/News")} />;
const Courses = () => < Async load={import("../components/AC-StaticPages/Courses/Courses")} />;
const AboutUs = () => < Async load={import("../components/AC-StaticPages/AboutUs/AboutUs")} />;
const AboutUsAdvantages  = () => < Async load={import("../components/AC-StaticPages/AboutUsAdvantages/AboutUsAdvantages")} />;

const Placements = () => < Async load={import("../components/AC-StaticPages/Placements/Placements")} />;
const Affilication = () => < Async load={import("../components/AC-StaticPages/Affilication/Affilication")} />;
const ContactUs = () => < Async load={import("../components/AC-StaticPages/ContactUs/ContactUs")} />;
const Admissions = () => < Async load={import("../components/AC-StaticPages/Admissions/Admissions")} />;
const FinancialAssistance = () => < Async load={import("../components/AC-StaticPages/FinancialAssistance/FinancialAssistance")} />;
const Scholarships = () => < Async load={import("../components/AC-StaticPages/Scholarships/Scholarships")} />;






const BachelorsInComputerScienceGameDevelopment = () => < Async load={import("../components/AC-StaticPages/BachelorsInComputerScienceGameDevelopment/BachelorsInComputerScienceGameDevelopment")} />;




const MenuCore = () => <Async load={import("./MenuCore.jsx")} />;
const TopBar = () => <Async load={import("./TopBar")} />;
const Footer = () => <Async load={import("../components/AC-Footer/Footer")} />;

const Loading = () => (
  <Async load={import("../components/AC-Loading/Loading.jsx")} />
);
const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(255, 255, 255, 0.7)',
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

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  if (props.component == "tiposDeSeguros") {
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
        <InsuranceTypes />
        <Footer />
      </>
    );
  }
  else if (props.component == "SabíasQue") {
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
        <News />
        <Footer />
      </>
    );
  }
  else if (props.component == "cotice") {
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
  else if (props.component == "Courses") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <Courses />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "BachelorsInComputerScienceGameDevelopment") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>
        <BachelorsInComputerScienceGameDevelopment />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "AboutUs") {
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
  else if (props.component == "Affilication") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Affilication />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "AboutUsAdvantages") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
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

  else if (props.component == "Admissions") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Admissions />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "FinancialAssistance") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <FinancialAssistance />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "Scholarships") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Scholarships />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "Placements") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
                <Toolbar style={toolbarStyle}>
                  <MenuCore />
                </Toolbar>
              </AppBar>

            </ElevationScroll>
          </ThemeProvider>
          <Toolbar />

        </React.Fragment>

        <Placements />
        <Footer />
        <ScrollToTop
          smooth
          top={100}
        />
      </>
    );
  }
  else if (props.component == "ContactUs") {
    return (
      <>

        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={darkTheme}>
            <ElevationScroll {...props}>

              <AppBar>
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
