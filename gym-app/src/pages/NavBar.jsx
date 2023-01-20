import React from 'react'
import { Link } from 'react-router-dom'
// import img from "../img/"

export default function NavBar() {
  return (<>
   <div className='flex absolute ml-2 pt-5'>
    <Link to="/">
   <i className="fa-sharp fa-solid fa-fire-flame-curved  text-amber-300 text-5xl pl-16"></i>
   </Link>
   </div>
    <ul className=" bg-black py-7 pr-10 flex justify-end pb-4">
   
    <li  className='mr-8 text-slate-300 text-xl py-1'>
         Fitness
    </li>
    <li className='mr-8 text-slate-300 text-xl py-1'>
         Nutrition
    </li>
    <li className='mr-8 text-zinc-400 text-xl py-1'>
        Gyms
    </li>
    <li className='mr-8 text-zinc-400 text-xl py-1'>
      become WTF partner
    </li>
    <li className='mr-8 text-zinc-400 text-xl py-1'>
      About Us
    </li>
    <li className='mr-8 text-slate-300 text-xl bg-red-500 rounded w-16 text-center py-1' >
      Login
    </li>
    {/* </div> */}
  </ul>

  </>
  )
}
