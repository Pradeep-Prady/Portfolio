import React from "react";
import profile from "../images/about.png";

export default function About() {
  return (
    <div
      className="w-full h-auto  flex items-center justify-center sm:h-screen bg-stone-950  sm:flex sm:items-center sm:justify-center"
      id="about"
    >
      <div className="w-5/6  h-auto  sm:flex sm:items-center sm:justify-center">
        <div className="w-full h-[300px] sm:w-[300px] sm:h-[420px]   bg-stone-900 flex items-center justify-center">
          <img src={profile} alt="aboutProfile" className="" />
        </div>
        <div
          className="w-full h-auto sm:w-[300px] sm:h-[420px]   bg-stone-900 scale-110 shadow text-white
      "
        >
          <div className="w-full flex items-center justify-center">
            <h2 className="text-center text-xl my-2 head-font pb-1  w-2/5">
              About <span className="head-font head bg-stone-950 px-1 shadow">M</span>e
            </h2>
          </div>
          <div className="mx-5">
            <h3 className="my-2 head">Personal Details</h3>
            <p className="text-sm tracking-wide leading-relaxed">
              {" "}
              Hello, I'm Pradeep. I am a dedicated web developer with a passion
              for crafting seamless digital experiences. Based in Erode, Tamil
              Nadu, I hold a degree in Computer Science and Engineering from
              Nandha Engineering College. I thrive on crafting elegant code and
              captivating user interfaces. Beyond coding, I explore literature
              and the outdoors. Let's collaborate to create exciting digital
              experiences that make the web a better place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
