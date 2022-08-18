import React from "react";
import {  Outlet } from "react-router-dom";
import "./admin.css";
import Sidenav from "./sidenav";
import Welcome from "./welcome";

function Admin() {
  return (
    <div className="flex">
      <Sidenav />

      <div>
        <Welcome />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
