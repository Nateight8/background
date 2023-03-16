import Image from "next/image";
import React from "react";
import Grid from "./Grid";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="xl:px-16 lg:px-10 h-screen ">
      <div className="h-px w-full bg-white opacity-10 mb-4 " />

      <div className=" w-full relative grid grid-cols-4 gap-px">
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <div className="absolute bg--600 inset-0 flex justify-start items-end px-4 pb-14 lg:pl-12 lg:pb-20">
          <div>
            <h1 className="text-5xl  lg:text-6xl font-normal uppercase">
              Background
            </h1>
            <h1 className=" text-8xl lg:text-9xl font-semibold mt-[-14px] lg:mt-[-28px] uppercase">
              Works
            </h1>
            <p className="mt-[60x] text-base max-w-sm">
              Architectural and Construction Excellence Since [Year of
              Establishment]
            </p>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white opacity-10 mt-4 " />
    </div>
  );
}

export default Hero;
