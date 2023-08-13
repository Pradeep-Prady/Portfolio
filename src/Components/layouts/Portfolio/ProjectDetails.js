import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import projects from "./../../data";
import { useParams } from "react-router-dom";
import des from "../../images/des.svg";
import role from "../../images/role.svg";
import link from "../../images/link.svg";

export default function ProjectDetails() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (project) => project.id === parseInt(id)
    );
    setProjectData(selectedProject);
  }, [id]);

  // console.log(projectData.images);
  return (
    <div className="w-full h-full bg-stone-900">
      <div className="w-full h-full grid md:grid-cols-2 ">
        <div className="w-full">
            <div className="w-full h-full flex items-center justify-center">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-[300px] h-[170px] sm:w-[500px] sm:h-[300px] flex justify-center items-center rounded-lg overflow-hidden"
          >
            {projectData?.images?.map((image) => (
              <SwiperSlide key={image.id} className="w-full h-full ">
                <div className="w-full h-full flex items-center justify-center bg-stone-950  shadow">
                  <img
                    src={image.url}
                    alt="projectImage"
                    className="h-full w-auto  absolute"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      

        <div className="w-full h-full  flex-row items-center justify-center p-5  ">
          <div className="bg-stone-950 w-full text-center shadow z-10  scale-95 hover:scale-105">
            <h3 className="head head-font py-2">Project Title</h3>
            <p className="text-white py-2">{projectData?.title}</p>
          </div>
          <div className="grid sm:grid-cols-2  my-4 ">
            <div className=" shadow bg-stone-950 z-0 p-3 scale-95">
              <h3 className="head my-2">Project Description</h3>
              <div className="w-full flex items-center justify-center my-5">
                <img src={des} alt="descriptions" className="w-[200px]" />
              </div>
              <p className="text-white text-sm">{projectData?.description}</p>
            </div>{" "}
            <div className=" shadow bg-stone-950 z-0 p-3 scale-95 ">
              <h3 className="head my-2">Role and Contribution</h3>
              <div className="w-full flex items-center justify-center my-5">
                <img src={role} alt="descriptions" className="w-[200px]" />
              </div>
              <p className="text-white text-sm">{projectData?.role}</p>
            </div>{" "}
          </div>
          <div className=" shadow bg-stone-950 z-0 p-3 scale-95 ">
            <h3 className="head my-2">Technologies Used</h3>

            <p className="text-white text-sm">{projectData?.technologies}</p>
          </div>
          <div className="grid sm:grid-cols-3 my-4">
            <div className=" shadow bg-stone-950 z-0 p-3 scale-95 ">
              <h3 className="head my-2">Project Link</h3>
              <div className="w-full flex items-center justify-center my-5">
                <img src={link} alt="descriptions" className="w-[200px]" />
              </div>
              <p className="text-white text-sm">{projectData?.link}</p>
            </div>
            <div className=" shadow bg-stone-950 z-0 p-3 scale-95 ">
              <h3 className="head my-2">Challenges and Solutions</h3>
              <p className="text-white text-sm">{projectData?.challenges}</p>
            </div>
            <div className=" shadow bg-stone-950 z-0 p-3 scale-95 ">
              <h3 className="head my-2">Lessons Learned</h3>
              <p className="text-white text-sm">{projectData?.lessons}</p>
            </div>
          </div>

          <div className=" shadow bg-stone-950 z-0 p-3 scale-95 ">
            <h3 className="head my-2">Features and Functionality</h3>
            <p className="text-white text-sm">{projectData?.features}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
