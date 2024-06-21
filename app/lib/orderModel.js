import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define the item schema
const itemSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
}, { _id: false }); // Use the provided _id

// Define the order schema
const orderSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  user: { type: String, required: true },
  name: { type: String, required: true }, // Add name field
  mobileNo: { type: String, required: true }, // Add mobileNo field
  items: { type: [itemSchema], required: true },
  totalAmount: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  destination: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { versionKey: false }); // Disable __v field

// Create and export the model
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
