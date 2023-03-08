import mongoose from "mongoose";
import "dotenv/config";

let url = process.env.MONGO_URL;

const connectDB = (url: string) => {
  return mongoose.connect(url);
};

export default connectDB;
