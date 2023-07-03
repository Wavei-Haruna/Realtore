import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();
  const pathName = (route)=>{
    if(route=== location.pathname) return true;

  }
  return (
    <div className=' shadow-md sticky top-0 py-4'>
      
      <header className=' flex justify-between items-center px-3 mx-auto max-w-6xl'>

      <div>
        <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"  className='h-5 cursor-pointer'/>
      </div>
      <div>
        <ul className='flex space-x-10'>
          <li className={`font-semibold border-b-2 border-b-gray-500 cursor-pointer transition duration-200 hover:scale-105 ease-out py-1 ${ pathName("/") && "border-b-red-500 font-gray-500"}` } onClick={()=> navigate("/")}>Home</li>
          <li className={`font-semibold border-b-2 border-b-gray-500 cursor-pointer transition duration-200 hover:scale-105 ease-out  py-1 ${ pathName("/offers") && "border-b-red-500 font-gray-500"}`} onClick={()=> navigate("/offers")}>Offers</li>
          <li className={`font-semibold border-b-2 border-b-gray-500 cursor-pointer transition duration-200 hover:scale-105 ease-out py-1 ${ pathName("/sign-in") && "border-b-red-500 font-gray-500"}`} onClick={()=> navigate("/sign-in")}>Sign in</li>
        </ul>
      </div>
    </header>


    </div>
  )
}
