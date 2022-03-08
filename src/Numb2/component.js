import React, { useState } from "react";

export const Component = ({ name }) => {
  const [but, setBut] = useState(false);
  const arr = ["Василь", "Дуциль", "Пердиль"];
  const func2 = () => {
    console.log("10");
  };
  const func1 = (a, b) => {
    return a + b;
  };
  const d = func1(25, 2);
  return (
    <div className="wrapper">
      {arr.map((elem, idx) => (
        <h1 key={idx}>{elem}</h1>
      ))}
      <button
        className="but11"
        onClick={() => {
          setBut(!but);
          console.log(but);
        }}
      >
        {but ? name : "Submit"}
      </button>
    </div>
  );
};
