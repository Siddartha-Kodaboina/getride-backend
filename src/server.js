const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const { connectDB } = require('./config/database');
const healthRoutes = require('./routes/health.routes');
const rideRequestRoutes = require('./routes/rideRequest.routes');

// Import models to ensure associations are set up
require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/health', healthRoutes);
app.use('/api/ride-requests', rideRequestRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Start listening
    app.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
      console.log(`📍 Environment: ${config.node_env}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
