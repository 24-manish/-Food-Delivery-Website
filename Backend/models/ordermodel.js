import mongoose from "mongoose";

// Define the Order schema
const orderSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true, min: 1 }
  }],
  amount: { type: Number, required: true, min: 0 },
  address: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true }
  }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Define and export the Order model
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;