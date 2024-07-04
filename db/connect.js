"use server"
import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGO_URL;

let isConnected;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (isConnected) {
    console.log("using existing database connection");
    return 
  }
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  isConnected = cached.conn.connections[0].readyState;
  return cached.conn;
}

export default connectDB;