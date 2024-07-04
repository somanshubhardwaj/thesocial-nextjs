"use server"
import connectDB from "@/db/connect.js";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    await connectDB();
    return NextResponse.json({ message: "Hello from the API" });
  } catch (error) {
    return NextResponse.error({ message: error.message });
  }
}
