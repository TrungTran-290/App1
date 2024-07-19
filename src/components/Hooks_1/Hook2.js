import React, { useState } from "react";

function Hook2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [res, setRes] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Number1"
        value={a}
        onChange={(e) => setA(e.target.value*1)}
      ></input>
      <input
        type="text"
        placeholder="Number2"
        value={b}
        onChange={(e) => setB(e.target.value*1)}
      ></input>
      <button onClick={() => setRes(a + b )}>+</button>
      <button onClick={() => setRes(a - b )}>-</button>
      <button onClick={() => setRes(a * b )}>*</button>
      <button onClick={() => setRes((a  / b).toFixed(2))}>/</button>
      <p>{res}</p>
    </div>
  );
}

export default Hook2;
