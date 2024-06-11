import React, { useState } from 'react'
import {assets} from '../../assets/assets'
const navbar = () => {

    const [menu,setmenu]=useState("");
    console.log(menu);
    const menuItems = ["Home", "Menu", "Mobile App", "Contact Us"];




  return (
    <div className='pt-5 pl-0 flex justify-between items-center ' >
      <img src={assets.logo} className='w-36' />
     
      <ul className="flex list-none gap-5 text-zinc-900 text-2xl">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setmenu(item)}
            className={`cursor-pointer py-2 px-4 rounded transition duration-300 ${
              menu === item ? " border-b-[5px]  border-b-orange-400 " : "hover:bg-orange-200 rounded-full  "
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
     
    

      <div className="flex items-center gap-10 ">
        <img src={assets.search_icon} alt="" />
        <div className="relative ">
            <img src={assets.basket_icon} alt="" />
            <div className="absolute min-w-3 min-h-3 rounded-full bg-orange-600 border-5px -top-2 -right-2 "></div>
        </div>
        <button className="bg-transparent text-sm text-slate-700 border border-orange-600 py-3 px-8 rounded-full cursor-pointer hover:bg-orange-400 transition duration-500">
  Sign In
</button>

      </div>
    </div>
  )
}

export default navbar
