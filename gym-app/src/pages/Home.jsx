import React from 'react'
import img from "../images/fit.jpg"

export default function Home() {
  return (
    <div >
        <img src={img} alt="loading.." className='w-full relative'/>
       <div className='flex justify-items-center absolute top-80 ' >
       <h1 className= 'ml-40 text-white text-7xl font-mono'>MAKING INDIA FIT <br/>ON <span className='text-amber-500 '>BUDGET</span></h1></div> 
    </div>
  )
}
