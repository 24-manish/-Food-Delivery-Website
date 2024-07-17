import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen border-r-2 border-gray-200 bg-gray-50">
      <div className="pt-12 pl-8 flex flex-col gap-6">
        <NavLink
          to="/admin/add"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center gap-4 px-4 py-3 bg-orange-500 text-white rounded-md shadow-md'
              : 'flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all duration-200 rounded-md'
          }
        >
          <img src={assets.add_icon} alt="Add icon" className="w-6 h-6" />
          <p className="font-medium">Add Items</p>
        </NavLink>
        <NavLink
          to="/admin/list"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center gap-4 px-4 py-3 bg-orange-500 text-white rounded-md shadow-md'
              : 'flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all duration-200 rounded-md'
          }
        >
          <img src={assets.order_icon} alt="List icon" className="w-6 h-6" />
          <p className="font-medium">List Items</p>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center gap-4 px-4 py-3 bg-orange-500 text-white rounded-md shadow-md'
              : 'flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:shadow-md transition-all duration-200 rounded-md'
          }
        >
          <img src={assets.order_icon} alt="Orders icon" className="w-6 h-6" />
          <p className="font-medium">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
