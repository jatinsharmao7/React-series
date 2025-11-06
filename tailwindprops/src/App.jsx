import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>Hello Tailwind</h1>
      <Cards username="Jatin Sharma" btntxt="click here"/>
      <Cards username="Divya" />
      
    </>
  )
}

export default App
