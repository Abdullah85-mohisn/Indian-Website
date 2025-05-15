// utils/db.js
const mongoose = require('mongoose');

let isConnected = false;
require('dotenv').config()

async function connectToDatabase() {
    if (isConnected) {
        console.log("ℹ️ Already connected to MongoDB");
        return;
    }

    try {
        // console.log("🔐 DB_URI:", process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        throw new Error("MongoDB connection failed");
    }
}

module.exports = connectToDatabase;
