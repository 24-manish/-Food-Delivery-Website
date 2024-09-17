import React, { useContext,  useState } from 'react'
import { StoreContext } from '../../componets/context'
import { useNavigate } from 'react-router-dom'

const Placeorder = () => {
  const { gettotal, token, food_list, cartitem, url } = useContext(StoreContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData((prevData) => ({ ...prevData, [name]: value }))
  }
  

  return (
    <form className='flex items-start justify-between gap-12 mt-24'>
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-2xl font-semibold mb-14'>Delivery Information</p>
        <div className='flex gap-3'>
          <input
            className='mb-4 w-full p-3 border rounded outline-orange-600'
            type="text"
            name="firstname"
            placeholder='First Name'
            value={data.firstname}
            onChange={onChangeHandler}
          />
          <input
            className='mb-4 w-full p-3 border rounded outline-orange-600'
            type="text"
            name="lastname"
            placeholder='Last Name'
            value={data.lastname}
            onChange={onChangeHandler}
          />
        </div>
        <input
          className='mb-4 w-full p-3 border rounded outline-orange-600'
          type="email"
          name="email"
          placeholder='Email Address'
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          className='mb-4 w-full p-3 border rounded outline-orange-600'
          type="text"
          name="street"
          placeholder='Street'
          value={data.street}
          onChange={onChangeHandler}
        />
        <div className='flex gap-3'>
          <input
            className='mb-4 w-full p-3 border rounded outline-orange-600'
            type="text"
            name="city"
            placeholder='City'
            value={data.city}
            onChange={onChangeHandler}
          />
          <input
            className='mb-4 w-full p-3 border rounded outline-orange-600'
            type="text"
            name="state"
            placeholder='State'
            value={data.state}
            onChange={onChangeHandler}
          />
        </div>
        <div className='flex gap-3'>
          <input
            className='mb-4 w-full p-3 border rounded outline-orange-600'
            type="text"
            name="zipcode"
            placeholder='Zip Code'
            value={data.zipcode}
            onChange={onChangeHandler}
          />
          <input
            className='mb-4 w-full p-3 border rounded outline-orange-600'
            type="text"
            name="country"
            placeholder='Country'
            value={data.country}
            onChange={onChangeHandler}
          />
        </div>
        <input
          className='mb-4 w-full p-3 border rounded outline-orange-600'
          type="text"
          name="phone"
          placeholder='Phone No'
          value={data.phone}
          onChange={onChangeHandler}
        />
      </div>
      <div className='w-full max-w-[max(40%,500px)]'>
        <div className='flex-1 flex-col gap-5'>
          <h2>Cart Total</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>{gettotal()}</p>
            </div>
            <hr className='mt-3 mr-0' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>{gettotal() === 0 ? 0 : 2}</p>
            </div>
            <hr className='mt-3 mr-0' />
            <div className='flex justify-between text-[#555]'>
              <p>Total</p>
              <p>{gettotal() === 0 ? 0 : gettotal() + 2}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/order')}
            className='border-none text-white bg-orange-500 w-[max(15vw,200px)] p-3 rounded cursor-pointer'
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
