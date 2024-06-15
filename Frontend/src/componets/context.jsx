import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export  const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  
  const[cartitem,setcartitem]=useState({})
  const addtocart=(itemid)=>{
    if(!cartitem[itemid]){
      setcartitem((prev)=>({...prev,[itemid]:1}))
    }
    else{
      setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }

  }

  const removefromcart =(itemid)=>
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  
  useEffect(()=>{
      console.log(cartitem)
  },[cartitem])


  const contextValue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default { StoreContextProvider };
