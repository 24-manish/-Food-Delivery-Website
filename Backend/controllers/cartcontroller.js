import usermodel from "../models/usermodel.js";

// Add items to user cart
const addtocart = async (req, res) => {
  try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
    let cartdata = userdata.cartdata || {};

    // Check if the item exists in the cart and increment, otherwise add it
    if (!cartdata[req.body.itemid]) {
      cartdata[req.body.itemid] = 1; // Add new item with quantity 1
    } else {
      cartdata[req.body.itemid] += 1; // Increment the quantity
    }

    await usermodel.findByIdAndUpdate(req.body.userid, { cartdata });
    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding item to cart" });
  }
};

// Remove items from user cart
const removefromcart = async (req, res) => {
  try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
    let cartdata = userdata.cartdata || {};

    if (cartdata[req.body.itemid]) {
      if (cartdata[req.body.itemid] > 1) {
        cartdata[req.body.itemid] -= 1; // Decrease the quantity if more than 1
      } else {
        delete cartdata[req.body.itemid]; // Remove the item if quantity is 1
      }

      await usermodel.findByIdAndUpdate(req.body.userid, { cartdata });
      res.json({ success: true, message: "Item removed from cart" });
    } else {
      res.json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing item from cart" });
  }
};

// Fetch user cart data
const getcart = async (req, res) => {
  try {
    let userdata = await usermodel.findOne({ _id: req.body.userid });
    let cartdata = userdata.cartdata || {};

    res.json({ success: true, cartdata });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching cart data" });
  }
};

export { addtocart, removefromcart, getcart };
