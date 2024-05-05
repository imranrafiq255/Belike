import React, { useState } from 'react'

import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showMenu,setshowMenu]=useState(false);
  return (
    <div>
        
        <nav className="bg-black md:flex justify-between p-3 overflow-hidden ">
        <div className='w-25  flex  items-center justify-between'>
            <img src={logo} className='w-[11rem] h-[4rem]' alt="" />
            <div className='md:hidden '>
            <button className=' text-3xl ' onClick={(()=>setshowMenu(!showMenu))}>
            {
              showMenu ? (
                <RxCross2  className='text-blue-700'/>
              ) :(
                <IoMenuSharp className='text-blue-700' />
              )
            }

            </button>
          </div>
          </div>
    

      
          <div className={`md:flex items-center  md:w-[70%]  justify-between  ${showMenu ? 'block' : 'hidden md:block'}`}>
         
          
         
        
           <div className=" md:flex md:w-[70%] items-center    " id="navbarSupportedContent">
            <ul className="md:flex   w-full justify-between">
              <li className="nav-item mt-1 md:mt-0">
                <Link to='/' className="nav-link" href="#">Home</Link>
              </li>
              <li className="nav-item mt-1 md:mt-0">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item dropdown mt-1 md:mt-0">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 About Us
                </a>
             
              </li>
              <li className="nav-item dropdown mt-1 md:mt-0">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Contact US
                </a>
                
              </li>
             
            </ul>
          
          </div>
          <div className=' md:w-[25%]'>
          <ul className='list-unstyled  md:flex justify-between mt-2 md:mt-0'>
              <li className=''>
                <button href="#" className=' block px-6 md:px-4 py-1 rounded-md font-bold border-2 border-blue-700 text-blue-700   hover:bg-blue-700 hover:text-white'>Login</button>
              </li>
              <li className='mt-2 md:mt-0'>
                <button href="#" className=' block px-6 md:px-4 py-1  rounded-md font-bold border-2  border-green-700 text-green-700  hover:bg-green-700 hover:text-white '>Signup</button>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
    </div>
  )
}
