import { connect } from "mongoose";
import process from "process";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
