import Order from "../models/ordermodel.js";
import User from "../models/usermodel.js"; // Updated to match the consistent naming convention

// Place order and clear cart
const placeorder = async (req, res) => {
    try {
      const { userid, items, amount, address } = req.body;
      
      // Log received items for debugging
      console.log('Received items:', items);
  
      // Validate input
      if (!userid || !items || !amount || !address) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }
  
      // Validate the User ID
      const user = await User.findById(userid);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Validate items format
      if (!Array.isArray(items) || items.some(item => !item.itemId || !item.quantity)) {
        return res.status(400).json({ success: false, message: 'Invalid items format' });
      }
  
      // Create and save the order
      const order = new Order({
        userid,
        items,
        amount,
        address
      });
  
      await order.save();
  
      // Optionally: Clear the cart here if it's associated with the user
      // await clearCartForUser(userid); // Implement this function based on your cart logic
  
      res.status(200).json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ success: false, message: 'Error placing order' });
    }
  };
  
  export { placeorder };