import express from "express"
import authmiddleware from "../middleware/auth.js"

import { placeorder } from "../controllers/ordercontroller.js"

const orderrouter=express.Router();

orderrouter.post("/place",authmiddleware,placeorder)



export default orderrouter;