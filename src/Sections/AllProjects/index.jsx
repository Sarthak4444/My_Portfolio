import React from "react";
import MauryasEvents from "./MauryasEvents.png";
import MauryasCuisine from "./MauryasCuisine.png";
import Lume from "./Lume.png";
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
                  href="https://mauryasevents.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[400px] object-cover h-[300px] hover:scale-110 cursorCustom-Pointer transition-all"
                    src={MauryasEvents}
                    alt="MauryasEvents"
                  />
                </a>
              </div>
              <div className="flex-1 p-5 max-w-[400px]">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
                    MAURYAS EVENTS
                  </h1>
                  <p className="text-white source-code-pro-500 text-lg leading-6">
                    This is a private event booking platform built with Next.js,
                    React.js, and MongoDB. Users can reserve events with a fee,
                    securely processed via Stripe, and receive instant email
                    confirmations via Nodemailer.
                  </p>
                  <a
                    href="https://mauryasevents.com"
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
                  href="https://lume-sepia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[400px] h-[300px] object-cover hover:scale-110 cursorCustom-Pointer transition-all"
                    src={Lume}
                    alt="Lume"
                  />
                </a>
              </div>
              <div className="flex-1 p-5 max-w-[400px]">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
                    LUME
                  </h1>
                  <p className="text-white source-code-pro-500 text-lg leading-6">
                    This is a journaling platform that helps users track their
                    daily entries and emotions with mood analytics. Built with
                    Next.js, React.js, PostgreSQL, and Clerk, it offers a
                    seamless writing experience and secure authentication
                  </p>
                  <a
                    href="https://lume-sepia.vercel.app/"
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
                  href="https://mauryascuisine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[400px] h-[300px] object-cover hover:scale-110 cursorCustom-Pointer transition-all"
                    src={MauryasCuisine}
                    alt="MauryasCuisine"
                  />
                </a>
              </div>
              <div className="flex-1 p-5 max-w-[400px]">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
                    MAURYAS CUISINE
                  </h1>
                  <p className="text-white source-code-pro-500 text-lg leading-6">
                    MauryasCuisine is a modern restaurant platform built with
                    Next.js and MongoDB, offering seamless table reservations,
                    gift card purchases, and a loyalty rewards system. Users can
                    book tables, buy and redeem gift cards, and earn points on
                    purchases.
                  </p>
                  <a
                    href="https://mauryascuisine.vercel.app/"
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
