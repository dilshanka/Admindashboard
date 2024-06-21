// acceptedOrderModel.js
import mongoose from 'mongoose';

const finishedOrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  mobileNo: { type: String, required: true },
  items: [{
    itemId: String,
    name: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  destination: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Order Accepted' },
});

const FinishedOrder = mongoose.models.FinishedOrder || mongoose.model('FinishedOrder', finishedOrderSchema);

export default FinishedOrder;


