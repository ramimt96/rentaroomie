import mongoose from 'mongoose';

// Define a type for our cached mongoose connection
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

// Type for global with mongoose property
interface GlobalWithMongoose {
  mongoose?: MongooseCache;
}

// Only use environment variables, never hardcode credentials
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// Using const instead of let since it's never reassigned
const cached: MongooseCache = ((global as unknown as GlobalWithMongoose).mongoose) || 
  { conn: null, promise: null };

// Initialize the global cache if it doesn't exist
if (!(global as unknown as GlobalWithMongoose).mongoose) {
  (global as unknown as GlobalWithMongoose).mongoose = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect; 