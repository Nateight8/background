import React from "react";
import Exp from "./Exp";
import Gallery from "./Gallery";

type Props = {};

function Experts({}: Props) {
  return (
    <section className="w-full xl:px-16 lg:px-10 lg:py-16 py-6 px-4 ">
      <h3 className="">Experience Matters</h3>
      <Gallery />
      <div className="h-[0.5px] w-full bg-white opacity-10 my-2" />

      <div className="flex flex-col sm:flex-row justify-between">
        <Exp heading="10" heading2="years" subheading="in the business" />
        <Exp heading="50+" heading2="Happy" subheading="Clients" />
        <Exp heading="Over" heading2="1M+" subheading="Hours of Experience" />
        {/* <Exp heading="A team" subheading="Dedicated to Work" /> */}
      </div>
      <div className="h-[0.5px] w-full bg-white opacity-10 my-2" />
    </section>
  );
}

export default Experts;
