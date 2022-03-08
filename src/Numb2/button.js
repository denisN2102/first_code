import React from "react";

export const Button1 = ({ name, info }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(info);
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button1;
