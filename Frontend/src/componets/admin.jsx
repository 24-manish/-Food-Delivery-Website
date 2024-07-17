import React from 'react'
import Adminnav from './adminnav'
import Sidebar from './sidebar'
import { Routes, Route } from 'react-router-dom'
import Adminadd from './adminadd'
import Adminlist from './adminlist'
import Adminorders from './adminorders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const url = "http://localhost:4000";
  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer />
      <Adminnav />
      <hr />
      <div className="flex">
        <Sidebar className="w-1/4 min-h-screen bg-white shadow-md p-4" />
        <div className="content w-3/4 p-6">
          <Routes>
            <Route path="add" element={<Adminadd url={url} />} />
            <Route path="list" element={<Adminlist url={url}  />} />
            <Route path="orders" element={<Adminorders url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
