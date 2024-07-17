import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const Adminadd = ({url}) => {
  
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "salad",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the product");
    }
  };

  return (
    <div className="w-full max-w-3xl p-5 bg-white shadow-md rounded-md">
      <form className="flex flex-col gap-6" onSubmit={onSubmitHandler}>
        <div className="flex flex-col  mb-6">
          <p className="mb-2 font-semibold">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <div className="w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md hover:opacity-80 transition-opacity duration-200 bg-gray-50">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <span className="text-gray-500">Click to upload</span>
              )}
            </div>
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <p className="mb-2 font-semibold">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <p className="mb-2 font-semibold">Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="description"
            rows="4"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="mb-2 font-semibold">Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="category"
              required
            >
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
          <div className="flex flex-col w-full sm:w-1/2">
            <p className="mb-2 font-semibold">Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full max-w-xs py-3 px-5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 self-center"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Adminadd;
