import React, { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setNav(false); // Close the mobile menu after clicking a link
  };
  return (
    <div className="w-full bg-stone-900 relative top-0 left-0 flex items-center justify-center">
      <div className="w-11/12 bg-stone-950 mt-5">
        <nav className=" w-full  flex items-center justify-between py-3 px-5 sm:py-5 sm:px-9 md:px-10 ">
          <div>
            <a href="/" className="text-xl text-white hover:head">
              PRADEEP
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center gap-3 text-white ">
            <p
              className={`my-2 py-1 px-5 hover:link ${
                activeSection === "Home" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </p>
            <p
              className={`my-2 py-1 px-5 hover:link ${
                activeSection === "Skills" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Skills")}
            >
              Skills
            </p>
            <p
              className={`my-2 py-1 px-5 hover:link ${
                activeSection === "About" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("About")}
            >
              About
            </p>
            <p
              className={`my-2 py-1 px-5 hover:link ${
                activeSection === "Portfolio" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Portfolio")}
            >
              Portfolio
            </p>
            <p
              className={`my-2 py-1 px-5 hover:link ${
                activeSection === "Resume" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Resume")}
            >
              Resume
            </p>
            <p
              className={`my-2 py-1 px-5 hover:link ${
                activeSection === "Contact" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact
            </p>
          </div>
          <button className="  md:hidden" onClick={() => setNav(!nav)}>
            <i
              className={`${
                nav ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              } hover:head text-xl text-white `}
            ></i>
          </button>
        </nav>
        <div
          className={` ${
            nav ? "visible" : "hidden "
          }   bg-stone-950 w-full py-2 text-white text-center`}
        >
          <div className="w-full flex items-center justify-center">
            <p
              className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5  items-center ${
                activeSection === "Home" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p
              className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5  items-center ${
                activeSection === "Skills" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Skills")}
            >
              Skills
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p
              className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5  items-center ${
                activeSection === "About" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("About")}
            >
              About
            </p>
          </div>

          <div className="w-full flex items-center justify-center">
            <p
              className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5  items-center ${
                activeSection === "Portfolio" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Portfolio")}
            >
              Portfolio
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p
              className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5  items-center ${
                activeSection === "Resume" ? "link" : ""
              }`}
              onClick={() => handleLinkClick("Resume")}
            >
              Resume
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p
              className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5  items-center ${
                activeSection === "Contact" ? "link" : ""

              }`}
              onClick={() => handleLinkClick("Contact")}

            >
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
