import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2 className="mt-3">We are Sorry, Page Not Found</h2>
        <p className="mb-4 mt-4">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">
          {" "}
          <button type="button" className="btn button">
            Back To Homepage
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
