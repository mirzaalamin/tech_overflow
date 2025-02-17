import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODDB_URI;

if (!MONGODB_URI) {
  throw new Error("MongoDB connection string is not defined");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "techoverflow",
      })
      .then((result) => {
        console.log("Database connection Established");
        return result;
      })
      .catch((error) => {
        console.log("Error connecting to MongoDB", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
