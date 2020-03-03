import React from "react";
import Navbar from "./components/responsive-navbar/navbar/Navbar.component";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
