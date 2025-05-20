

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



// require('dotenv').config({ path: './.env' });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// import app from './app.js';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Debug middleware - log all requests
// app.use((req, res, next) => {
//   console.log(`📨 ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.use('/api/auth', authRoutes);

// // Basic route to test server
// app.get('/', (req, res) => {
//   res.json({ message: 'Server is running' });
// });

// // Handle 404 errors
// app.use((req, res) => {
//   console.log(`❌ 404 Error for ${req.method} ${req.url}`);
//   res.status(404).json({ 
//     message: 'Route not found',
//     note: 'For registration, use POST /api/auth/register'
//   });
// });

// // MongoDB connection
// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('✅ Connected to MongoDB Atlas successfully!');
//   } catch (err) {
//     console.error('❌ MongoDB connection error:', err.message);
//     console.error('Please check your .env file and make sure MONGODB_URI is correct');
//   }
// })();

// const PORT = process.env.PORT || 5000; // Changed to match your request port
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`
// Available endpoints:
// - GET  http://localhost:${PORT}/              (Server test)
// - POST http://localhost:${PORT}/api/auth/register (User registration)
//   `);
// }); 