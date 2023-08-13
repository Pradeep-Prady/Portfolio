import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-stone-900">
      <div className="w-full text-center py-3">
        <h2 className="text-white head-font">
          <span className="head head-font">P</span>radeep M
        </h2>
        <p className="my-1 text-white  head-font">
          Web <span className="head head-font">D</span>eveloper
        </p>
      </div>
      <div className="w-full text-center">
        {/* <h2 className="text-white">social media</h2> */}
        <div className="flex items-center justify-center gap-5 text-2xl my-5 text-white">
          <i className="fa fa-envelope "></i>
          <i className="fa-brands fa-github "></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="w-full text-center flex-row sm:flex items-center justify-center gap-7 mb-3">
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          Home
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          Skills
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          About
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          Portfolio
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          Resume
        </p>
        <p className="my-1 text-white text-sm hover:head cursor-pointer">
          Contact
        </p>
      </div>
      <div className="border-t py-3 text-center">
        <p className="py-3 text-stone-600 text-sm ">
          &copy; Copyright reserved by Pradeep M
        </p>
      </div>
    </div>
  );
}
