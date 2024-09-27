import React from "react";
import HeroBanner from "./Sections/HeroBanner";
import ToolsAndTech from "./Sections/ToolsAndTech";
import AllProjects from "./Sections/AllProjects";
import Testimonials from "./Sections/Testimonials";
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
      <Testimonials />
    </>
  );
}

export default App;
