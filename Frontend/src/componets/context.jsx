import { createContext, useEffect, useState } from "react";

import cart from "../pages/cart/cart";
import axios from "axios";

export  const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  
  const[cartitem,setcartitem]=useState({})
  const url="http://localhost:4000"
  const [token,settoken]=useState("")
  const[food_list,setfoodlist]=useState([])
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

  const fetchfoodlist = async()=>{
    const response=await axios.get(url+"/api/food/list")
    setfoodlist(response.data.data)
  }

  useEffect(()=>{
   
    async function loaddata(){
      await fetchfoodlist();
       if(localStorage.getItem("token"))
    {
      settoken(localStorage.getItem("token"))
    }
    }
    loaddata();
  })
  const contextValue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart,
    gettotal,
    url,
    token,
    settoken
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default { StoreContextProvider };
