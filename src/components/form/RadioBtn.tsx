import React from "react";

type Props = { label: string };

function RadioBtn({ label }: Props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <input
          id={label}
          type="radio"
          name="houseType"
          value={label}
          // checked={houseType === 'bungallow'}
          // onChange={handleChange}
          className="mr-1"
        />
        <label htmlFor={label} className="text-base capitalize">
          {label}
        </label>
      </div>
    </>
  );
}

export default RadioBtn;
