import { useState } from 'react'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)
  const [isShown,setIsShown] = useState(true)
  console.log("Render App");
  const childComponent = isShown ? <Child /> : null
  

  return (
    <>
    <div>
      <button
      style={{marginBottom : "1rem",color:"white"}}
      // onClick={() => setCount(C => C + 1)}
      onClick = {() => setIsShown(s => !s)}
      >

      {/* {count} */}
      show/Hide
      </button> 
      <Child />
      {childComponent}
    </div>
    </>
  )
}

export default App
