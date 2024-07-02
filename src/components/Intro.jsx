import { Hello, Test } from "../shared/shared";

export default function Intro() {
  let handleClick = () => {
    console.log("OK");
  };
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      <Test />
      <Hello />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
