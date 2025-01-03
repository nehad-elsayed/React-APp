// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
