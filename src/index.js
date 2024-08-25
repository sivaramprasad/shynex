import React from "react";
import { hydrate, render, ReactDOM } from "react-dom";
import App from "./App.js";
import { register } from "./serviceWorker.js";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
register();
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}><App /></Provider>, rootElement);
} else {
  render(<Provider store={store}><App /></Provider>, rootElement);
}