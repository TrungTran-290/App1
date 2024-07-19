import React from "react";
import { useState } from "react";

function Hook() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Title test</h1>
      <input
        type="text"
        placeholder="Add your text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>Name change: {name}</p>
    </div>
  );
}

export default Hook;
