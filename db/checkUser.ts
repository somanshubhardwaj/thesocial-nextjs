 "use server"
import User from "@/models/User.model.js";
import connectDB from "@/db/connect.js";

const checkEmail = async (email: string) => {
 
  try{
  console.log("checkEmail");
  await connectDB();
  const user = await User.findOne({
    email,
  });
  if (user) {
    return true;
  }
  return false;}
  catch(err){
    console.log(err);
  }
};
const checkUsername = async (username: string) => {
  await connectDB();
  const user = await User.findOne({
    username,
  });
  if (user) {
    return true;
  }
  return false;
};

export { checkEmail, checkUsername };
