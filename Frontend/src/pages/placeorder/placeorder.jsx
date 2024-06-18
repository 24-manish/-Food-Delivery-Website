import React, { useContext } from 'react'
import { StoreContext } from '../../componets/context'

const Placeorder = () => {
  const {gettotal}=useContext(StoreContext)
  return (
    <form className=' flex items-start justify-between gap-12 mt-24  ' >
      <div className='w-full max-w-[max(30%,500px)]  ' >
        <p className='text-2xl font-semibold mb-14 ' >Delivery Information</p>
        <div className='flex gap-3' >
            <input className='mb-4 w-full p-3 border rounded outline-orange-600 '  type="text" placeholder='First Name' />
            <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='Last Name' />
        </div>
        <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="email" placeholder='email address' />
        <input  className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='Street'  />
        <div className='flex gap-3' >
            <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='City' />
            <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='state' />
        </div>
        <div className='flex gap-3' >
            <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='zip code'  />
            <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='country' />
        </div>
        <input className='mb-4 w-full p-3 border rounded outline-orange-600 ' type="text" placeholder='phone no' />
      </div>
      <div className='w-full max-w-[max(40%,500px)]' >
      <div className='flex-1 flex-col gap-5 ' >
          <h2>cart total</h2>
          <div>
            <div className='flex justify-between text-[#555]' ><p>subtotal</p>
                  <p>{gettotal()}</p>
            </div>
            <hr className='mt-3 mr-0  ' />
            <div className='flex justify-between text-[#555]' ><p>delivery fee</p>
            <p>{gettotal()===0?0:2}</p></div>
            <hr className='mt-3 mr-0  ' />
            <div className='flex justify-between text-[#555]' ><p>total</p>
            <p>{gettotal()===0?0:gettotal()+2}</p>
            </div>
            </div>
            <button onClick={()=>navigate('/order')} className='border-none text-white bg-orange-500 w-[max(15vw,200px)] p-3 rounded cursor-pointer' >proceed to checkout</button>
          </div>
          
      </div>
    </form>
  )
}

export default Placeorder
