import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)

  let newobj =
    "55454654646s"
  
 
  

  return (
    <>
      <h1 className='bg-blue-500 text-black p-4 rounded-lg'>
        tailwind css
      </h1>
    <Card channel="sanket" myobj={newobj}/>
    <Card myobj={newobj}/>
    </>
  )
}

export default App
