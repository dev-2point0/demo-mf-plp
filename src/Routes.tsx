import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";

const appRouting = (
  <div className="mf-host">
    <div className="mf-host-header">PLP Host</div>
    <Router>
      <nav>
      </nav>
      <div className="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default appRouting;