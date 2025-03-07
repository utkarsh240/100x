import { useState } from "react";

function App(){
  return <div>
    <Counter></Counter>
    </div>
}
// setInterval
function Counter(){
  const[count, setCount]= useState(0);

  setInterval(function(){
    setCount(count+1);
  },1000);
  // function increaseCount(){
  //   setCount(count+1);
  // }
  return <div>
    <h1 id="text">{count}</h1>
  </div>
}


export default App

  