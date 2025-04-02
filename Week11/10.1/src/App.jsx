
import { useState } from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet } from "react-router-dom"; // Hash

// function App() {
//   return <div>
    
//    <BrowserRouter>
//     <Link to ='/'>Allen</Link>
    
//     <Link to ='/neet/online-coaching-class-11'>Class 11</Link>

//     <Link to ='/neet/online-coaching-class-12'>Class 12</Link>
//    <Routes>
//     <Route path='/' element={<Layout/>}>
//       <Route path='/neet/online-coaching-class-11' element={<Class11prog/>}/>
//       <Route path='/neet/online-coaching-class-12' element={<Class12prog/>}/>
//       <Route path='/' element ={<Landing/>}/>
//       <Route path='/*' element={<Error/>}/>
//     </Route>
//    </Routes>
//    Footer | Contact Us
//    </BrowserRouter>
//   </div>
// }

// function Layout(){
//   return <div style={{height: "100vh", background: "black"}}>
//     <Header/>
//     <div style={{height: "100vh", background: "black"}}>
//       <Outlet/>
//     </div>
//   </div>
// }


// function Landing(){
//   return <div>
//     <Outlet/>
//   </div>
// }

// function Class11prog(){
//   return <div>
//     Neet program for 11th class
//   </div>
// }

// function Class12prog(){
//   const navigate = useNavigate();

//   function redirectUser(){
//     navigate("/")
//   }

//   return <div>
//     Neet program for class 12
//     <button onClick={redirectUser}>Go back to landing page</button>
//   </div>
// }

// function Error(){
//   return <div>
//     Error 404
//   </div>
// }



// export default App
// import { useRef } from 'react';
// function App(){

//   const inputRef = useRef();

//   function focusonInput(){
//     inputRef.current.focus();
//   }




//   return <div>
//     Sign up
//     <input ref={inputRef} type={"text"}></input>
//     <input type={"text"}></input>
//     <button onClick={focusonInput}>Submit</button>
//   </div>
// }

// export default App


// a clock with start and stop button

function App(){
  const[currentCount, setCurrentCount]= useState(1);
  let timer =0;

  function startClock(){
    timer = setInterval(function(){
      setCurrentCount(c => c+1)
    },1000);
  }

  function StopClock(){
    console.log(timer)
    clearInterval(timer);
  }


  return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={StopClock}>Stop</button>
  </div>
}

export default App