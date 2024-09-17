import { createContext, useEffect, useState } from "react";

import cart from "../pages/cart/cart";
import axios from "axios";

export  const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  
  const[cartitem,setcartitem]=useState({})
  const url="http://localhost:4000"
  const [token,settoken]=useState("")
  const[food_list,setfoodlist]=useState([])
  const addtocart = async (itemid) => {
    if (!cartitem[itemid]) {
        setcartitem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
        setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
    if (token) {
        try {
            await axios.post(
                `${url}/api/cart/add`,
                { itemid },
                { headers: { Authorization: `Bearer ${token}` } } // Use 'Authorization' header with 'Bearer' prefix
            );
        } catch (error) {
            console.error('Failed to add item to cart:', error.response?.data || error.message);
        }
    }
};

const removefromcart = async (itemid) => {
  // Update cart item state first
  setcartitem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemid] > 0) {
          updatedCart[itemid] -= 1;
      }
      return updatedCart;
  });

  // If token exists, make the API request to remove the item from the cart
  if (token) {
      try {
          await axios.post(
              `${url}/api/cart/remove`,
              { itemid },
              { headers: { Authorization: `Bearer ${token}` } } // Use 'Authorization' header with 'Bearer' prefix
          );
      } catch (error) {
          console.error('Failed to remove item from cart:', error.response?.data || error.message);
      }
  }
};
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
  const loadcartdata = async (token) => {
    try {
        const response = await axios.get(
            `${url}/api/cart/getcart`, // Ensure this is the correct endpoint
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setcartitem(response.data.cartdata);
    } catch (error) {
        console.error('Failed to load cart data:', error.response?.data || error.message);
    }
};
useEffect(() => {
    async function loaddata() {
        await fetchfoodlist();
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            settoken(storedToken);
            await loadcartdata(storedToken); // Use the stored token directly
        }
    }
    loaddata();
}, []); // Add dependency array to prevent infinite loop

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
