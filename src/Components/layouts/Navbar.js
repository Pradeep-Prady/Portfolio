import React, { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setNav(false); // Close the mobile menu after clicking a link
  };

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="w-full bg-stone-900 relative top-0 left-0 flex items-center justify-center">
      <div className="w-11/12 bg-stone-950 mt-5">
        <nav className=" w-full  flex items-center justify-between py-3 px-5 sm:py-5 sm:px-9 md:px-10 ">
          <div>
            <a href="/" className="text-2xl md:text-4xl text-white title hover:head">
              Pradeep
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center gap-3 text-white ">
            {navigationItems.map((nav) => (
              <a
                href={`#${nav.id}`}
                key={nav.label}
                className={`my-2 py-1 px-5 hover:link ${
                  activeSection === nav.label ? "link" : ""
                }`}
                onClick={() => handleLinkClick(nav.label)}
              >
                {nav.label}
              </a>
            ))}
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
          {navigationItems.map((nav) => (
            <div
              key={nav.label}
              className="w-full flex items-center justify-center"
            >
              <a
                href={`#${nav.id}`}
                className={`my-2 py-2 block hover:link w-4/5 sm:w-3/5 items-center ${
                  activeSection === nav.label ? "link" : ""
                }`}
                onClick={() => handleLinkClick(nav.label)}
              >
                {nav.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
