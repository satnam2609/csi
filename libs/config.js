import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://satnamsingh:1234@nodeexpressprojects.mjjaozj.mongodb.net/film-fiesta?retryWrites=true&w=majority"
    );
    if (connection) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Database error", error);
  }
};
