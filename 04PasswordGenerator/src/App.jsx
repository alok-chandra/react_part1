import { useState, useCallback,useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  // const [count, setCount] = useState(0)
  const [length,setLength] = useState(8);
  const [pgnumber,setPGNumber] = useState(false);
  const [pgCharacter,setPGCharacter] = useState(true);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (pgnumber){
      characters += "0123456789";
    } 
    if (pgCharacter){
      characters += "!@#$%^&*()_+";
    }
    for(let i = 0; i < length; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(password);
  },[length,pgnumber,pgCharacter,setPassword]);

  // hook useRef
  const passwordRef= useRef(null);

  const copyToClipboard = useCallback(() => {
  //  console.log({password});
  passwordRef.current?.select();
   window.navigator.clipboard.writeText(password);
  }
  ,[password]);

  useEffect(() => {
    passwordGenerator();
  }
  ,[length,pgnumber,pgCharacter,passwordGenerator]);

  return (
    <>
 <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
       onClick={copyToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => setLength(e.target.value)}
         
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
         defaultChecked={pgnumber}
          id="numberInput"
          onChange={() => setPGNumber((prevValue)=>!prevValue)}
         
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
          defaultChecked={pgCharacter}
              onChange={() => setPGCharacter((prevValue)=>!prevValue)}
              type="checkbox"
              id="characterInput"
              
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
     
    </>
  )
}

export default App
