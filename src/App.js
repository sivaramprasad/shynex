import React from "react";
import CacheBuster from "./CacheBuster.js";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history.js";
import { Helmet } from "react-helmet";
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
              titleTemplate="%s"
              defaultTitle="Best Skin and Hair Care Clinic in Hyderabad | Shynex Clinic"
            >
              {/* <meta property="og:site_name" content="Backstage Pass" />
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
              /> */}
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
                  path={"/skin-rejuvenation-youthful-skin/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="SkinRejuvenation" />
                  )}
                />
                <Route
                  exact
                  path={"/general-dermatology-services/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="GeneralDermatologyServices" />
                  )}
                />
                    <Route
                  exact
                  path={"/alma-soprano-titanium/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Technology" />
                  )}
                />
                    <Route
                  exact
                  path={"/alma-harmony-xl-pro/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Technology1" />
                  )}
                />
                    <Route
                  exact
                  path={"/technology/morpheus8/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Technology2" />
                  )}
                />
                   <Route
                  exact
                  path={"/technology/cristal-pro/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Technology3" />
                  )}
                />
                <Route
                  exact
                  path={"/acne-treatments/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AcneTreatments" />
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
                  path={"/anti-aging-treatments/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AntiAgeingTreatments" />
                  )}
                />

                <Route
                  exact
                  path={"/team-shynex-expert-dermatologists/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="TeamShynex" />
                  )}
                />

                <Route
                  exact
                  path={"/gallery-shynex-clinic/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Gallery" />
                  )}
                />

<Route
                  exact
                  path={"/dermatology-and-cosmetology/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="DermatologyAndCosmetology" />
                  )}
                />



                <Route
                  exact
                  path={"/medical-facials-professional-skin-care/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="MedicalFacials" />
                  )}
                />

                <Route
                  exact
                  path={"/body-contouring/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="BodyContouring" />
                  )}
                />

                <Route
                  exact
                  path={"/laser-treatments/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="LaserTreatments" />
                  )}
                />

                <Route
                  exact
                  path={"/mole-skin-cancer-checks/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="MoleandSkinCancerChecks" />
                  )}
                />

                <Route
                  exact
                  path={"/medical-aesthetics-enhance-appearance/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="MedicalAesthetics" />
                  )}
                />

                <Route
                  exact
                  path={"/hair-scalp-treatments/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="HairandScalpTreatments" />
                  )}
                />







                <Route
                  exact
                  path={"/cosmetic-dermatology-treatments/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CosmeticDermatologyTreatments" />
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
