import React, { useContext } from 'react'
import { StoreContext } from '../../componets/context'
import { useNavigate } from 'react-router-dom';

const cart = () => {

  const{ cartitem , food_list , removefromcart,gettotal}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='mt-28' >
      <div>
        <div className='grid  grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr]  items-center  text-gray-500 text-lg   ' >
          <p>itmes</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartitem[item._id]>0)
            {
              return (<div>
              <div className='grid  grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] items-center mt-3 ml-0 mb-3 text-lg  text-black ' > 
                <img className='w-[100px]' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitem[item._id]}</p>
                <p>${item.price*cartitem[item._id]}</p>
                <p onClick={()=> removefromcart(item._id) } className='cursor-pointer' >X</p>
                
              </div>
              <hr className='h-[1px] bg-slate-500 border-none  ' />
              </div>
              )
            }
        }  )}
      </div>
      <div className='mt-20 flex justify-between gap-[max(12vw,20px)]' >
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
          <div className='flex' >
            <div  >
              <p className='text-[#555]  ' >If u have a promo code enter it here</p>
              <div className='mt-3 flex justify-between items-center gap-5 bg-gray-300 rounded'>
                <input className='bg-transparent border-none outline-none pl-3 '  type="text" placeholder='promo code'  />
                <button className='w-fit p-4 bg-black text-white rounded  ' >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default cart
