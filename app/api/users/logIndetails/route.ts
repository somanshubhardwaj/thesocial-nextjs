import User from "@/models/User.model";
import connectDB from "@/db/connect";
export async function POST(request: { json: () => Promise<{ email: string }> }) {
  try {
    const { email } = await request.json();
    await connectDB();
 

    const user = await User.findOne({ email: email })
      .select("username fullName profilePicture")
      .lean();
    if (!user) {
      throw new Error("User not found");
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
