const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const logger = require('./utils/logger');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const { PORT } = require('./config/server');
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});