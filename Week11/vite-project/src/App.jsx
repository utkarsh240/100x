import { useState } from "react"

function App(){
  return <div>
    <Lightbulb/>
  </div>
}

function Lightbulb(){
  const[bulbOn, setBulbOn] = useState(true);
  return <div>
    <BulbState bulbOn ={bulbOn}/>
    <ToggleBulbState setBulbOn = {setBulbOn}/>
  </div>
}


function BulbState({bulbOn}){
  return <div>
  {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({setBulbOn}){
  function toggle(){
    setBulbOn(currentState => ! currentState)
    setBulbOn(function(curentState){
      if(currentState == true){
        return false
      }else{
        return true
      }
    })
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}


export default App