import Image from "next/image";
import React from "react";
import TextScene from "../threejs/TextScene";
import Experts from "./Experts";

type Props = {};

function Overview({}: Props) {
  return (
    <section className="  min-h-screen h-screen  px-4 md:px-16  w-full flex items-center justify-center ">
      <div className="w-full h-[30rem] relative bg-cover bg-opacity-5 flex justify-center flex-col ">
        <Image
          className="hidden md:block"
          src="/images/overview.png"
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.03, userSelect: "none" }}
        />
        <div className="bg--500  relative max-w-sm ">
          <h3>Who we are</h3>
          <div
            className="bg--900 w-60  h-11 absolute  -z-10 right- right-4 bottom-0 "
            style={{
              opacity: 0.7,
              background:
                "linear-gradient(270deg, #600000 12.08%, rgba(96, 0, 0, 0) 95.42%)",
            }}
          />
        </div>
        <div className="w-full  flex flex-col md:flex-row md:justify-between items-center">
          <div className="md:h-[70vh] flex-1 ">
            <div className="h-full w-full ">{/* <TextScene /> */}</div>
          </div>
          <div className=" w-full max-w-2xl h-full">
            <p className="font-light opacity-60 text-base">
              Background Works is a trusted and reliable construction firm with
              years of experience in the industry. Our team of skilled
              professionals is dedicated to delivering high-quality, functional,
              and sustainable structures that meet the unique needs of our
              clients. We work closely with you to ensure that your vision is
              realized, from planning and design to construction and completion.
              Choose us for your next project and experience the difference our
              expertise and dedication can make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
