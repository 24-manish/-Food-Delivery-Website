import ordermodel from "../models/ordermodel.js";

import usermodel from "../models/usermodel.js"



//placing user order from front end 
const placeorder = async (req,res)=>{

    try{
        const neworder=new ordermodel({
            userid:req.body.userid,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await neworder.save();
        await usermodel.findByIdAndUpdate(req.body.userid,{cartdata:{}});
    }
    catch(error){
        console.log(error);
    }


}

export {placeorder}