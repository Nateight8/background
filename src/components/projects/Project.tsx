import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  project: {
    src: string;
    info: string;
  };
};

function Project({ project }: Props) {
  const { src, info } = project;
  return (
    <div>
      <div className="slide-wrapper h-[69vh] w-full  relative">
        <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <p className="py-2 text-base font-normal">{info}</p>
    </div>
  );
}

export default Project;
