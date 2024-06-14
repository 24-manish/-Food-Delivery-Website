import React, { useContext } from 'react';
import { StoreContext } from '../componets/context';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <h2>Top dishes near you</h2>
      <div className="food-list">
        
      </div>
    </div>
  );
};

export default FoodDisplay;
