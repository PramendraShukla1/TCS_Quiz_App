import mongoose from "mongoose";

export default async function connect(){
   await mongoose.connect(process.env.MONGO)
   console.log("Connected to MONGO DB!")
}
