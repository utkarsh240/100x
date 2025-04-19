import { useState } from 'react'
import './App.css'

function App() {
  const[count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1)
    //setCount(c=>c+1)
  }


  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App
