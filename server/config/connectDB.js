import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Successfully Connected");
  } catch (err) {
    console.log("MongoDB refused to Connect : ", err.message);
  }
};

export default connectDB;
