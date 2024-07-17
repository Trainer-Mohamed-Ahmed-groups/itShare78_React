import React from "react";
function Btn({ increment }) {
  return (
    <button
      style={{
        background: "#" + Math.floor(Math.random() * 16777215).toString(16),
      }}
      onClick={increment}
    >
      Increase
    </button>
  );
}
export default React.memo(Btn);
