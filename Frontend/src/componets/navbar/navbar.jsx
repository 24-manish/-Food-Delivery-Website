import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../componets/context';

const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("Home"); // Default to "Home" or any initial menu item
  const { gettotal, token, settoken } = useContext(StoreContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for managing dropdown visibility
  const menuItems = ["Home", "Menu", "Mobile App", "Contact Us"];
  
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    settoken("");
    navigate("/")
    
  }

  return (
    <div className='pt-5 pl-0 flex justify-between items-center'>
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt="Logo" />
      </Link>
      <ul className="flex list-none gap-5 text-zinc-900 text-2xl">
    {menuItems.map((item) => (
      <li
        key={item}
        onClick={() => setMenu(item)}
        className={`cursor-pointer py-2 px-4 rounded transition duration-300 ${
       menu === item ? "border-b-4 border-b-orange-400" : "hover:bg-orange-400 rounded-full"
        }`}
        
        
        aria-current={menu === item ? "page" : undefined}
      >
        {item}
      </li>
    ))}
  </ul>

      <div className="flex items-center gap-10 relative">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="relative">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          {gettotal() > 0 ? (
            <div className="absolute min-w-3 min-h-3 rounded-full bg-orange-600 text-white border-5px -top-2 -right-2"></div>
          ) : null}
        </div>
        {!token ? (
          <button
            onClick={() => setLogin(true)} // Changed to setLogin
            className="bg-transparent text-sm text-slate-700 border border-orange-600 py-3 px-8 rounded-full cursor-pointer hover:bg-orange-400 transition duration-500"
          >
            Sign up
          </button>
        ) : (
          <div className="relative">
            <img
              src={assets.profile_icon}
              alt="Profile Icon"
              className="cursor-pointer"
              onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown on click
            />
            {isDropdownOpen && (
              <ul
                className="absolute right-0 mt-4 w-48 bg-white border border-orange-600 rounded shadow-lg p-2 z-10"
              >
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-orange-100">
                  <img src={assets.bag_icon} alt="Orders Icon" className="w-5 h-5" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout} className="flex items-center gap-2 p-2 cursor-pointer hover:bg-orange-100">
                  <img src={assets.logout_icon} alt="Logout Icon" className="w-5 h-5" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;