import React from "react";
import Resume from "./../../Images/Resume.png";

function index() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center relative">
        <div className="custom-shape-divider-top-1727413453">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="flex justify-center items-center md:flex-row flex-col p-10 max-w-[1000px] m-auto">
          <div>
            <img className="rounded-xl h-[300px] w-[600px] object-left-top md:mb-0 mb-16" src={Resume} alt="resume" />
          </div>
          <div className="flex flex-col items-center justify-center pl-0 md:pl-16">
            <h1 className="text-[#14E956] source-code-pro-800 text-4xl text-center mb-5">
              My Resume
            </h1>
            <p className="text-white source-code-pro-500 text-lg leading-6 my-6">
              Checkout my resume if you are interested. It is in pdf format and
              can be downloaded.
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <a href="https://docs.google.com/document/d/1YL-xHXeE81fxGZqgHSCTV3kBa_M7MFzjJCjgHKvvVxk/edit?usp=sharing" target="_blank">
                <button className="p-2 px-7 hover:scale-110 cursorCustom-Pointer transition-all source-code-pro-800 rounded-full bg-transparent border-[2px] border-[#14E956] hover:bg-[#14E956] text-white mt-4 hover:text-black">
                  View
                </button>
              </a>
              <a href="./../../../../Public/Resume/Sarthak-Maurya_Resume.pdf" download="Sarthak-Maurya_Resume.pdf"> 
                <button className="p-2 px-7 hover:scale-110 cursorCustom-Pointer transition-all source-code-pro-800 rounded-full bg-transparent border-[2px] border-[#14E956] hover:bg-[#14E956] text-white mt-4 hover:text-black">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1727413771">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default index;
