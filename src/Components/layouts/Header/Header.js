import React from "react";
import profile from "../../images/ss.png";

import blob1 from "../../images/blob1.png";
import blob2 from "../../images/blob2.png";

export default function Header() {
  return (
    <div
      id="home"
      className="w-full h-screen relative bg-stone-900 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full h-screen absolute z-0 bottom-0 left-0 overflow-hidden">
        <img
          src={blob1}
          alt="bg-blob"
          className="w-[400px] md:w-[500px] absolute -bottom-14 -left-16"
        />
      </div>
      <div className="w-full h-screen absolute z-0 bottom-0 left-0 overflow-hidden">
        <img
          src={blob2}
          alt="bg-blob"
          className="w-[400px] md:w-[500px] absolute -top-14 -right-16"
        />
      </div>
      <div className="w-11/12 h-5/6 grid md:grid-cols-2 bg-stone-950 shadow z-40">
        <div className="w-full h-full flex items-center justify-center">
          <div className="px-5 py-3 md:py-10 ">
            <div className="text-3xl sm:text-5xl md:text-6xl   text-white ">
              <h2 className="head-font">Hi,</h2>
              <h2 className="head-font">
                I'm <span className="head head-font">P</span>radeep
              </h2>

              <h2 className="head-font">Web Developer</h2>
            </div>
            <div className="my-5 sm:my-8 flex gap-4 sm:gap-6 text-white text-2xl sm:text-4xl">
              <i class="fa-brands fa-github "></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="my-5">
              <button className="btn text-sm  md:text-lg btn-mywork hover:scale-105">
                My Work
              </button>
              <a href="#contact">
                <button className="btn text-sm md:text-lg hover:scale-105">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className=" w-full h-full flex items-center justify-center  overflow-hidden">
          <img src={profile} alt="profile" className="w-[250px] md:w-[500px]" />
        </div>
      </div>
    </div>
  );
}
