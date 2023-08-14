import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import food from "../../images/foodstall/food (1).png";
import projects from "../../data";
import Project from "./Project";
export default function Portfolio() {
  return (
    <div id="portfolio" className="w-full h-screen bg-stone-900">
      <div className="w-full  pt-16 text-center">
        <h2 className="text-3xl head-font text-white">Recent <span className="head-font head bg-stone-950 px-1 shadow">P</span>rojects</h2>
      </div>
      <div className="flex w-full h-4/5  px-5 py-12  items-center overflow-x-scroll scroll ">
        {projects.map((project) => (
          <Project project={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
}
