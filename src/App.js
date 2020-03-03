import React from "react";
import Navbar from "./components/responsive-navbar/navbar/Navbar.component";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ImageCarousal from "./components/image-carousal/image-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";

function App() {
  return (
    <Router>
      <Navbar />
      <ImageCarousal />
      <TitleMessage />
    </Router>
  );
}

export default App;
