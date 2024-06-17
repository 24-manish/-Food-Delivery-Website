import React, { useState } from 'react'
import { assets } from '../assets/assets'
import '../index.css'

export const Login = ({setlogin}) => {

  const [currentstate,setcurrentstate]=useState("signup")
  return (
    <div className='absolute z-[1] w-full  h-full bg-[#00000090] grid ' >
      <form className='place-self-center w-[30%] bg-white flex flex-col gap-6 p-6 rounded-lg text-xl animate-fadein '>
        <div className='flex justify-between items-center text-black font-bold text-3xl ' >
          <h2>{currentstate} </h2>
          <img className='w-4 cursor-pointer ' onClick={()=>setlogin(false)}src={assets.cross_icon} ></img>
        </div>
        <div className='flex flex-col gap-5' >
        {currentstate ==="login"?<></>:<input className='outline-none border p-3 rounded-sm  '  type="text" placeholder='YOUR NAME' required />}
        <input className='outline-none border p-3 rounded-sm  ' type="email" placeholder='YOUR EMAIL ' required />
        <input className='outline-none border p-3 rounded-sm  ' type="password" placeholder='PASSWORD' required  /></div>
        <button className='border-none p-3 rounded text-white bg-orange-500 text-xl cursor-pointer  ' >{currentstate==="signup"?"Create account":"login"}</button>
        <div className=' flex items-start gap-2 -mt-4 text-base text-slate-500  '>
          <input className='mt-2' type="checkbox" required />
          <p>By continuing, i agree to the terms of us & privacy policy  </p>
        </div>
        {currentstate === "signup"?<p>Already have a acc <span className='text-orange-500 cursor-pointer font-bold ' onClick={()=>setcurrentstate("login")} >click here</span></p>:
        <p>create a new account <span className='text-orange-500 cursor-pointer font-bold ' onClick={()=>setcurrentstate("signup")} >click here</span></p>
  }
      </form>
    </div>
  )
}


