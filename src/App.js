import React from "react";
import CacheBuster from "./CacheBuster.js";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history.js";
import { Helmet } from "react-helmet";
import ogimgs from "./assets/img/banners/newban1.webp";
import Menu from "./header/Menu.jsx";
import "../src/assets/css/reactMaterial.css";
import "../src/assets/css/icon.css";
import "./assets/css/dk.css";

export default function App() {

  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }

        return (
          <>
            <Helmet
              titleTemplate="%s | Best Game Design and Development college in India - Backstage Pass"
              defaultTitle="Home | Best Game Design and Development college in India - Backstage Pass"
            >
              <meta property="og:site_name" content="Backstage Pass" />
              <meta property="og:url" content="https://www.dev.backstagepass.co.in/" />
              <meta property="og:type" content="website" />
              <meta name="title" property="og:title" content="Best Game Design and Development college in India" />
              <meta name="image" property="og:image" content={ogimgs} />
              <meta property="og:image:type" content="image/png" />
              <meta property="og:image:width" content="1024" />
              <meta property="og:image:height" content="1024" />
              <meta name="description" property="og:description" content="Best Game Design and Development college in India - Backstage Pass" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" description="Backstage Pass" />
              <meta name="twitter:title" content="Best Game Design and Development college in India" />
              <meta name="twitter:description" content="Best Game Design and Development college in India - Backstage Pass" />
              <meta name="twitter:image:src" content={ogimgs} />
              <meta name="twitter:domain" content="https://www.dev.backstagepass.co.in/"></meta>
              <link rel="image_src" href="{ogimgs}" />
              <meta name="twitter:image" property="og:image" content="{ogimgs}" />
              <meta
                name="description"
                content="Best Game Design and Development college in India - Backstage Pass"
              />
            </Helmet>
            <Router history={history}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={routeProps => {
                    return (
                      <>
                        <Menu {...routeProps} component="home" />
                      </>
                    );
                  }}
                />

                <Route
                  exact
                  path={"/tipos-de-seguros/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="tiposDeSeguros" />
                  )}
                />
                <Route
                  exact
                  path={"/cotice/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="cotice" />
                  )}
                />
                <Route
                  exact
                  path={"/sabías-que/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="SabíasQue" />
                  )}
                />
                {/* <Route
                  exact
                  path={"/cancer-awareness-banner/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CancerAwarenessBanner" />
                  )}
                /> */}

                <Route
                  exact
                  path={"/courses/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Courses" />
                  )}
                />
                <Route
                  exact
                  path={"/aboutus/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AboutUs" />
                  )}
                />
                <Route
                  exact
                  path={"/why-choose-shynex/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AboutUsAdvantages" />
                  )}
                />
                <Route
                  exact
                  path={"/contactus/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="ContactUs" />
                  )}
                />
                <Route
                  exact
                  path={"/Placementsupport/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Placements" />
                  )}
                />
                <Route
                  exact
                  path={"/affilication/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Affilication" />
                  )}
                />

                <Route
                  exact
                  path={"/admissions/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Admissions" />
                  )}
                />

<Route
                  exact
                  path={"/financial-assistance/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="FinancialAssistance" />
                  )}
                />

<Route
                  exact
                  path={"/scholarships/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Scholarships" />
                  )}
                />




                <Route
                  exact
                  path={"/bachelors-in-computer-science-game-development/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="BachelorsInComputerScienceGameDevelopment" />
                  )}
                />

              </Switch>
            </Router>
          </>
        );
      }}
    </CacheBuster>
  );
}
