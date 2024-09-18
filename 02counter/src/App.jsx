import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)

  //let counter= 5;

  const addValue=()=>{
    if(counter>=20){
      setCounter(20)
    }
    else{
      setCounter(counter+1)
    }
    console.log("clicked",counter)

    //***imp for interview =>this 4 lines sets count value to direct 9 (5+4=9) ,used as a bunch prev function gives a state then next one updates it 
    /*setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)*/
  }

  const removeValue=()=>{
    if(counter<=0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
    console.log("clicked",counter)
    
  }

  return (
    <>
      <h1>A Counter</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
