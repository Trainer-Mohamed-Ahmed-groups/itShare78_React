import { useEffect, useRef } from "react";

export default function Home() {
  let inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={()=> inputRef.current.focus()}>Click me</button>
    </div>
  );
}
