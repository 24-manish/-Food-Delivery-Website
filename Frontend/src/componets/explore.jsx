import React from 'react'
import { menu_list} from '../assets/assets'
import '../index.css'
const explore = ({category,setcategory}) => {
  return (
    <div className='flex flex-col gap-5 p-6 '>
      <h1 className='text-4xl font-bold ' >Explor our menu</h1>
      <p className='max-w-[60] ' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere nulla eum officia velit asperiores est soluta neque laborum sunt, repellat molestias quasi nostrum exercitationem amet provident optio delectus vero!</p>     
      <div className='flex justify-between items-center gap-8 text-center m-5 overflow-x-scroll scrollbar ' >
        { menu_list.map((item,index)=>{
          return (
            <div key={index} onClick={()=>setcategory(prev=>prev==item.menu_name?"All":item.menu_name)} >
            <img
              className={`${category === item.menu_name ? "border-4 border-red-600 p-1 " : ""} w-[7.5vw] min-w-[20px] cursor-pointer rounded-full transition`}
              src={item.menu_image}
              alt=""
            />
              <p className='mt-3 text-xl cursor-pointer text-slate-700 ' >{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='m-3 h-1 bg-slate-400 border-none  ' >
      </hr>
    </div>
  )
}

export default explore
