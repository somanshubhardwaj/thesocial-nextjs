import connectDB from "@/db/connect.js";
import User from "@/models/User.model.js";
export async function POST(request: { json: () => PromiseLike<{ fullName: any; username: any; email: any; gender: any; }> | { fullName: any; username: any; email: any; gender: any; }; }) {
  try {
    await connectDB();
    const { fullName, username, email, gender } = await request.json();

    if (!fullName || !username || !email || !gender) {
      return new Response(
        JSON.stringify({ success: false, error: "Please provide all fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    let checkUser = await User.findOne({ username });
    if (checkUser) {
      return new Response(
        JSON.stringify({ success: false, error: "Username already exists" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    checkUser = await User.findOne({ email });
    if (checkUser) {
      return new Response(
        JSON.stringify({ success: false, error: "Email already exists" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const user = new User({ fullName, username, email, gender });
    console.log(user);
    await user.save();
    return new Response(JSON.stringify({ success: true, user }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: (error as any).message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
