import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "bootstrap"; // import js file in bootstrap
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
