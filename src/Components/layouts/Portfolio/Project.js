import React from "react";
import narikootam from "../../images/narikootam/naritookam.png";
import { Link } from "react-router-dom";

export default function Project({ project }) {
  return (
    <div className="flex-none carousel-item mx-10 h-auto ">
      <div className="w-[400px] h-[250px] rounded-md overflow-hidden shadow">
        <img src={project.pic} alt="narikootam" className="h-full w-full" />
      </div>
      <div className="w-full flex items-center justify-center">
        <Link to={`/projects/${project.id}`} className="text-white my-2">
           {project.title}
        </Link>
      </div>
    </div>
  );
}
