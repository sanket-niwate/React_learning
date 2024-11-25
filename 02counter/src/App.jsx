import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

 
let add = ()=>{
  if (count==20) {
        setCount==20
} else {
  setCount(count+1)
}}


let remove = ()=>{
  if (count==5) {
        setCount==5
} else {
  setCount(count-1)
}}
  return (
    <>
      <h1>react learning</h1>
      <h2>counter value: {count}</h2>
      <h2>a value: {count}</h2>
      <h2>b value: {count}</h2>
      <button onClick={()=>{console.log("add"),add()}}>Add value</button>
      <br />
      <button onClick={()=>{console.log("remove"),remove()}}>Remove value</button>
    </>
  )
}

export default App
