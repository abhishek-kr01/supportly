import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env");
}

declare global {
    var mongooseConn: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

let cached = global.mongooseConn;

if (!cached) {
    cached = global.mongooseConn = {
        conn: null,
        promise: null,
    };
}

const connectDb = async () => {
    if (cached.conn) {
        console.log("✅ Using cached DB connection");
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "supportly",
            bufferCommands: false,
            serverSelectionTimeoutMS: 10000,
        });
    }

    try {
        cached.conn = await cached.promise;

        console.log("✅ MongoDB Connected");

        return cached.conn;
    } catch (error) {
        cached.promise = null;

        console.error("❌ MongoDB connection error:", error);

        throw error;
    }
};

export default connectDb;