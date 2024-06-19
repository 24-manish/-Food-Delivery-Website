import mongoose from "mongoose";

export const connectbd = async()=>{
    await mongoose.connect('mongodb+srv://Manish:12345@cluster0.d8jneqd.mongodb.net/-FOOD-DELIVERY-WEBSITE').then(()=>console.log("db connected"));
}