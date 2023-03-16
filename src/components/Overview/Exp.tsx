import React from "react";

type Props = {
  heading: string;
  subheading: string;

  heading2?: string;
};

function Exp({ heading, subheading, heading2 }: Props) {
  return (
    <div className=" md:bg--600 p-2 lg:p-8 flex-shrink  flex-1">
      <div className="pt pt-4  w-[10rem] mx-auto">
        <h4 className="text-4xl font-serif opacity-50">{heading}</h4>
        <h4 className="text-4xl font-serif">{heading2}</h4>
        <p className="text-base text-center opacity-50 font-light">
          {subheading}
        </p>
      </div>
    </div>
  );
}

export default Exp;
