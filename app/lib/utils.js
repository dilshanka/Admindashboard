import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected 🚀")
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
