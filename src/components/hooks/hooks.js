import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [value, setValue] = useState(0);
  const [arrau, setArrau] = useState([
    { name: "Sanya", age: 10 },
    { name: "Baba", age: 11 },
  ]);
  const [num, setNum] = useState(0);
  function func1() {
    setArrau([...arrau, { name: "Daodg" }, ...arrau, ...arrau]);
    // setValue((prevState) => prevState + 1);
  }
  console.log(arrau);
  //   useEffect(() => {
  //     console.log(value);
  //   }, [value]);
  const IncrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setNum(num + 1);
      console.log(num);
    }
  };
  const IncrementBySix = () => {
    for (let i = 0; i < 5; i++) {
      setNum((prevNum) => prevNum + 1);
      console.log(num);
    }
  };
  return (
    <div style={{ color: "white" }} onClick={func1}>
      {num}
    </div>
  );
};
export default Hooks;
