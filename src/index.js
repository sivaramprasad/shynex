import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { register } from "./serviceWorker.js";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
register();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
