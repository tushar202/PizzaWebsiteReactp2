import React from 'react'
import {Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
function Home() {
  return (
    <div  style={{backgroundImage: `url(${BannerImage})`}}  className=" pb-56 pt-28 home space-y-5 h-full justify-center bg-center bg-cover bg-no-repeat items-end">
      <div   className='headerContainer'>

        <h1 className=' pt-8 py-3 text-6xl mx-3'>Patna Pizza</h1>
        <p className=' mx-3 text-2xl'>Best Bihari Pizza</p>
    <Link to="/menu">
      <button className='bg-black text-white mt-5 mx-3 py-2 px-3 rounded-lg'>ORDER NOW</button>
    </Link>
      </div>
    </div>
  )
}

export default Home