import express from 'express';
import cors from 'cors';

// import projectRoutes from './routes/projects.router.js';
// import serviceRoutes from './routes/services.router.js';

const app = express();

// Middleware
app.use(cors());

// Body parsing middleware
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

// Debug middleware - log all requests
app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.url}`);
    console.log('Request Headers:', req.headers);
    next();
});

// Routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.router.js';



// app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/services', serviceRoutes);

// Basic route to test server
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// // Handle 404 errors
// app.use((req, res) => {
//     console.log(`❌ 404 Error for ${req.method} ${req.url}`);
//     res.status(404).json({
//         message: 'Route not found',
//         note: 'For registration, use POST /api/auth/register'
//     });
// });

export { app };