import React from "react";

function SocialLinks() {
  return (
    <>
      <div className="flex flex-col gap-2 pointer-events-auto">
        <a
          href="https://www.instagram.com/_the.real.sarthak"
          target="_blank"
          rel="noopener noreferrer"
          className="!hover:cursorCustom-Pointer"
        >
          <i className="fa-brands fa-instagram hover:cursorCustom-Pointer text-[#666666] text-2xl bg-black rounded-full h-12 w-12 flex items-center justify-center relative transition duration-500 hover:border hover:border-[#14E956] hover:shadow-[0_0_10px_#14E956] hover:text-[#14E956] hover:text-shadow hover:scale-105"></i>
        </a>
        <a
          href="https://twitter.com/Sarthak_4444"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter cursorCustom-Pointer text-[#666666] text-2xl bg-black rounded-full h-12 w-12 flex items-center justify-center relative transition duration-500 hover:border hover:border-[#14E956] hover:shadow-[0_0_10px_#14E956] hover:text-[#14E956] hover:text-shadow hover:scale-105"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sarthak-maurya-8b4350305/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in cursorCustom-Pointer text-[#666666] text-2xl bg-black rounded-full h-12 w-12 flex items-center justify-center relative transition duration-500 hover:border hover:border-[#14E956] hover:shadow-[0_0_10px_#14E956] hover:text-[#14E956] hover:text-shadow hover:scale-105"></i>
        </a>
        <a
          href="https://github.com/Sarthak4444/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github cursorCustom-Pointer text-[#666666] text-2xl bg-black rounded-full h-12 w-12 flex items-center justify-center relative transition duration-500 hover:border hover:border-[#14E956] hover:shadow-[0_0_10px_#14E956] hover:text-[#14E956] hover:text-shadow hover:scale-105"></i>
        </a>
        <a href="mailto:maursarthak100@gmail.com">
          <i className="fa-regular fa-envelope cursor-Pointer text-[#666666] text-2xl bg-black rounded-full h-12 w-12 flex items-center justify-center relative transition duration-500 hover:border hover:border-[#14E956] hover:shadow-[0_0_10px_#14E956] hover:text-[#14E956] hover:text-shadow hover:scale-105"></i>
        </a>
      </div>
    </>
  );
}

export default SocialLinks;
