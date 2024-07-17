import React, { useState } from 'react'
import Navbar from './componets/navbar/navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/placeorder/placeorder'
import {Footer} from './componets/footer'
import {Login} from './componets/login'
import Admin from './componets/admin'

const App = () => {
  const [showLogin, setLogin] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {showLogin ? <Login setlogin={setLogin} />:<></>}
      <div className='w-[80%] m-auto'>
        {!isAdminRoute && <Navbar setLogin={setLogin} />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;