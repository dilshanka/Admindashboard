"use server";

import { revalidatePath } from "next/cache";
import { Product, User, ProductInv, ProductEmp } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import  AcceptedOrder  from './acceptedOrderModel'
import OutOfDelivery  from './outofdelivery'
import FinishedOrder  from './finishedorder'





export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};



export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

  let imageBase64 = '';

  // Process the image file
  const imageFile = formData.get('image');
  if (imageFile && imageFile.size > 0) {
    const buffer = await imageFile.arrayBuffer();
    const base64String = Buffer.from(buffer).toString('base64');
    imageBase64 = `data:${imageFile.type};base64,${base64String}`;
  }

  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      img: imageBase64,  // Save the image as base64 string
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};





export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};



export const addProductInv = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProductInv = new ProductInv({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProductInv.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/Inventory");
  redirect("/dashboard/Inventory");
};






export const updateProductInv = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFieldsInv = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFieldsInv).forEach(
      (key) =>
        (updateFieldsInv[key] === "" || undefined) && delete updateFieldsInv[key]
    );

    await ProductInv.findByIdAndUpdate(id, updateFieldsInv);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/Inventory");
  redirect("/dashboard/Inventory");
};



export const deleteProductInv = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ProductInv.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/Inventory");
};

export const addproductEmp = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);


    let imageBase64 = "";

  // Process the image file
  const imageFile = formData.get("image");
  if (imageFile && imageFile.size > 0) {
    const buffer = await imageFile.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    imageBase64 = `data:${imageFile.type};base64,${base64String}`;
  }



  try {
    connectToDB();

    const newproductEmp = new ProductEmp({
      title,
      desc,
      price,
      stock,
      color,
      size,
      img: imageBase64,
    });

    await newproductEmp.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Employee!");
  }

  revalidatePath("/dashboard/Employees");
  redirect("/dashboard/Employees");
};

export const updateProductEmp = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFieldsEmp = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFieldsEmp).forEach(
      (key) =>
        (updateFieldsEmp[key] === "" || undefined) &&
        delete updateFieldsEmp[key]
    );

    await ProductEmp.findByIdAndUpdate(id, updateFieldsEmp);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Employee!");
  }

  revalidatePath("/dashboard/Employees");
  redirect("/dashboard/Employees");
};

export const deleteproductEmp = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await ProductEmp.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete a Employee");
  }

  revalidatePath("/dashboard/Employees");
};

export const saveAcceptedOrder = async (formData) => {
  const { orderId, user, name, mobileNo, items, totalAmount, deliveryFee, destination } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newAcceptedOrder = new AcceptedOrder({
      orderId,
      user,
      name,
      mobileNo,
      items,
      totalAmount,
      deliveryFee,
      destination,
    });

    await newAcceptedOrder.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save order!");
  }


};


export const saveoutofdelivery = async (formData) => {
  const { orderId, user, name, mobileNo, items, totalAmount, deliveryFee, destination } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newOutOfDelivery = new OutOfDelivery({
      orderId,
      user,
      name,
      mobileNo,
      items,
      totalAmount,
      deliveryFee,
      destination,
    });

    await newOutOfDelivery.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save order!");
  }


};


export const savefinisheddelivery = async (formData) => {
  const { orderId, user, name, mobileNo, items, totalAmount, deliveryFee, destination } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newFinishedOrder= new FinishedOrder({
      orderId,
      user,
      name,
      mobileNo,
      items,
      totalAmount,
      deliveryFee,
      destination,
    });

    await newFinishedOrder.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to save order!");
  }


};
