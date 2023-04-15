import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
export const NavBar = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
        <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
        </button>
          <img
            alt="Hindalco Logo"
            className="hindalcoicon"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Aditya_Birla_Group_Logo.svg/1200px-Aditya_Birla_Group_Logo.svg.png"
          />
          <Link className="navbar-brand page-scroll" to="/">
            Aditya Birla Groups
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/orderHistory">Order History</Link>
            </li>
            <li>
              <Link to="/requirement">Requirement</Link>
            </li>
            <li>
              <Link to="/quotations">Quotations</Link>
            </li>
            <li>
              <Link to="/invoices">Invoice</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
