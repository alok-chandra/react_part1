// import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import TestCard from './components/TestCard'
function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    nameStr: 'Hello',
    numKey:1,
    numArr:[2,3,4,5]
  }

  return (
    <>
      <Cards channel='Zunnneee' myArr={myObj} />
      
      <TestCard />
        <br /><br />
      <h1 className='text-3xl underline bg-blue-300'>Tailwind Test</h1>
    
    </>
  )
}

export default App
