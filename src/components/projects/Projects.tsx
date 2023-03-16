import React from "react";
// import Swiper from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./Project";
// Import Swiper styles
import "swiper/css";
import data from "@/data/data";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full px-4  xl:px-16 lg:px-10">
        <h2 className="text-3xl pb-8 text-center">PROJECTS</h2>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              //   spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              //   spaceBetween: 25,
            },
          }}
        >
          {data.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <Project project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
