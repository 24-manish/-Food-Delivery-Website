import React, { useState } from 'react'
import Header from '../../componets/header/header'
import Explore from '../../componets/explore'
import Fooddisplay from '../../componets/fooddisplay'
const home = () => {
  const [category,setcategory]=useState("All");
  return (
    <div>
      <Header/>
      <Explore category={category} setcategory={setcategory}  />
      <Fooddisplay category={category} />
    </div>
  )
}

export default home
