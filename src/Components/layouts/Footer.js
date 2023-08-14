import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-stone-900">
      <div className="w-full text-center py-3">
        <h2 className="text-white head-font text-xl title">
          <span className="   title ">P</span>radeep
        </h2>
        <p className="my-1 text-white  head-font">
          Web <span className="head head-font bg-stone-950 px-1 shadow">D</span>
          eveloper
        </p>
      </div>
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-7  text-2xl my-5 text-white">
          <a
            href="mailto:pradeepprady005@gmail.com"
            className="hover:head hover:scale-110"
          >
            <i className="fa fa-envelope "></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Pradeep-Prady"
            className="hover:head hover:scale-110"
          >
            <i className="fa-brands fa-github "></i>
          </a>

          <a
            href="https://www.linkedin.com/in/pradeep-m-30921a23b/"
            target="_blank"
            rel="noreferrer"
            className="hover:head hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:head hover:scale-110"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="w-full text-center flex-row sm:flex items-center justify-center gap-7 mb-3">
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          <a href="#home">Home</a>
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          <a href="#skills">Skills</a>
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          <a href="#about">About</a>
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          <a href="#portfolio">Portfolio</a>
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          <a href="#resume">Resume</a>
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="border-t border-stone-700 py-3 text-center">
        <p className="py-3 text-stone-600 text-sm ">
          &copy; Copyright reserved by Pradeep M
        </p>
      </div>
    </div>
  );
}
