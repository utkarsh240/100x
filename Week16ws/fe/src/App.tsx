import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function sendMessage(){
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (e) =>{
      console.log(e.data);
    }
  },[])

  return (
   <div>
    <input ref={inputRef} type='text' placeholder='Message..'></input>
    <button onClick={sendMessage}>Send</button>
   </div>
  )
}

export default App
