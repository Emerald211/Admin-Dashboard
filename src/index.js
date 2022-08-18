import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Admin from "./component/admin";
import Dashboard from "./component/dashboard";
import Jobs from "./component/jobs";
import Editjob from "./component/editjob";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> </Route>
        <Route path="admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="jobs" element={<Jobs />}></Route>
          <Route path="editjob" element={<Editjob />}></Route>
        </Route>
      </Routes>
   </BrowserRouter>
  </React.StrictMode>
);
