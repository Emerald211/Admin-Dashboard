import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component/login.css";
import logo from "../component/images/brand-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHands, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState([]);
  const [showPassword, setshowPassword] = useState(false);
  useEffect(() => {
    fetch("http://localhost:9000/admin")
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = document.querySelector("form");

    admin.map((eachAdmin) => {
      if (
        form.email.value === eachAdmin.email &&
        form.password.value === eachAdmin.password
      ) {
        console.log("Correct");

        setTimeout(() => {
          document.querySelector(".message").style.display = "flex";
          document.querySelector(".message").style.border = "2px solid purple";
          document.querySelector(".message").style.background = "#990099";

          document.querySelector(".message-text").textContent =
            "Login Successful";
          document.querySelector(".message-text").style.color = "white";
        }, 1000);
        setTimeout(() => {
          document.querySelector(".message").style.display = "none";
          navigate("/admin/dashboard");
        }, 3000);
      } else {
        console.log("Wrong");
        setTimeout(() => {
          document.querySelector(".message").style.display = "flex";
          document.querySelector(".message").style.border = "2px solid red";
          document.querySelector(".message").style.background = "none";

          document.querySelector(".message-text").textContent =
            "Incorrect Login Info";
          document.querySelector(".message-text").style.color = "red";
          document.querySelector(".message-text").style.fontSize = "1rem";
        }, 1000);
        setTimeout(() => {
          document.querySelector(".message").style.display = "none";
        }, 3000);
      }

      return true;
    });
  };

  console.log(admin);

  return (
    <div className="loginpage">
      <div className="login">
        <h4>
          Welcome Admin <FontAwesomeIcon icon={faHands} />
        </h4>
        <div>
          <form onSubmit={handleLogin} action="">
            <div className="message">
              <h1 className="message-text">.</h1>
            </div>
            <div>
              <label htmlFor="">Email*</label>
              <input type="Email" name="email" required/>
            </div>
            <div>
              <label htmlFor="">Password*</label>
              <input type={showPassword ? "text" : "password"} name="password" required />
              <FontAwesomeIcon onClick={() => setshowPassword(!showPassword)} style={{position: 'absolute', bottom: "15px", right: "14px", cursor: 'pointer'}} icon={showPassword ? faEye : faEyeSlash} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input style={{ width: "20px" }} type="checkbox" name="" id="" required />
              <h5>Remember me</h5>
              <h5 style={{ marginLeft: "auto" }}>Forgot Password ?</h5>
            </div>
            <div>
              <button className="submit" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="company">
        <img style={{ width: "30%", height: "30%" }} src={logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
