import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "bootstrap"; // import js file in bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
