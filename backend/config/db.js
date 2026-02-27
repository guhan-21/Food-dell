import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://guhanstack:EZmcgpBKt3aW8ACS@cluster0.i1mau58.mongodb.net/food-dell').then(()=>console.log("DB Connected"));
}