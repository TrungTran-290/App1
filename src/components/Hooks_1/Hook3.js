import React, { useState } from 'react'

function Hook3(props) {
    const [age,setAge] = useState("")
    const {name} = props
  return (
    <div>
        <input
        type="text"
        placeholder="Number1"
        value={age}
        onChange={(e) => setAge(e.target.value*1)}
      ></input>
      <p>Out put : {age}</p>
      <p>Out put2: {name}</p>
    </div>
  )
}

export default Hook3
