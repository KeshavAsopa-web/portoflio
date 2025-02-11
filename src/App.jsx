/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Keshav Asopa",
  title: "Full Stack Developer",
  email: "keshavasopa35@example.com",
  gitHub: "https://github.com/KeshavAsopa-web",
  linkedIn: "https://www.linkedin.com/in/keshav-asopa-5aa260287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;