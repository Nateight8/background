import React from "react";
import InputField from "../form/InputField";
import RadioBtn from "../form/RadioBtn";

type Props = {};

function Quote({}: Props) {
  return (
    <div className="min-h-screen w-full xl:px-16 lg:px-10 lg:py-16 py-6 px-4">
      <div className="h-full w-full  flex flex-col md:flex-row  md:justify-between item-center">
        <div className=" pb-4  md:flex-1">
          <div>
            <h3 className="text-5xl md:text-6xl md:w-[25rem] font-serif">
              Get a Quote
            </h3>
            <p className="text-base mt-2 md:w-96">
              Find out how affordable your dream can be. Request a quote now!
            </p>
          </div>
        </div>
        <div className="h-full  md:flex-1 space-y-8">
          <InputField name="name" placeholder="Name" label="Hello, I am:" />
          <div className="md:flex gap-2">
            <div className="flex-1">
              <InputField
                name="email"
                placeholder="Email address"
                label="my email Address is:"
              />
            </div>
            <div className="flex-1">
              <InputField
                name="phNumber"
                placeholder="Phone Number"
                label="and Phone number"
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <span className="text-lg capitalize">Project scop:</span>
            <RadioBtn label="design  only" />
            <RadioBtn label="construction only" />
            <RadioBtn label="full design and build" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
