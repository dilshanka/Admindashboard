import { Product, ProductInv, User, ProductEmp } from "./models";
import { connectToDB } from "./utils";
import Order from './orderModel'

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};







export const fetchProductsInv = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await ProductInv.find({ title: { $regex: regex } }).count();
    const productsInv = await ProductInv.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, productsInv };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProductInv = async (id) => {
  try {
    connectToDB();
    const productInv = await ProductInv.findById(id);
    return productInv;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchProductsEmp = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await ProductEmp.find({ title: { $regex: regex } }).count();
    const productsEmp = await ProductEmp.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, productsEmp };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Employee!");
  }
};

export const fetchProductEmp = async (id) => {
  try {
    connectToDB();
    const productEmp = await ProductEmp.findById(id);
    return productEmp;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Employee!");
  }
};

// Function to fetch orders with pagination and search
export const fetchOrders = async (q, page) => {
  const regex = new RegExp(q, 'i');
  const ITEM_PER_PAGE = 5;

  try {
    await connectToDB();
    const query = {
      $or: [
        { user: { $regex: regex } },
        { name: { $regex: regex } },
        { mobileNo: { $regex: regex } }
      ]
    };

    console.log('Query:', query);

    const count = await Order.countDocuments(query);
    const orders = await Order.find(query)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    console.log('Fetched Orders:', orders);

    return { count, orders };
  } catch (err) {
    console.error('Failed to fetch orders!', err);
    throw new Error('Failed to fetch orders!');
  }
};


// Function to fetch a single order by ID






// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
