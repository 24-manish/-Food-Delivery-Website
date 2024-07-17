import React, { useContext } from 'react'
import { StoreContext } from '../../componets/context'
import { useNavigate } from 'react-router-dom';

const cart = () => {

  const{ cartitem , food_list , removefromcart,gettotal,url}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='mt-10 px-4'>
      <div className=''>
        {/* Table headers */}
        <div className='grid grid-cols-6 items-center place-items-center text-gray-600 text-lg font-semibold bg-white py-2'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='my-2 border-gray-200' />

        {/* Cart items */}
        {food_list.map((item) => {
          if (cartitem[item._id] > 0) {
            return (
              <div key={item._id} className='group'>
                <div className='grid grid-cols-6 items-center place-items-center rounded-md shadow-md shadow-gray-400 text-gray-600 text-lg font-semibold bg-gray-100 py-2'>
  <img className='w-24 h-24 object-cover' src={`${url}/images/${item.image}`} alt='' />
  <p>{item.name}</p>
  <p>${item.price}</p>
  <p>{cartitem[item._id]}</p>
  <p>${(item.price * cartitem[item._id]).toFixed(2)}</p>
  <button
    onClick={() => removefromcart(item._id)}
    className=' text-red-600 hover:text-red-800 focus:outline-none'
  >
    Remove
  </button>
</div>
                <hr className='my-1 border-gray-200' />
              </div>
            );
          }
          return null;
        })}

        {/* Cart totals */}
        <div className='mt-8'>
          <div className='bg-white p-4 rounded'>
            <h2 className='text-xl font-semibold mb-4'>Cart Total</h2>
            <div className='flex justify-between text-gray-700'>
              <p>Subtotal</p>
              <p>${gettotal()}</p>
            </div>
            <hr className='my-2 border-gray-200' />
            <div className='flex justify-between text-gray-700'>
              <p>Delivery Fee</p>
              <p>${gettotal() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2 border-gray-200' />
            <div className='flex justify-between text-gray-700'>
              <p className='font-semibold'>Total</p>
              <p className='font-semibold'>${gettotal() === 0 ? 0 : gettotal() + 2}</p>
            </div>
            <button
              onClick={() => navigate('/order')}
              className='mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none'
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Promo code input */}
      <div className='mt-8'>
        <p className='text-gray-700'>If you have a promo code, enter it here:</p>
        <div className='mt-3 flex items-center'>
          <input
            className='py-2 px-3 border border-gray-300 rounded-l focus:outline-none'
            type='text'
            placeholder='Promo code'
          />
          <button className='bg-black text-white px-4 py-2 rounded-r hover:bg-gray-900 focus:outline-none'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default cart;