import React from "react";

import react from "../images/react.png";
import node from "../images/node.png";
import java from "../images/java.png";
import python from "../images/python.png";
import html from "../images/html.png";
import css from "../images/css.png";
import mongodb from "../images/mongodb.png";

export default function Skills() {
  return (
    <div className="w-full h-auto sm:h-screen bg-stone-800 ">


      <h2 className="text-center pt-16 pb-10  text-2xl text-white head-font ">
        S<span className="head head-font">k</span>ills
      </h2>

      <div className="flex-row  items-center justify-center w-full h-full">
        <div className="w-full flex items-center justify-evenly sm:hidden">
          <div className="m-2 hover:scale-125  bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={java} alt="react" className="w-[100px]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-evenly">
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={mongodb} alt="react" className="w-[100px] h-[100px]" />
          </div>
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={node} alt="react" className="w-[100px]" />
          </div>
        </div>
        <div className="w-full flex items-center justify-evenly sm:hidden">
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={react} alt="react" className="w-[100px]" />
          </div>
        </div>

        <div className="w-full hidden sm:flex items-center justify-evenly">
          <div className="m-2 hover:scale-125  bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={java} alt="react" className="w-[100px]" />
          </div>{" "}
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={react} alt="react" className="w-[100px]" />
          </div>
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={python} alt="react" className="w-[100px]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-evenly">
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={html} alt="react" className="w-[100px]" />
          </div>
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={css} alt="react" className="w-[100px]" />
          </div>{" "}
        </div>

        <div className="w-full flex items-center justify-evenly sm:hidden">
          <div className="m-2 hover:scale-125 bg-stone-950 flex items-center justify-center w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shadow">
            <img src={python} alt="react" className="w-[100px]" />
          </div>
        </div>

      </div>
    </div>
  );
}
