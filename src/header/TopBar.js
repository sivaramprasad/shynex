import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { TiSocialFacebook, TiSocialYoutube, TiSocialInstagram } from "react-icons/ti";

export default function TopBar() {

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  if (!isMobileState) {
    return (
      <div id="qodef-top-area">
        <div className="qodef-widget-holder qodef-top-area-left">
          <div id="text-2" className="widget widget_text qodef-top-bar-widget"> <div className="textwidget"><p>Mail: <a className="qodef-link-hover-underline" href="mailto:info@shynex.in" rel="noopener">info@shynex.in</a></p>
          </div>
          </div><div id="text-3" className="widget widget_text qodef-top-bar-widget"> <div className="textwidget"><p>Phone: <a className="qodef-link-hover-underline" style={{ fontSize: "14px" }} href="tel:+918291573456">+91 82915 73456</a></p>
          </div>
          </div> </div>
        <div className="qodef-widget-holder qodef-top-area-right">
          <div id="text-4" className="widget widget_text qodef-top-bar-widget"> <div className="textwidget"><p>Follow us:</p>
          </div>
          </div><div id="touchup_core_social_icons_group-4" className="widget widget_touchup_core_social_icons_group qodef-top-bar-widget"> <div className="qodef-social-icons-group">
            <span className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal" data-hover-color="rgba(255,255,255,0.8)" style={{ margin: "0 16px 0 -13px" }}>
              <a itemprop="url" href="https://www.facebook.com/QodeInteractive/" rel="noopener noreferrer" target="_blank">
                <span className="qodef-icon-elegant-icons social_facebook qodef-icon qodef-e" style={{ fontSize: "21px" }}><TiSocialFacebook />
                </span> </a>
            </span><span className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal" data-hover-color="rgba(255,255,255,0.8)" style={{ margin: "0 19px 0 0 " }}>
              <a itemprop="url" href="https://www.youtube.com/QodeInteractiveVideos" rel="noopener noreferrer" target="_blank">
                <span className="qodef-icon-elegant-icons social_youtube qodef-icon qodef-e" style={{ fontSize: "21px" }}><TiSocialYoutube /></span> </a>
            </span><span className="qodef-shortcode qodef-m  qodef-icon-holder  qodef-layout--normal">
              <a itemprop="url" href="https://twitter.com/QodeInteractive" rel="noopener noreferrer" target="_blank">
                <span className="qodef-icon-elegant-icons social_twitter qodef-icon qodef-e" style={{ fontSize: "21px" }}><TiSocialInstagram /></span> </a>
            </span> </div>
          </div> </div>
      </div>
    );
  }
  else {
    return null;
  }
}
