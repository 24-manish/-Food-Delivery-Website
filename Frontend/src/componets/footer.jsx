import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div className='bg-slate-800 flex flex-col items-center gap-5 p-14 pt-20 mt-28 text-white ' >
      <div className='w-full grid grid-cols-3'>
        <div className='flex flex-col items-start gap-5  ' >
            <img src={assets.logo}  />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolore provident, aliquam reprehenderit doloremque voluptatum veniam quae in, culpa dolores asperiores delectus? Nobis laudantium perferendis accusantium porro rem minima sit!</p>
            <div className='flex gap-5 cursor-pointer ' >
                <img src={assets.facebook_icon}  />
                <img src={assets.twitter_icon}  />
                <img src={assets.linkedin_icon}/>
            </div>
        </div>
        <div className='flex flex-col items-center gap-5 '>
            <h2 className='text-orange-600 font-bold text-2xl  ' >COMPANY</h2>
            <ul className='flex flex-col justify-center items-center cursor-pointer ' >
                <li  >Home</li>
                <li>About</li>
                <li>contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-center gap-5 '>
            <h2 className='text-orange-600 font-bold text-2xl ' >GET IN TOUCH</h2>
            <ul className='flex flex-col justify-center items-center'>
                <li>Phone: +1 234 567 890</li>
                <li>Email: [info@example.com](mailto:info@example.com)</li>

            </ul>
        </div>
      </div>
      <hr className='w-full h-1 mt-5 mr-0  ' />
      <p>Copyright 2024 © tomato.com -All right Reserved. </p>
    </div>
  )
}


