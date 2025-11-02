import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter]=useState(0);
  function removevalue(){
    
    counter=counter-1;
    setcounter(counter);
  }
  
  function addvalue(){
    
    counter=counter+1;
    setcounter(counter);
  }

  return (
    <>
      <h1>Hello ji:{counter}</h1>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
