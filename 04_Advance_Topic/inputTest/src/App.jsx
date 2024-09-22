import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("Nitin")

  function handleClick(){

  }

  return (
    <>
      <input type="text" value={count} onChange={e => setCount(e.target.value)} />
    </>
  )
}

export default App
