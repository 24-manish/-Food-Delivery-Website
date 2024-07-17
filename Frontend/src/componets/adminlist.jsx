import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Adminlist = ({url}) => {
  const [list, setList] = useState([]);
  

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the list");
    }
  };
    const removefood = async (foodid) =>{
      const response = await axios.post(`${url}/api/food/remove`,{id:foodid})
      await fetchList();
      if(response.data.success)
      {
        toast.success("Food removed successfully")
      }
      else{
        toast.error("Error removing food")
      }
    }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full max-w-5xl  p-5 bg-white shadow-md rounded-md space-y-6">
      <p className="text-lg font-semibold text-gray-700">ALL FOOD LIST</p>
      <div>
        <div className="grid grid-cols-5 items-center gap-4 p-4 border-b-2 border-gray-200 text-sm font-semibold bg-gray-100">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item, index) => (
          <div
            className="grid grid-cols-5 items-center gap-4 p-4 border-b border-gray-200 text-sm hover:bg-gray-50 transition-colors duration-200"
            key={index}
          >
            <img src={`${url}/images/${item.image}`} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            <p className="truncate">{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={()=>removefood(item._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminlist;
