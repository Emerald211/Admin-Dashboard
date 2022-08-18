import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/brand-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubesStacked,
  faSignsPost,
  faUser,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

function Sidenav() {


  const activeElement = (e) => {
    const eachList = document.querySelectorAll(".li");

    eachList.forEach((eachItem) => {
      if (e.target === eachItem) {
        eachItem.style.background = "#990099";
        eachItem.style.borderRadius = "10px";
      } else {
        eachItem.style.background = "none";
      }
    });
  };

  return (
    <div className="sidenav">
      <div className="mb-10 flex">
        <img className="w-14" src={logo} alt="" />
      </div>

      <Link onClick={activeElement} className="li" style={{ textDecoration: 'none', color: "white" }} to='/admin/dashboard'> <FontAwesomeIcon className="mr-2" icon={faCubesStacked} /> Dashboard</Link>
      <Link onClick={activeElement} className="li" style={{ textDecoration: 'none', color: "white" }} to='jobs'> <FontAwesomeIcon className="mr-2" icon={faSignsPost} /> Jobs</Link>
      <Link onClick={activeElement} className="li" style={{ textDecoration: 'none', color: "white" }} to='editjob'> <FontAwesomeIcon className="mr-2" icon={faUser} /> Accounts</Link>
      <Link onClick={activeElement} className="li" style={{textDecoration: 'none', color: "white"}} to='dashboard'> <FontAwesomeIcon className="mr-2" icon={faCoins} /> Earnings</Link>
     
    </div>
  );
}

export default Sidenav;
