"use server";
import User from "@/models/User.model.js";
import connectDB from "@/db/connect.js";

const addUser = async (
  fullName: string,
  username: string,
  email: string,
  gender: string
) => {
  await connectDB();
  const boyPic = "https://avatar.iran.liara.run/public/boy";
  const girlPic = "https://avatar.iran.liara.run/public/girl";
  const newUser = new User({
    fullName,
    username,
    email,
    gender,
    profilePicture: gender === "male" ? boyPic : girlPic,
  });
  await newUser.save();
  console.log("User added successfully");
};
export default addUser;
