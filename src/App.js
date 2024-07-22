import React from 'react'
import Hook from './components/Hooks_1/Hook'
import Hook2 from './components/Hooks_1/Hook2'
import Hook3 from './components/Hooks_1/Hook3'

export default function App() {
  let arr= [{name:"j"},{name:"a"},{name:"m"}]
  // arr.map((item)=>{
  //   return (item.name)
  // })
  return (
    <div>
      Buoi2
      <Hook/>
      <Hook2/>
      {arr.map((item, index) => (
        <Hook3 key={index} name={item.name} />
      ))}
    </div>
  )
}
