import {
  drawerWidth,
  transition,
  container
} from "../../../jss/material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: "100%"
    },
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
