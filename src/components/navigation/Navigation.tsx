import React from "react";
import Button from "../component/Button";
import LinkComp from "./LinkComp";

type Props = {};

function Navigation({}: Props) {
  return (
    <nav className="sticky ">
      <div className=" hidden  md:flex items-center justify-between px px-8  lg:px-10 py-4 xl:px-16 xl:py-4">
        <div>
          <h6 className="text-base font-light">Background</h6>
          <h6 className="text-[2rem] mt-[-7px] font-semibold">Works</h6>
        </div>
        <div>
          <ul className="text-white flex space-x-9">
            <LinkComp linkText="Projects" />
            <LinkComp linkText="Services" />
            <LinkComp linkText="About Us" />
            <LinkComp linkText="Contact" />
          </ul>
        </div>
        <LinkComp linkText="(+237)-70-123-456-77" />
      </div>
      <div className="flex md:hidden items-center justify-between px-4 py-4">
        <div>
          <h6 className="text-2xl font-semibold">BW</h6>
        </div>
        <Button text="CONTACT" />
      </div>
    </nav>
  );
}

export default Navigation;
