import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import cart from "../pages/cart/cart";

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
  
  const gettotal=()=>{
     let totalamount =0;
     for(const item in cartitem)
      { 
        if(cartitem[item] >0){

          let iteminfo = food_list.find((product)=>product._id === item)
          totalamount += iteminfo.price*cartitem[item];
        }
      }
      return totalamount;
  }


  const contextValue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart,
    gettotal
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default { StoreContextProvider };
