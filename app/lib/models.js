import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);


const productSchemaInv = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);
const productSchemaEmp = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      min: 0,
    },
    stock: {
      type: String,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

  
const acceptorderschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const outofdelivery = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);



const finishorder = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);















export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export const ProductInv =mongoose.models.ProductInv || mongoose.model("ProductInv", productSchemaInv);
export const ProductEmp =mongoose.models.ProductEmp || mongoose.model("ProductEmp", productSchemaEmp);
export const AcceptedOrder =
  mongoose.models.AcceptedOrder ||
  mongoose.model("AcceptedOrder", acceptorderschema);

export const OutOfDelivery = mongoose.models.OutOfDelivery || mongoose.model("OutOfDelivery", outofdelivery);

export const FinishedOrder = mongoose.models.FinishedOrder || mongoose.model("FinishedOrder", finishorder);






