import React, { useContext } from 'react';
import { StoreContext } from '../componets/context';
import { Fooditem } from '../componets/fooditem';
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='m-7' >
      <h2 className='text-3xl' >Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-7 gap-12 gap-x-12">
        {food_list.map((item,index)=>{
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} img={item.image}   />
        })}
        
      </div>
    </div>
  );
};

export default FoodDisplay;
