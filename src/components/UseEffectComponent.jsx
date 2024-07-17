import { useEffect, useState } from "react";

export default function UseEffectComponent() {
  const [username, setUserName] = useState("");
  const [lastName, setLastName] = useState("");

  let handleChange = (ev) => {
    setUserName(ev.target.value);
  };

  useEffect(() => {
    console.log("Rendered");
  }, []);

  useEffect(() => {
    if (username === "") return;
    console.log("Changed");
  }, [username, lastName]);

  useEffect(() => {
    return () => {
      console.log("Died");
    };
  }, []);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
      <div>
        User name is : {username} {lastName}
      </div>
    </div>
  );
}
