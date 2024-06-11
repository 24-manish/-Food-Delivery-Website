import React from 'react';
import header_img from '../../assets/header_img.png';

const Header = () => {
  return (
    <div 
      className='h-[34vw] m-7 bg-no-repeat  bg-center bg-contain relative  ' 
      style={{ backgroundImage: `url(${header_img})` }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] ">
        
      <h1 className='font-bold text-4xl text-white md:text-5xl lg:text-6xl '>Order your favourite food here</h1>
       
        <p className=' text-white text-vw ' >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit blanditiis exercitationem voluptatem illo nihil, ea labore minima eum, nulla amet id in placeat. Vel est quos sunt eos deleniti molestiae.
        </p>
        <button className=" bg-white  rounded-3xl px-4 py-2">
  View Menu
</button>
      </div>
    </div>
  );
}

export default Header;
