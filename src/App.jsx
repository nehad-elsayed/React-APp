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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
let routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "Navbar", element: <Navbar /> },
      { index: true, element: <Header /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Footer", element: <Footer /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
