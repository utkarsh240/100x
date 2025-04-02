
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet } from "react-router-dom"; // Hash

function App() {
  return <div>
    
   <BrowserRouter>
    <Link to ='/'>Allen</Link>
    
    <Link to ='/neet/online-coaching-class-11'>Class 11</Link>

    <Link to ='/neet/online-coaching-class-12'>Class 12</Link>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='/neet/online-coaching-class-11' element={<Class11prog/>}/>
      <Route path='/neet/online-coaching-class-12' element={<Class12prog/>}/>
      <Route path='/' element ={<Landing/>}/>
      <Route path='/*' element={<Error/>}/>
    </Route>
   </Routes>
   Footer | Contact Us
   </BrowserRouter>
  </div>
}

function Layout(){
  return <div style={{height: "100vh", background: "black"}}>
    <Header/>
    <div style={{height: "100vh", background: "black"}}>
      <Outlet/>
    </div>
  </div>
}


function Landing(){
  return <div>
    <Outlet/>
  </div>
}

function Class11prog(){
  return <div>
    Neet program for 11th class
  </div>
}

function Class12prog(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return <div>
    Neet program for class 12
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

function Error(){
  return <div>
    Error 404
  </div>
}



export default App
