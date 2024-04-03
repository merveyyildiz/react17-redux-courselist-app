import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Merve</h1>
    <Link to="about" class="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
);

export default HomePage;
