import mongoose from "mongoose";
import { envs } from "./enviroments";

async function dbConnect(): Promise<void> {
  await mongoose.connect(envs.MONGO_URI);
}

export default dbConnect;
