import React, { useState } from 'react'
import logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../App.css'
import ReorderIcon from '@mui/icons-material/Reorder';
  

export default function Navbar() {
  const [openLinks,setOpenLinks]=useState(false)
  // if(op)
  
  return (
    <div className='navbar flex w-full bg-black text-white h-20 justify-between'>
      <div className='leftSide flex w-1/3 pl-0 md:items-center md:pl-7'>
        <img className="w-20 h-10 pl-5" src={logo} alt="logo" />
        <div  id={openLinks?"open":"close"} className="md:hidden" >
        <Link class to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide md:flex pr-36 pt-5 '>
        <div className='md:flex hidden space-x-7 w-full'>
        <Link class to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={(event)=>{
          setOpenLinks(!openLinks)
        }}><ReorderIcon/></button>
        
      </div>

    </div>
  )
}
