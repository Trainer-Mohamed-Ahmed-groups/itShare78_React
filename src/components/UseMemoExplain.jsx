import { useMemo, useState } from "react";

export default function UseMemoExplain() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  let fullName = useMemo(
    () => (
      <h2
        style={{
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
        }}
      >
        {firstName + lastName}
      </h2>
    ),
    [firstName, lastName]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        onChange={(ev) => setFirstName(ev.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="last name"
        onChange={(ev) => setLastName(ev.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="age"
        onChange={(ev) => setAge(ev.target.value)}
      />
      <br /> <br />
      <div>First name is : {firstName}</div>
      <div>Last name is : {lastName}</div>
      <hr />
      <div>Full name is : {fullName}</div>
      <hr />
      <div>Age is : {age}</div>
    </div>
  );
}
