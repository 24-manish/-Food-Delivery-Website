import React from 'react'
import Adminnav from './adminnav'
import Sidebar from './sidebar'
import { Routes,Route } from 'react-router-dom'
import Adminadd from './adminadd'
import Adminlist from './adminlist'
import Adminorders from './adminorders'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Admin = () => {
    return (
      <div>
        <ToastContainer/>
        <Adminnav />
        <hr />
        <div className='flex'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path="add" element={<Adminadd />} />
              <Route path="list" element={<Adminlist />} />
              <Route path="orders" element={<Adminorders />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };
  

export default Admin
