import React from "react";
import EducraftMockup from "./../../Images/EducraftMockup.png";
import SentiMockup from "./../../Images/SentiMockup.png";
import ATWMockup from "./../../Images/ATWMockup.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function index() {
  const gsapRef = useRef(null);
  const gsapRef2 = useRef(null);

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      transform: "translateX(-73%)",
      scrollTrigger: {
        trigger: gsapRef2.current,
        scroller: "body",
        start: "top top",
        end: "top -90%",
        scrub: 25,
        pin: true,
      },
    });
  });

  return (
    <>
      <div
        ref={gsapRef2}
        className="bg-[url(https://img.freepik.com/premium-vector/neon-green-flat-wireframe-grid-vanishing-checkered-floor-ceiling-concept-horizontal-chessboard_497399-1968.jpg?w=826)] bg-no-repeat bg-center bg-[length:150%_220%]"
      >
        <div className="h-screen w-screen flex relative overflow-hidden bg-[#00000070]">
          <span className="source-code-pro-800 text-4xl absolute left-1/2 -translate-x-1/2 text-[#14E956] bg-[#115f3468] backdrop-blur-3xl w-fit p-4 px-10 tracking-wider rounded-2xl h-fit mt-10 border-[4px] border-[#14E956]">
            Projects
          </span>
          <div
            ref={gsapRef}
            className="flex flex-row items-center w-fit mt-16 ml-[10%] md:ml-[17%]"
          >
            <span className="md:min-w-[900px] min-w-[300px] md:min-h-[400px] min-h-[500px] flex flex-col md:flex-row items-center justify-center rounded-3xl backdrop-blur-lg bg-[#02170950] border-[4px] border-[#14dd57ab] ">
              <div className="flex-2">
                <a
                  href="http://educraft-shop.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[500px] hover:scale-110 cursorCustom-Pointer transition-all"
                    src={EducraftMockup}
                    alt="Educraft"
                  />
                </a>
              </div>
              <div className="flex-1 p-5 max-w-[400px]">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
                    EDUCFART
                  </h1>
                  <p className="text-white source-code-pro-500 text-lg leading-6">
                    EduCraft is an online platform designed to offer a seamless
                    experience for purchasing courses and books, built using
                    React and styled with Tailwind CSS.
                  </p>
                  <a
                    href="http://educraft-shop.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 px-7 hover:scale-110 cursorCustom-Pointer transition-all source-code-pro-800 rounded-full bg-transparent border-[2px] border-[#14E956] hover:bg-[#14E956] text-white mt-4 hover:text-black">
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </span>
            <div className="w-80 h-1 bg-[#14E956]" />
            <span className="md:min-w-[900px] min-w-[300px] md:min-h-[400px] min-h-[500px] flex flex-col md:flex-row items-center justify-center rounded-3xl backdrop-blur-lg bg-[#02170950] border-[4px] border-[#14dd57ab] ">
              <div className="flex-2">
                <a
                  href="http://senti-store.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[500px] hover:scale-110 cursorCustom-Pointer transition-all"
                    src={SentiMockup}
                    alt="Senti"
                  />
                </a>
              </div>
              <div className="flex-1 p-5 max-w-[400px]">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
                    SENTI
                  </h1>
                  <p className="text-white source-code-pro-500 text-lg leading-6">
                    Senti is a modern eCommerce website designed for a seamless
                    shopping experience, built using React.js, Redux and
                    Tailwind CSS.
                  </p>
                  <a
                    href="http://senti-store.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 px-7 hover:scale-110 cursorCustom-Pointer transition-all source-code-pro-800 rounded-full bg-transparent border-[2px] border-[#14E956] hover:bg-[#14E956] text-white mt-4 hover:text-black">
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </span>
            <div className="w-80 h-1 bg-[#14E956]" />
            <span className="md:min-w-[900px] min-w-[300px] md:min-h-[400px] min-h-[500px] flex flex-col md:flex-row items-center justify-center rounded-3xl backdrop-blur-lg bg-[#02170950] border-[4px] border-[#14dd57ab] ">
              <div className="flex-2">
                <a
                  href="https://all-countries-info-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[500px] hover:scale-110 cursorCustom-Pointer transition-all"
                    src={ATWMockup}
                    alt="Around the World"
                  />
                </a>
              </div>
              <div className="flex-1 p-5 max-w-[400px]">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
                    ATW
                  </h1>
                  <p className="text-white source-code-pro-500 text-lg leading-6">
                    ATW (Around The World) is an information-rich website
                    offering detailed insights about over 250 countries,
                    developed using React and Tailwind CSS.
                  </p>
                  <a
                    href="https://all-countries-info-app.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 px-7 hover:scale-110 cursorCustom-Pointer transition-all source-code-pro-800 rounded-full bg-transparent border-[2px] border-[#14E956] hover:bg-[#14E956] text-white mt-4 hover:text-black">
                      Visit
                    </button>
                  </a>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
