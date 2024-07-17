import { useCallback, useState } from "react";
import Btn from "./Btn";

export default function UseCallBackExplain() {
  let [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter(++counter);
  };

  let incrementCallBack = useCallback(increment, []);
  return (
    <div>
      {counter}
      <br />
      <br />
      <Btn increment={incrementCallBack} />
    </div>
  );
}
