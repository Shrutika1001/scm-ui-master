import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();
  function authnpush() {
    // navigate("/login");
    const loggedIn = localStorage.getItem("loggedIn");
    console.log('====================================');
    console.log(loggedIn);
    console.log('====================================');
    if(loggedIn === null) {
      navigate("/login");
    } else {
      navigate("/inventory");
    }
  }
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <button
                  onClick={authnpush}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get Started
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
