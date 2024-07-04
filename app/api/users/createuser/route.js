
import connectDB from "@/db/connect.js";
import User from "@/models/User.model.js";
export async function POST(request) {
  try {
    await connectDB();
    const { fullName, username, email, gender } =await request.json();
    
    const user = new User({ fullName, username, email, gender });
    console.log(user);
    await user.save();
    return new Response(JSON.stringify({ success: true, user }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
