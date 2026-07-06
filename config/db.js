const mongoose = require('mongoose');

// In serverless environments (Vercel) the module can be re-invoked many times
// without a cold start, so we cache the connection promise on the global
// object to avoid opening a new connection on every request.
let cached = global.__mongooseConn;

if (!cached) {
  cached = global.__mongooseConn = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  const uri = process.env.MONGODB_URI;
  console.log('URI:', uri.replace(/\/\/.*?:.*?@/, '//admin:****@'));

  if (!uri) {
    console.warn(
      '[db] MONGODB_URI is not set. The site will run using static fallback data only.'
    );
    return null;
  }

  if (!cached.promise) {
    mongoose.set('strictQuery', true);

    cached.promise = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 8000,
      })
      .then((mongooseInstance) => {
        console.log('[db] MongoDB connected:', mongooseInstance.connection.host);
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('[db] MongoDB connection error:', err.message);
        cached.promise = null;
        return null;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

function isDBConnected() {
  return mongoose.connection.readyState === 1;
}

module.exports = { connectDB, isDBConnected };
