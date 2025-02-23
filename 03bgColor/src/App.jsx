 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive");

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Red"}} onClick={()=>setColor("Red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Blue"}} onClick={()=>setColor("Blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Yellow"}}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Violet"}}>Violet</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Indigo"}}>Indigo</button>
      </div>
      </div>
      </div>
    
  )
}

export default App
