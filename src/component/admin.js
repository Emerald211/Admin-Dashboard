import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import "./admin.css";
import Dashboard from "./dashboard";
import Jobs from "./jobs";
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
