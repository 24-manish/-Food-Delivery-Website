import React, {  useState } from 'react';
import { assets } from '../assets/assets';
import axios from "axios"
import { toast } from 'react-toastify';
const Adminadd = () => {
  const url="http://localhost:4000";
  const[image,setimage]=useState(false)
  const [data,setdata]=useState(
    {
      name:"",
      description:"",
      price:"",
      category:"salad"
    }
  )

  const onChangeHandler=(event)=>{
    const name = event.target.name;
    const value=event.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  const onsubmithandel = async (event)=>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name",data.name);
    formdata.append("description",data.description);
    formdata.append("price",Number(data.price));
    formdata.append("category",data.category);
    formdata.append("image",image);
    const response=await axios.post(`${url}/api/food/add`,formdata);
    if(response.data.success){
      setdata( {
        name:"",
        description:"",
        price:"",
        category:"salad"
      }
    )
    setimage(false)
    toast.success(response.data.message)

    }
    else{
      toast.error(response.data.message)
    }

  }
  
  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-12 text-gray-500 text-sm'>
      <form className='gap-4 flex flex-col' onSubmit={onsubmithandel} >
        <div className='flex flex-col w-32 mb-4'>
          <p className='mb-2 font-semibold'>Upload Image</p>
          <label htmlFor="image" className='cursor-pointer'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="Upload area" className='w-full h-auto border border-gray-300 rounded-md hover:opacity-80 transition-opacity duration-200' />
          </label>
          <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className='w-full max-w-md flex flex-col mb-4'>
          <p className='mb-2 font-semibold'>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='name' placeholder='Type here' required />
        </div>
        <div className='w-full max-w-md flex flex-col mb-4'>
          <p className='mb-2 font-semibold'>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' name="description" rows="4" placeholder='Write content here' required></textarea>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
         <div className='flex flex-col w-full sm:w-1/2'>
          <p className='mb-2 font-semibold'>Product Category</p>
          <select
            onChange={onChangeHandler}
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
            defaultValue=""
          >
            <option value="" disabled>Select category</option>
            <option value="salad">Salad</option>
            <option value="rolls">Rolls</option>
            <option value="dessert">Dessert</option>
            <option value="sandwich">Sandwich</option>
            <option value="cake">Cake</option>
            <option value="pure_veg">Pure Veg</option>
            <option value="pasta">Pasta</option>
            <option value="noodles">Noodles</option>
          </select>
        </div>
          <div className='flex flex-col w-full sm:w-1/2'>
            <p className='mb-2 font-semibold'>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="number" name='price' placeholder='$20' required />
          </div>
        </div>
        <button type='submit' className='w-full max-w-xs py-3 px-5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 self-center'>
          ADD
        </button>
      </form>
    </div>
  );
}

export default Adminadd;