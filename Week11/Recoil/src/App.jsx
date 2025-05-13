
import { memo, useEffect, useState } from 'react'
import './App.css'
import {RecoilRoot, atom} from 'recoil';



function App() {
  

  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    },3000)
  },[])

  return <div>
    {count}
    <Increase setCount={setCount}/>
    <Decrease setCount={setCount}/>
  </div>
}

const CurrentCount = memo(function(){
  return <div>
    1
  </div>
})

const Decrease = memo(function()){
  function decrease(){
    setCount(c=>c-1);
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Increase({setCount}){
  function increase(){
    setCount(c=>c+1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App
