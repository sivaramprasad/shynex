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
            >
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
                    <Menu {...routeProps} component="AlmaSopranoTitanium" />
                  )}
                />
                <Route
                  exact
                  path={"/alma-harmony-xl-pro/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AlmaHarmonyXLPRo" />
                  )}
                />
                <Route
                  exact
                  path={"/morpheus8/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Morpheus8" />
                  )}
                />
                <Route
                  exact
                  path={"/cristal-pro/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="CrustalPRO" />
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
                  path={"/contact-us-skin-hair-care/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="ContactUs" />
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
                  path={"/ent/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="ENT" />
                  )}
                />

                <Route
                  exact
                  path={"/gynaecology/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="Gynaecology" />
                  )}
                />
                <Route
                  exact
                  path={"/alma-harmony-xl-pro/"}
                  render={routeProps => (
                    <Menu {...routeProps} component="AlmaSopranoTitanium" />
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
