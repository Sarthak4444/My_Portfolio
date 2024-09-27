import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import MatterCanvas from "./MatterCanvas";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

function index() {

  const gsapRef = useRef(null);

  const scrollToSection = () => {
    gsap.to(window, {
      duration: 1.5,  
      scrollTo: "#ScrollHere", 
      ease: "power2.inOut",  
    });
  };

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      duration: 1.5,
      opacity: 0,
      delay: 0.3,
    });
  });
  
  return (
    <>
      <div className="absolute inset-0 md:block hidden overflow-hidden">
        <MatterCanvas />
      </div>
      <div className="bg-gradient-to-br from-[#081214] to-[#072b1c] h-screen pointer-events-none">
        <div className="backdrop-blur-sm bg-[#00000040] h-screen">
          <Header />
          <Intro />
          <div ref={gsapRef} className="md:flex hidden justify-center pointer-events-auto items-center hover:cursorCustom-Pointer ">
            <button onClick={scrollToSection} className="px-5 py-2 absolute bottom-12 left-[45%] bg-gradient-to-r rounded-xl cursorCustom-Pointer hover:scale-125 transition-all hover:bg-gradient-to-l  source-code-pro-800 text-2xl from-[#67f192] to-[#1ae95a] ">
              Check Out
            </button>
          </div>
          <div className="fixed top-1/3 right-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
