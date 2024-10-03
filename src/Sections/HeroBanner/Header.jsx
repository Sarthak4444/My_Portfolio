import React from "react";
import NavBar from "./../../Components/NavBar";
import SocialLinks from "./SocialLinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Sarthak_logo from "./../../Images/Sarthak_logo.jpg";

function Header() {
  const gsapRef = useRef(null);

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      duration: 3.5,
      y: -50,
      opacity: 0,
      ease: "elastic.out(1.5, 0.7)",
      delay: 0.2,
    });
  });

  return (
    <>
      <div
        ref={gsapRef}
        className="flex flex-row items-center md:-mb-7 mb-14 justify-between px-6 m-auto h-28 md:max-w-[1400px] max-w-full "
      >
        <div className="flex flex-row items-center justify-start text-[#14E956] source-code-pro-800 text-4xl">
          <img
            className="w-20 h-20 rounded-full"
            src={Sarthak_logo}
            alt="Sarthak"
          />
        </div>
      </div>
        <div className="fixed top-0 right-0" >
          <NavBar />
        </div>
    </>
  );
}

export default Header;
