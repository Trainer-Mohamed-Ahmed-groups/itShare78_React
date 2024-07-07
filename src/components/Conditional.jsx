import { useState } from "react";

export default function Conditional() {
  let [userName, setUserName] = useState("Mohamed Ahmed");

  let handleUserName = () => {
    setUserName(userName ? "" : "Mohamed");
  };
  
  return (
    <div>
      {userName ? <h3>Hello {userName}</h3> : <div>Please register</div>}
      <button onClick={handleUserName}>Click me</button>
      {5 > 30 ? "OK" : "NO"}
    </div>
  );
}
