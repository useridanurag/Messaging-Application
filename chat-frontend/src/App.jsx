import React from 'react'
import Left from './components/LeftPart/Left'
import Right from './components/RightPart/Right'
import { Routes, Route, Navigate } from "react-router";
import Register from './components/RegisterLogin/Register'
import Login from './components/RegisterLogin/Login'
import { useSelector } from 'react-redux';



const App = () => {
  let authUser = useSelector((state) => state.auth);

  return <>
    <div className='flex h-screen text-gray-300'>

      <Routes>
        <Route path='/' element={
          authUser ? (<>
            <Left />
            <Right />
          </>) : (<Navigate  to={"/login"}/>)
        } />
        <Route path='/login' element={authUser? (<Navigate to={"/"}/>):(<Login/>)}/>
        <Route path='/register' element={authUser? (<Navigate to={"/"}/>):(<Register/>)}/>
      </Routes>
    </div>

  </>
}

export default App