import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import '../index.css'
import  {StoreContext} from '../componets/context'
  export const Fooditem = ({id,name,price,description,img}) => {
 
  const{cartitem,addtocart,removefromcart}=useContext(StoreContext);
  return (
    <div className='w-full m-auto rounded-2xl shadow-lg shadow-slate-500 animate-fadein ' >
      <div className="w-full rounded  relative ">
        <img className='w-full rounded-tl-2xl rounded-tr-2xl' src={img} alt="" />
        {!cartitem[id]  ?  <img className='w-8 absolute bottom-4 right-4 cursor-pointer rounded-xl' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" />:
        <div className='absolute bottom-4 right-4 flex items-center gap-3 p-1 rounded-3xl bg-white '>
          <img className='w-7' onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartitem[id]}</p>
          <img className='w-7' onClick={()=>addtocart(id)} src={assets.add_icon_green} />
        </div>
        }
      </div>
      <div className="p-5 ">
        <div className="flex justify-between items-center mb-2 ">
            <p className='text-lg font-bold' >{name}</p>
            <img className='w-16' src={assets.rating_starts} alt="" />
        </div>
        <p className='text-slate-500 text-sm ' >{description}</p>
        <p className=' text-red-600 text-xl font-semibold m-2 ' >${price}</p>
      </div>
    </div>
  );
};


