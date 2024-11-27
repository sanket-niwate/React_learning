import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 rounded-full' style={{backgroundColor:"red"}} >Red</button>
          <button onClick={()=> setColor("yellow")}className='outline-none px-4 rounded-full' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=> setColor("black")}className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=> setColor("green")}className='outline-none px-4 rounded-full' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=> setColor("purple")}className='outline-none px-4 rounded-full' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=> setColor("blue")}className='outline-none px-4 rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=> setColor("gray")}className='outline-none px-4 rounded-full' style={{backgroundColor:"gray"}}>Gray</button>
        </div></div>
     </div>
  )
}

export default App
