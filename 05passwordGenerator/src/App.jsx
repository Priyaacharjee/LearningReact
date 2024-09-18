import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef=useRef(null)

  //password generator function
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number)
      str += "0123456789"
    if (character)
      str += "!@#$%^&*_-+=[]{}~`()"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass+= str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword])

  //Copy to clipboard
  const copypasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

   useEffect(()=>{passwordgenerator()},[length,number,character,passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-5 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly 
            ref={passwordRef}/>
          <button
          onClick={copypasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id="number"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={character}
              id="number"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
