import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Offers from './Pages/Offers'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgetPassword from './Pages/ForgetPassword'
import Header from './Componennts/Header'

export default function App() {
  return (
    < >

      <Router>
        <Header />

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/profile' element={<Profile/>}/>
        <Route  path='/offers' element={<Offers/>}/>
        <Route  path='/sign-in' element={<SignIn/>}/>
        <Route  path='/sign-up' element={<SignUp/>}/>
        <Route  path='/forget-password' element={<ForgetPassword/>}/>
      </Routes>
      </Router>
    </>
  )
}
