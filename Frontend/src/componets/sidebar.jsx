import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
      <div className='w-[20%] min-h-[100vh] border-2 border-t-0'>
        <div className='pt-12 pl-[20%] flex flex-col gap-5'>
          <NavLink
            to='/admin/add'
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-3 border-2 border-r-0 p-2 rounded cursor-pointer bg-orange-300 border-orange-500'
                : 'flex items-center gap-3 border-2 border-r-0 p-2 rounded cursor-pointer'
            }
          >
            <img src={assets.add_icon} alt="Add icon" />
            <p>add items</p>
          </NavLink>
          <NavLink
            to='/admin/list'
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-3 border-2 border-r-0 p-2 rounded cursor-pointer bg-orange-300 border-orange-500'
                : 'flex items-center gap-3 border-2 border-r-0 p-2 rounded cursor-pointer'
            }
          >
            <img src={assets.order_icon} alt="List icon" />
            <p>list items</p>
          </NavLink>
          <NavLink
            to='/admin/orders'
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-3 border-2 border-r-0 p-2 rounded cursor-pointer bg-orange-300 border-orange-500'
                : 'flex items-center gap-3 border-2 border-r-0 p-2 rounded cursor-pointer'
            }
          >
            <img src={assets.order_icon} alt="Orders icon" />
            <p>orders</p>
          </NavLink>
        </div>
      </div>
    );
  };
  

export default Sidebar
