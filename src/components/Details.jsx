import { useState } from "react";

export default function Details() {
  let [academy, setAcademy] = useState("It share");

  let handleClick = () => {
    // academy = "Nasr city";
    setAcademy("Nasr city");
    console.log(academy);
  };

  let handleAcademy = (ev) => {
    setAcademy(ev.target.value)
  };

  // let handleClick = function(){

  // }
  return (
    <div>
      <h3>Academy name : {academy}</h3>
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleAcademy} />
    </div>
  );
}
