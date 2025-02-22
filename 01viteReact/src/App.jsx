import { useState } from 'react'
import Chai from './chai';

function App() {
  const [count,setCount] = useState(0)

  const addCount=()=>{
    let cnt = Math.random();
    console.log(` cnt is ${cnt}`)
    setCount(cnt +count);
  }

  const delCount =() =>{
    let cnt = Math.random();
    console.log(` cnt is ${cnt}`)
    setCount(count-cnt);
  }

  return (
    <>
<h1>Hello Vite-React !!! {count}</h1>
<h2>Counter {count}</h2>
<p><button onClick={addCount}>Increment Count</button>
<br /><br />
<button onClick={delCount}>Decrement Count</button></p>
<Chai />
    </>
  )
}

export default App
