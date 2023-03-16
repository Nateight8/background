import React from "react";

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <div className="py-2 px-5 bg-white text-[#1E1E1E] font-semibold text-base">
      {text}
    </div>
  );
}

export default Button;
