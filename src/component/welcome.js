import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHands } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowRightToBracket,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import Mobile from "./mobile";
import { useNavigate } from "react-router-dom";

function Welcome() {

    let navigate = useNavigate()

    const logOut = () => {
        navigate("/")
    }
    const openNav = () => {
         document.querySelector('.mobile').style.width = "250px"
    }
  return (
    <div className="flex items-center welcome ">
      <FontAwesomeIcon onClick={openNav} className="mobile-nav" icon={faHamburger} />
      <h2 className=" font-bold font-sans text-lg">Welcome Admin</h2>
      <FontAwesomeIcon className="ml-2 text-brown-200" icon={faHands} />

      <button onClick={logOut} className="ml-auto p-2 flex items-center justify-center font-bold logout-btn">
        Logout <FontAwesomeIcon className="ml-2" icon={faArrowRightToBracket} />{" "}
      </button>
      <Mobile />
    </div>
  );
}

export default Welcome;
