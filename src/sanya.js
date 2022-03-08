// import logo from "./logo.svg";
// import { Component } from "./components/component";
// import { useEffect, useState } from "react";
// import { Button1 } from "./components/button";
// import { Button } from "@material-ui/core";

// const [toggle, setToggle] = useState(false);
// const string = "Имя";
// const [value, setValue] = useState([]);
// const func = () => {
//   setValue(2);
// };
// const func1 = () => {
//   console.log(value);
// };
// const c = "click";
// useEffect(() => {
//   const func5 = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setValue(data));
//   };
//   func5();
// }, []);
// return (
//   <div className="App">
//     {/* <Button1 name={string} info={value} ></Button1> */}
//     <Button variant="contained">submit</Button>
//     <button
//       style={{ width: "10px" }}
//       onClick={() => {
//         setToggle(!toggle);
//       }}
//     >
//       But
//     </button>
//     <div class="container">
//       <div class="loader"></div>
//     </div>
//     <p>Hi</p>
//     <button
//       onClick={() => {
//         console.log(value);
//       }}
//       className="but1"
//     >
//       submit
//     </button>
//     {value.map((user, index) => (
//       <div className="wrap">
//         <img
//           src={
//             user.image
//               ? user.image
//               : "https://img1.goodfon.ru/wallpaper/nbig/f/6b/anonymous-anonimus-anonim.jpg"
//           }
//           className="img"
//         ></img>
//         <div className="user__info">
//           <h1>{user.name}</h1>
//           <h3>{user.username}</h3>
//           <hr />
//           <p>{user.email}</p>
//         </div>
//       </div>
//     ))}
//     {toggle ? <div></div> : null}
//   </div>
// );
