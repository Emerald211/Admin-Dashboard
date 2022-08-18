import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubesStacked,
  faSignsPost,
  faUser,
    faCoins,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

function Mobile() {
  const closeNav = (e) => {
    document.querySelector(".mobile").style.width = "0px";

    const li = document.querySelectorAll(".li");
    li.forEach((eachLink) => {
      if (e.target === eachLink) {
        eachLink.style.background = "#990099";
        eachLink.style.borderRadius = "10px";
      } else {
        eachLink.style.background = "none";
      }
    });
  };

  return (
    <div className="mobile">
      <h2 onClick={closeNav}> X</h2>
      <Link
        onClick={closeNav}
        className="li"
        style={{ textDecoration: "none", color: "white" }}
        to="/admin/"
      >
        {" "}
        <FontAwesomeIcon className="mr-2" icon={faCubesStacked} /> Dashboard
      </Link>
      <Link
        onClick={closeNav}
        className="li"
        style={{ textDecoration: "none", color: "white" }}
        to="jobs"
      >
        {" "}
        <FontAwesomeIcon className="mr-2" icon={faSignsPost} /> Posts
      </Link>
      <Link
        onClick={closeNav}
        className="li"
        style={{ textDecoration: "none", color: "white" }}
        to="dashboard"
      >
        {" "}
        <FontAwesomeIcon className="mr-2" icon={faUser} /> Accounts
      </Link>
      <Link
        onClick={closeNav}
        className="li"
        style={{ textDecoration: "none", color: "white" }}
        to="dashboard"
      >
        {" "}
        <FontAwesomeIcon className="mr-2" icon={faCoins} /> Earnings
      </Link>
      <Link
        onClick={closeNav}
        className="li"
        style={{ textDecoration: "none", color: "white" }}
        to="/"
      >
        {" "}
        <FontAwesomeIcon className="mr-2" icon={faArrowRightFromBracket} /> Logout
      </Link>
    </div>
  );
}

export default Mobile;
