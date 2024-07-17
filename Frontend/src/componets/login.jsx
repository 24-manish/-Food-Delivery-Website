import React, {  useContext, useState } from 'react';
import { assets } from '../assets/assets';
import '../index.css';
import { StoreContext } from './context';
import axios from 'axios';

export const Login = ({ setlogin }) => {
  const{url,settoken}=useContext(StoreContext)
  const [currentstate, setcurrentstate] = useState("signup");
  const [data, setdata] = useState({ name: "", email: "", password: ""});

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };
  const onlogin=async (event)=>{
    event.preventDefault()
    let newurl = url;
    if(currentstate=="login"){
      newurl = newurl + "/api/user/login"
    }
    else{
      newurl = newurl + "/api/user/register"
    }
    const response=await axios.post(newurl,data);
    if(response.data.success)
    {
      settoken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setlogin(false)
    }
    else
    {
      alert(response.data.message)
    }
  }
  // Ensure useEffect only runs when 'data' changes

 

  return (
    <div className='fixed inset-0 z-10 flex justify-center items-center bg-gray-900 bg-opacity-75'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-6'>
        <div className='flex justify-between items-center px-6 py-4 bg-gray-100 border-b'>
          <h2 className='text-xl font-semibold text-gray-900'>{currentstate === "signup" ? "Sign Up" : "Login"}</h2>
          <img
            className='w-6 h-6 cursor-pointer'
            onClick={() => setlogin(false)}
            src={assets.cross_icon}
            alt='Close'
          />
        </div>
        <div className='px-6 py-8 bg-white'>
          <form className='space-y-6' onSubmit={onlogin}>
            {currentstate === "signup" && (
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your name</label>
                <input
                  name='name'
                  id='name'
                  onChange={onChangeHandler}
                  value={data.name}
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary-500'
                  type='text'
                  placeholder='Your Name'
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
              <input
                name='email'
                id='email'
                onChange={onChangeHandler}
                value={data.email}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary-500'
                type='email'
                placeholder='Your Email'
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                name='password'
                id='password'
                onChange={onChangeHandler}
                value={data.password}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary-500'
                type='password'
                placeholder='Password'
                required
              />
            </div>
           
            <button type='submit' className='w-full py-2 px-4 bg-orange-600 text-white font-medium rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-primary-500'>
              {currentstate === "signup" ? "Create Account" : "Login"}
            </button>
            <div className='flex items-start mt-2 text-sm text-gray-500'>
              <input className='w-4 h-4 border border-gray-300 rounded focus:ring-primary-500' type='checkbox' required />
              <p className='ml-2'>
                By continuing, I agree to the <a href="#" className="font-medium text-primary-600 hover:underline">terms of use</a> & <a href="#" className="font-medium text-primary-600 hover:underline">privacy policy</a>.
              </p>
            </div>
          </form>
          <p className='mt-4 text-center text-sm text-gray-500'>
            {currentstate === "signup" ? (
              <>
                Already have an account?{" "}
                <span
                  className='font-medium text-primary-600 hover:underline cursor-pointer'
                  onClick={() => setcurrentstate("login")}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Create a new account?{" "}
                <span
                  className='font-medium text-primary-600 hover:underline cursor-pointer'
                  onClick={() => setcurrentstate("signup")}
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
