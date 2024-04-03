import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container">
    <h1>Merve</h1>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
