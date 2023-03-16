import React from "react";

type Props = { linkText: string };

function LinkComp({ linkText }: Props) {
  return (
    <>
      <li className="list-none uppercase text-base hover:cursor-pointer">
        {linkText}
      </li>
    </>
  );
}

export default LinkComp;
