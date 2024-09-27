import React from "react";
import HeroBanner from "./Sections/HeroBanner";
import ToolsAndTech from "./Sections/ToolsAndTech";
import AllProjects from "./Sections/AllProjects";
import Resume from "./Sections/Resume";
import Footer from "./Sections/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <HeroBanner />
      <ToolsAndTech />
      <AllProjects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
