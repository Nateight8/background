import React from "react";

type Props = {
  label: string;
  placeholder: string;
  name: string;
};

function InputField({ name, label, placeholder }: Props) {
  return (
    <div className="my-4">
      <label htmlFor={name} className="text-lg capitalize">
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        className="w-full border-b-[1px]  border-opacity-40 border-white hover:border-opacity-70 focus:border-b-2 focus:outline-none text-base focus:border-opacity-100  py-2 px-2 bg-transparent"
      />
    </div>
  );
}

export default InputField;
