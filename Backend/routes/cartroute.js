import express from 'express'
import { addtocart,removefromcart,getcart,clearcart} from '../controllers/cartcontroller.js'
import authmiddleware from '../middleware/auth.js';
const cartrouter = express.Router();

cartrouter.post('/add',authmiddleware, addtocart);
cartrouter.post('/remove',authmiddleware, removefromcart);
cartrouter.get('/getcart',authmiddleware, getcart);
cartrouter.post('/clear', authmiddleware,clearcart); // Add clear cart endpoint

export default cartrouter;
