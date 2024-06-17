import React, { useState } from 'react'
import Navbar from './componets/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/placeorder/placeorder'
import {Footer} from './componets/footer'
import {Login} from './componets/login'
const App = () => {


  const [showlogin,setlogin]=useState(false)
  return (<>
  {showlogin? <Login setlogin={setlogin} /> :<></>

  }
    <div className='w-[80%] m-auto ' >
      <Navbar setlogin={setlogin} />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/order' element={  <Placeorder/> } />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
